<template>
  <LoginLayout>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Registration</span>
        </div>
      </template>
      <el-row>
        <el-form :model="form" class="registration">
          <el-form-item label="Name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="E-mail">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="Group">
            <el-select v-model="form.group" placeholder="Please select your group">
              <el-option v-for="group of groups" :key="group.value" :value="group.value" :label="group.label" />
            </el-select>
          </el-form-item>
          <el-form-item label="Type" v-if="form.group">
            <el-select v-model="form.type" placeholder="Please select your type">
              <el-option v-for="userType of types[form.group]" :key="userType.value" :value="userType.value"
                :label="userType.label" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-space direction="horizontal">
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button>Cancel</el-button>
              <router-link to="login">Login</router-link>
            </el-space>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </LoginLayout>
</template>

<script setup>
import { reactive } from 'vue'
import LoginLayout from '../../components/layouts/LoginLayout.vue';

const form = reactive({
  name: '',
  email: '',
  group: null,
  type: null,
});
const groups = reactive([
  { value: 'landlord', label: 'Арендодатель' },
  { value: 'tenant', label: 'Арендатор' },
  { value: 'admin', label: 'Администратор платформы' },
]);
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

const onSubmit = () => {
  console.log('submit!', form)
}
</script>

<style lang="scss" scoped>
.box-card {
  margin: auto;
  width: 480px;
}

.registration {
  .el-form-item__label {
    width: 100px !important;
  }
}
</style>
