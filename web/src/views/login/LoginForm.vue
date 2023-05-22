<template>
  <el-dialog v-model="store.isLoginDialogOpen" width="440" center :show-close="false" class="login-dialog">
    <template #header>
      <h1>аки<span class="accent">.</span>арт<span class="accent">.</span>площадки</h1>
    </template>
    <el-form>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="store.hideLoginDialog">Cancel</el-button>
        <el-button type="primary" @click="store.hideLoginDialog">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { useUserStore } from '../../stores/userStore'
const store = useUserStore()
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.login-dialog.el-dialog {
  .el-dialog__header {
    margin-right: 0 !important;

    h1 {
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      color: $dark;
    }
  }

  .accent {
    color: $accent;
  }

  .box-card {
    margin: auto;
    width: 440px;
  }

  .el-input {
    margin-bottom: 20px;
  }
}
</style>
