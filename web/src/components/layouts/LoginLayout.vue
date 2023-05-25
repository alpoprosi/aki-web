<script setup>
// import { router } from '@/router';
// import { useAuthStore } from '@/stores';
// // // redirect home if already logged in
// const authStore = useAuthStore();
// if (authStore.user) {
//   router.push('/');
// }
</script>

<template>
  <el-container>
    <el-main>
      <div class="row">
        <div class="col-sm-8 offset-sm-2 mt-5">
          <slot />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.el-container {
  width: 100%;
  height: 100%;
  background-color: rgba($dark, .8);
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
}

.el-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>