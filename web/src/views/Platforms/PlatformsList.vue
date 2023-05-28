<template>
  <div class="list">
    <PlatformCard v-for="platform of store.list" :key="platform.id" class="card" :platform="platform" />
  </div>
  <footer class="footer">
    <el-button class="show-more-btn btn-outlined accent" @click="getNextPage" :loading="loading">Показать ещё</el-button>
  </footer>
</template>
<script setup>
import PlatformCard from './PlatformCard.vue';
import { usePlatformStore } from '../../stores/platformStore';
import { ref } from 'vue'

const store = usePlatformStore()
const page = ref(1)
const loading = ref(false)

const getNextPage = () => {
  page.value += 1;
  loading.value = true;
  store.getPlatforms(page.value)
  loading.value = false;
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .card {
    margin-bottom: 40px;
  }

}

.footer {
  display: flex;
  justify-content: center;

  .show-more-btn {
    padding: 13px 54px;
  }

  .accent {
    color: $accent;
  }

}
</style>