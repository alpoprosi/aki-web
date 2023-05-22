<template>
  <div class="app-content">
    <el-container>
      <el-header class="header">
        <el-row class="wrapper">
          <el-col class="brand-logo" :span="8">
            <h1>аки<span class="accent">.</span>арт<span class="accent">.</span>площадки</h1>
          </el-col>
          <el-col :span="12">
            <el-input v-model="searchText" placeholder="Что вы ищите?" class="outlined search">
              <template #suffix>
                <span class="material-icons md-18" @click="search">search</span>
              </template>
            </el-input>
          </el-col>
          <el-col :span="4" class="account">
            <el-dropdown trigger="click">
              <el-button type="primary" class="btn">
                <span class="material-icons md-18">person</span>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="userStore.showLoginDialog">Login</el-dropdown-item>
                  <el-dropdown-item @click="userStore.showRegDialog">Create account</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
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
        <el-row class="wrapper">
          <div class="brand-logo">
            <span>аки<span class="accent">.</span>арт<span class="accent">.</span>площадки</span>
          </div>
        </el-row>
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

const search = () => {
  console.log('submit!', searchText.value)
}
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
  height: 190px;
  padding: 0;
  background-image: url(../../assets/img/background-header.svg);

  .wrapper {
    height: 90px;
  }
}

.footer {
  height: 90px;
  padding: 0;
  background-image: url(../../assets/img/background-header.svg);
}

.wrapper {
  max-width: 1320px;
  margin: 0 auto;

  .brand-logo {
    h1 {
      font-size: 40px;
      font-weight: 700;
      font-style: normal;
      line-height: 50px;
      margin: auto;
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