<template>
  <div class="list">
    <PlatformCard v-for="i of 5" :key="`card-${i}`" class="card" :platform="platform" />
  </div>
  <footer class="footer">
    <el-button class="show-more-btn btn-outlined accent">Показать ещё</el-button>
  </footer>
</template>
<script setup>
import PlatformCard from './PlatformCard.vue';
import { ref } from 'vue'

const platform = ref({
  name: 'Flacon space',
  type: 'креативные пространства',
  logoImageUrl: 'https://placehold.jp/ffffff/ffffff/30x30.png',
  imageUrl: 'https://placehold.jp/300x366.png',
  raiting: 4.8,
  price: 4000,
  reserve: 'за 2 часа',
  location: 'ул. Большая Новодмитровская, 36'
})
</script>
<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.list {
  display: flex;
  justify-content: space-between;
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