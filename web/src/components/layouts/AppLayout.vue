<template>
  <div class="app-content">
    <el-container>
      <el-header class="header">
        <el-row class="wrapper">
          <el-col class="brand-logo" :span="8">
            <router-link to="/" class="brand-logo__link">
              <h1>аки<span class="accent">.</span>арт<span class="accent">.</span>площадки</h1>
            </router-link>
          </el-col>
          <el-col :span="12">
            <el-input v-model="searchText" placeholder="Что вы ищите?" class="outlined search">
              <template #suffix>
                <span class="material-icons md-18" @click="search">search</span>
              </template>
            </el-input>
          </el-col>
          <el-col :span="4" class="account">
            <el-button type="primary" class="btn" @click="userStore.showLoginDialog">
              <span class="material-icons md-18">person</span>
            </el-button>
          </el-col>
        </el-row>
        <slot name="header" />
      </el-header>
      <el-main>
        <div class="wrapper">
          <slot />
        </div>
      </el-main>
      <el-footer class="footer">
        <div class="wrapper">
          <div class="brand-logo">
            <h1>аки<span class="accent">.</span>арт<span class="accent">.</span>площадки</h1>
          </div>
          <div class="policy">
            <a href="*" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
            <a href="*" target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a>
          </div>
        </div>
        <div class="wrapper contacts">
          <span>125009, Россия, Москва Вознесенский пер. 11. стр. 2</span>
          <span>info@moscow-creative.ru</span>
        </div>
      </el-footer>
    </el-container>
    <LoginForm v-if="userStore.isLoginDialogOpen" />
    <RegisterForm v-if="userStore.isRegDialogOpen" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginForm from '../../views/login/LoginForm.vue';
import RegisterForm from '../../views/login/RegisterForm.vue';

import { useUserStore } from '../../stores/userStore'
const userStore = useUserStore()

const searchText = ref('')

const search = () => { }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.app-content {
  position: relative;
  margin: 0;
  padding: 0;
}

.el-container {
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.header {
  height: fit-content;
  padding: 0;
  background-image: url(../../assets/img/background-header.svg);

  .wrapper {
    height: 90px;
  }
}

.footer {
  height: 156px;
  margin-top: 12px;
  padding: 30px 0;
  background-image: url(../../assets/img/background-header.svg);

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .policy {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    a {
      color: $text;
      text-decoration: none;

      &:first-child {
        margin-bottom: 16px;
      }
    }
  }

  .contacts {
    margin-top: 28px;
    color: rgba($text, .5);
    font-size: 14px;
    font-weight: 300;
  }
}

.wrapper {
  max-width: 1320px;
  margin: 0 auto;

  .brand-logo {
    &__link {
      text-decoration: none;
    }

    h1 {
      font-size: 40px;
      font-weight: 700;
      font-style: normal;
      line-height: 50px;
      margin: auto 0;
    }

    .accent {
      color: $accent;
    }
  }

  .account {
    display: flex;
    justify-content: end;
  }

  .btn {
    width: 40px;
    background-color: $pale;
    color: $text;
    border: 1px solid transparent;
  }
}

.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>