<template>
  <el-dialog v-model="store.isLoginDialogOpen" width="440" center :show-close="false" class="login-dialog">
    <template #header>
      <h1>аки<span class="accent">.</span>арт<span class="accent">.</span>площадки</h1>
    </template>
    <div class="wrapper">
      <div class="text">
        <span>Войдите, чтобы продолжить</span>
      </div>
      <el-form>
        <el-form-item>
          <el-input v-model="form.email" placeholder="Введите адрес элетронный почты" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.pass" placeholder="Введите пароль" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="confirm">
            Войти
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <span>Забыли пароль?</span>
        <span @click="openRegDialog" class="pointer">Создать аккаунт</span>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { useUserStore } from '../../stores/userStore'
import { ref } from 'vue'
const store = useUserStore()

const form = ref({
  email: '',
  pass: '',
})
const confirm = () => {
  console.log(form.value);
}
const openRegDialog = () => {
  store.hideLoginDialog()
  store.openRegDialog()
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.login-dialog.el-dialog {
  border-radius: 7px;

  .el-dialog__header {
    h1 {
      margin: 20px 4px 0 20px;
      font-weight: 700;
      font-size: 40px;
      line-height: 50px;
      color: $dark;
    }

    .accent {
      color: $accent;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    margin: 15px 15px 0 15px;
    font-size: 16px;

    .text {
      margin: 0 auto 20px auto;
    }

    .el-form-item:last-child {
      margin: 0;
    }

    .el-button {
      width: 100%;
      color: $text;
      background-color: $accent;
    }
  }

  .dialog-footer {
    margin: 0 20px 20px 20px;
    display: flex;
    justify-content: space-between;
    color: $accent;
    font-size: 16px;
  }

  .el-input {
    height: 40px;
  }
}
</style>
