<template>
  <el-dialog v-model="store.isRegDialogOpen" width="440" center :show-close="false" class="login-dialog">
    <template #header>
      <h1>аки<span class="accent">.</span>арт<span class="accent">.</span>площадки</h1>
    </template>
    <div class="wrapper">
      <div class="text">
        <span>Войдите, чтобы продолжить</span>
      </div>
      <el-form>
        <el-form-item>
          <el-input v-model="form.pass" placeholder="Введите ФИО" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.email" type="email" placeholder="Введите адрес элетронный почты" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.pass" type="tel" placeholder="Введите номер телефона" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.pass" type="password" placeholder="Введите пароль" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.pass" type="password" placeholder="Подтвердите пароль" />
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.group" placeholder="Please select your group" size="large">
            <el-option v-for="group of groups" :key="group.value" :value="group.value" :label="group.label" />
          </el-select>
        </el-form-item>
        <template v-if="form.group === 'landlord'">
          <el-form-item>
            <el-select v-model="form.type" placeholder="Выберите категорию индустрии" size="large">
              <el-option v-for="userType of types[form.group]" :key="userType.value" :value="userType.value"
                :label="userType.label" />
            </el-select>
          </el-form-item>
        </template>
        <el-form-item>
          <span class="policy">Регистрируясь, Вы соглашаетесь с <a href="#">политикой конфиденциальности</a> и <a
              href="#">политикой в
              отношении обработки персональных данных</a></span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="confirm">
            Зарегистрироваться
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <span @click="openLoginDialog" class="pointer">Уже есть аккаунт?</span>
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
  group: ''
})
const confirm = () => {
  console.log(form.value);
}
const openLoginDialog = () => {
  store.hideRegDialog()
  store.showLoginDialog()
}


const groups = [
  { value: 'landlord', label: 'Арендодатель' },
  { value: 'tenant', label: 'Арендатор' },
  // { value: 'admin', label: 'Администратор платформы' },
];
const types = [
  {
    landlord: [
      { value: 'landlordType1', label: 'Киностудии' },
      { value: 'landlordType2', label: 'Галереи' },
      { value: 'landlordType3', label: 'Издательства' },
      { value: 'landlordType4', label: 'Книжные магазины' },
      { value: 'landlordType5', label: 'Дизайн студии' },
      { value: 'landlordType6', label: 'Владельцы креативных пространств' },
      { value: 'landlordType7', label: 'Кинотеатры' },
      { value: 'landlordType8', label: 'Звукозаписывающие студии' },
      { value: 'landlordType9', label: 'AR/VR студии' },
    ]
  },
  {
    tenant: [
      { value: 'tenantType1', label: 'Съемочная группа' },
      { value: 'tenantType2', label: 'Продюсерская компания' },
      { value: 'tenantType3', label: 'Дизайнер' },
      { value: 'tenantType4', label: 'Оператор' },
      { value: 'tenantType5', label: 'Музыкант' },
      { value: 'tenantType6', label: 'Креативные агентства' },
      { value: 'tenantType7', label: 'Кинокомпании' },
      { value: 'tenantType8', label: 'Художник' },
    ]
  },
  {
    admin: [
      { value: 'adminType', label: 'Сотрудник АНО “Агентство креативных индустрий”' }
    ]
  },
];
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

    .policy {
      text-align: center;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;

      a {
        color: $accent;
        text-decoration: none;
      }
    }

    .el-form-item:last-child {
      margin: 0;
    }

    .el-button,
    .el-input {
      width: 100%;
      color: $text;
      background-color: $accent;
    }
  }

  .dialog-footer {
    margin: 0 20px 20px 20px;
    display: flex;
    justify-content: center;
    color: $accent;
    font-size: 16px;
  }

  .el-input,
  .el-select .el-input .el-input--suffix {
    height: 40px;
    width: 100%;
  }
}
</style>