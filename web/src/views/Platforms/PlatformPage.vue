<template>
  <AppLayout>
    <div class="platform-page">
      <div class="platform-page__title">
        <div class="platform-page__name">
          <h1>{{ platform.name }}</h1>
          <span class="platform-page__type">{{ platform.type.label }}</span>
        </div>
        <span class="platform-page__header-desc">Гибкие мини-офисы, креативные студии</span>
        <el-button @click="platformStore.toggleFavorite(route.params.id)" type="primary"
          class="btn-outlined platform-page__favorite" :class="{ 'accent': platform.isFavorite }">
          <i class="material-icons" style="font-size: 19px">favorite</i>В избранное
        </el-button>
      </div>
      <el-row>
        <el-col :span="12">
          <div class="platform-page__gallery">
            <el-carousel trigger="click" height="400px">
              <el-carousel-item v-for="item in 4" :key="item">
                <img :src="platform.imageUrl">
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-card v-if="description" class="description-card">
            <header class="description-card__header">
              <img :src="description.thumbnail" class="img">
              <h3>{{ description.title }}</h3>
              <span style="color: red; font-size: 16px;">(12 объектов)</span>
            </header>
            <p class="description-card__content">{{ description.content }}</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </AppLayout>
</template>
<script setup>
import AppLayout from '../../components/layouts/AppLayout.vue';
import { usePlatformStore } from '../../stores/platformStore';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();
const platformStore = usePlatformStore()
const platform = platformStore.getPlatformById(route.params.id)
const description = ref('')


onMounted(async () => {
  description.value = await platformStore.getDescription(Number(route.params.id) + 1)
})
</script>
<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.platform-page {
  max-width: 1320px;
  margin: auto 0;
  color: $dark;

  &__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  &__name {
    flex-grow: 0;

    h1 {
      margin: 0 0 5px 0;
    }
  }

  &__type {

    &::before {
      content: ' ';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      display: inline-block;
      margin-right: 10px;

      background-color: $accent;
    }
  }

  &__header-desc {
    flex-grow: 1;
    margin: 15px;
  }

  &__favorite {
    flex-grow: 0;
  }

  .btn-outlined {
    color: $dark;

    .material-symbols {
      font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' -25,
        'opsz' 20
    }

    &:hover,
    &:active,
    &:focus {
      background-color: transparent;
    }
  }

  .el-col {
    align-items: baseline;
  }

  &__gallery {
    width: 100%;


    .el-carousel__item {
      width: 100%;

      img {
        width: 100%;
        margin: auto;
      }
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }

  .accent {
    color: $accent;
  }

  .description-card {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>