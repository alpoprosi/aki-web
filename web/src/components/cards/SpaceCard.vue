<template>
  <div class="space-card">
    <el-card>
      <img class="image" src="https://placehold.jp/300x366.png">
      <header class="header">
        <span class="material-icons md-8">face</span>
        креативные пространства
      </header>
    </el-card>
    <div class="space-card__layout"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.space-card {
  position: relative;

  .el-card {
    position: relative;
    width: 300px;
    height: 366px;
    background: transparent;
    opacity: 1;
    display: block;
    transition: .5s ease;
    backface-visibility: hidden;

    .image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }
  }

  .space-card__layout {
    width: 300px;
    height: 366px;
    background-color: $accent;
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }


  .space-card__layout:hover {
    display: block;
    opacity: 1;
  }
}

.space-card:hover .el-card {
  opacity: 0.3;
}

.space-card:hover .space-card__layout {
  opacity: 0.5;
}
</style>