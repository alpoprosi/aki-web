package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"

	"aki-web/config"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"golang.org/x/sys/unix"
)

func main() {
	conf, err := config.New()
	if err != nil {
		log.Fatalf("parsing config: %v", err)
	}

	e := echo.New()
	e.HideBanner = true
	e.HidePort = true

	e.Use(middleware.RemoveTrailingSlashWithConfig(middleware.TrailingSlashConfig{
		RedirectCode: http.StatusMovedPermanently,
	}))

	g := e.Group("")
	g.GET("*", func(c echo.Context) error {
		return c.File(filepath.Join(conf.WebPath, "index.html"))
	})

	g.Static("/static", conf.WebPath)
	g.Static("/js", filepath.Join(conf.WebPath, "js"))
	g.Static("/css", filepath.Join(conf.WebPath, "css"))
	g.Static("/img", filepath.Join(conf.WebPath, "img"))
	g.Static("/fonts", filepath.Join(conf.WebPath, "fonts"))
	g.Static("/assets", filepath.Join(conf.WebPath, "assets"))

	s := startServer(e, conf.HTTPAddr())

	sig := make(chan os.Signal, 1)
	signal.Notify(sig, unix.SIGINT, unix.SIGQUIT, unix.SIGTERM)
	for {
		<-sig

		s.Shutdown(context.Background())
	}
}

func startServer(e *echo.Echo, addr string) *http.Server {
	s := &http.Server{
		Addr:    addr,
		Handler: e,
	}

	go func() {
		log.Printf("starting server on %s...", s.Addr)
		if err := s.ListenAndServe(); err != http.ErrServerClosed {
			log.Fatal(err)
		}
	}()

	return s
}
