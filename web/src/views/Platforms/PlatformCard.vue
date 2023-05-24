<template>
  <div class="space-card" :style="`background-image: url(${platform.imageUrl});`">
    <div class="wrapper">
      <header class="header">
        <div class="company__type">{{ platform.type }}</div>
        <img :src="platform.logoImageUrl" class="company__logo" />
      </header>
      <div class="card-text">
        <p class="raiting">
          <i class="material-icons" style="font-size: 10px">star</i> {{ platform.raiting }}
        </p>
        <h2 class="name">{{ platform.name }}</h2>
        <span>Гибкие мини-офисы, креативные студии</span>
        <span class="location"><i class="material-icons" style="font-size: 13px">pin_drop</i> {{ platform.location
        }}</span>
      </div>
      <footer class="footer">
        <div class="price">{{ platform.price || 0 }}&#x20bd;</div>
        <div class="reserve">за 2 часа</div>
      </footer>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  platform: Object
})

</script>
<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.space-card {
  position: relative;
  width: 300px;
  height: 366px;
  border-radius: 7px;

  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 366px;
    background: transparent;
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;
    background-color: linear-gradient(0deg, #0c162280, #0c162280);

    &:hover {
      background-color: rgba($accent-pale, .5);
    }


    .header {
      display: flex;
      justify-content: space-between;
      flex-grow: 0;
      padding: 20px 16px 0 16px;

      .company__type {
        font-size: 12px;

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

      .company__logo {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
    }

    .card-text {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: end;
      color: $text;
      font-size: 14px;
      font-weight: 300;
      padding: 0 16px;

      p {
        margin: 10px 0;
      }

      .raiting {
        margin: 0;
        font-size: 12px;
        font-weight: 300;
      }

      .name {
        margin: 10px 0;
      }

      .location {
        display: flex;
        align-items: center;
        margin: 20px 0;
        font-weight: 400;
      }
    }

    .footer {
      flex-grow: 0;
      display: flex;
      align-items: end;
      width: 100%;
      padding: 20px 16px;
      color: $text;
      border-top: 1px solid $pale;

      .price {
        font-size: 18px;
        font-weight: 700;
      }

      .reserve {
        margin-left: 16px;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
}
</style>