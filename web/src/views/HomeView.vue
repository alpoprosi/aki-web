<template>
  <AppLayout>
    <template #header>
      <el-row class="header">
        <el-col>
          <div class="wrapper">
            <el-space :size="10">
              <div v-for="category in categories" :key="category.value">
                <el-button class="btn-outlined" :class="{ 'active': category.value === activeCategory }"
                  @click="setFilter(category.value)">
                  <template #icon>
                    <span class="material-icons md-18">design_services</span>
                  </template>
                  {{ category.label }}
                </el-button>
              </div>
            </el-space>
          </div>
        </el-col>
      </el-row>
    </template>
    <el-row>
      <el-col>
        <div class="wrapper">
          <el-space wrap :size="10">
            <SpaceCard v-for="i of 5" :key="`card-${i}`" />
          </el-space>
        </div>
      </el-col>
    </el-row>
  </AppLayout>
</template>
<script setup>
import AppLayout from '../components/layouts/AppLayout.vue';
import SpaceCard from '../components/cards/SpaceCard.vue'
import { ref } from 'vue';

const activeCategory = ref('All');
const categories = [
  { value: 'All', label: 'Все площадки' },
  { value: 'landlordType1', label: 'Киностудии' },
  { value: 'landlordType5', label: 'Дизайн студии' },
  { value: 'landlordType2', label: 'Галереи' },
  { value: 'landlordType3', label: 'Издательства' },
  { value: 'landlordType4', label: 'Книжные магазины' },
  { value: 'landlordType7', label: 'Кинотеатры' },
  { value: 'landlordType8', label: 'Звукозаписывающие студии' },
  { value: 'landlordType6', label: 'Креативные пространства' },
  { value: 'landlordType9', label: 'AR/VR студии' },
]
const setFilter = (val) => {
  activeCategory.value = val;
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.header {
  height: 100px;
  border-top: 1px solid $pale;

}

.wrapper {
  max-width: 1320px;
  margin: 0 auto;
}
</style>