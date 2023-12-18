<template>
  <div class="infoNow">
    <figure class="image">
      <img :src="getIconUrl" alt="Icon" />
    </figure>
    <div class="infoNow_str">
      <p>{{ showTemp }} &#186;C</p>
      <p>{{ showFeelsLikeTemp }} &#186;C</p>
      <p>{{ showMinTemp }}</p>
      <p>{{ showMaxTemp }}</p>
    </div>
  </div>
</template>

<script>
  import { forceWind } from '@/helper/helpers.js';

  export default {
    props: {
      info: {
        type: Object,
        required: true,
      },
    },

    computed: {
      showTemp() {
        return `температура ${this.info?.main?.temp}`;
      },
      showFeelsLikeTemp() {
        return `температура по ощущению ${this.info?.main?.feels_like}`;
      },
      showMinTemp() {
        return `скорость ветра ${this.info?.wind?.speed}м/с "${forceWind(
          this.info?.wind?.speed
        )}"`;
      },
      showMaxTemp() {
        return `влажность ${this.info?.main?.humidity}%`;
      },
      getIconUrl() {
        return `http://openweathermap.org/img/wn/${this.info?.weather[0].icon}@2x.png`;
      },
    },
  };
</script>

<style scoped>
  .infoNow {
    display: flex;
    align-items: center;
    padding: 5px;
    gap: 2px;
  }
  .infoNow_str {
    text-align: start;
    word-spacing: 2px;
    line-height: 1.3rem;
  }
</style>
