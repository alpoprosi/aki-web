<template>
  <AppLayout>
    <template #header>
      <el-row class="header">
        <el-col>
          <div class="wrapper">
            <el-space :size="10">
              <div v-for="(category, index) in platformStore.categories" :key="category.value">
                <el-button class="btn-outlined" :class="{ 'active': index === platformStore.activeCategoryIndex }"
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
    <div class="title">
      <div>Все площадки</div>
      <div>
        <el-button-group>
          <el-button @click="viewType = 'list'" type="primary" class="btn-outlined"
            :class="{ 'accent': viewType === 'list' }">
            <i class="material-icons" style="font-size: 17px">view_cozy</i>Списком
          </el-button>
          <el-button @click="viewType = 'map'" type="primary" class="btn-outlined"
            :class="{ 'accent': viewType === 'map' }">
            <i class="material-icons" style="font-size: 17px">map</i>На карте
          </el-button>
        </el-button-group>
      </div>
      <div>
        <el-button class="btn-outlined">
          <i class="material-icons" style="font-size: 17px">tune</i>Фильтры
        </el-button>
      </div>
    </div>
    <div class="platform-list" v-show="viewType === 'list'">
      <PlatformssList />
    </div>
    <div v-show="viewType === 'map'" class="platform-map"></div>
  </AppLayout>
</template>
<script setup>
import AppLayout from '../../components/layouts/AppLayout.vue';
import PlatformssList from './PlatformsList.vue';

import { ref } from 'vue';
import { usePlatformStore } from '../../stores/platformStore.js'
import { onMounted } from "vue";

const platformStore = usePlatformStore();
const viewType = ref('list');
const setFilter = (val) => {
  platformStore.setCategory(val);
};
onMounted(() => {
  platformStore.getTotal()
  platformStore.getPlatforms(1);
});
</script>
<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.header {
  height: 100px;
  border-top: 1px solid $pale;
}

.wrapper {
  max-width: 1320px;
  margin: 0 auto;
}

.title {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 24px 0 44px;
  color: $dark;
  font-size: 32px;
  font-weight: 700;

  .btn-outlined {
    background-color: transparent !important;
    color: $dark;
    font-size: 18px;
    margin: 0 !important;

    i.material-icons {
      margin-right: 15px;
    }
  }

  .btn-outlined.accent {
    color: $accent;
  }
}

.platform-map {
  width: 1280px;
  height: 720px;
  margin: auto;
  border: 1px solid $dark;
}
</style>