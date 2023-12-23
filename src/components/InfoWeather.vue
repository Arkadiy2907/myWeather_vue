<template>
  <div class="infoNow">
    <div class="wrap__image">
      <figure class="image">
        <img :src="getIconUrl" alt="Icon" />
        <figcaption>{{ showSky }}</figcaption>
      </figure>
      <p>{{ showTemp }}&#186;C</p>
    </div>
    <div class="infoNow_str">
      <p>{{ showFeelsLikeTemp }} &#186;C</p>
      <p>{{ showForceWind }}</p>
      <p>{{ showDirectionWind }}</p>
      <p>{{ showHumidity }}</p>
    </div>
  </div>
</template>

<script>
  // import { forceWind, directionWind } from '@/helper/helpers.js';
  import * as winds from '@/helper/helpers.js';

  export default {
    props: {
      info: {
        type: Object,
        required: true,
      },
    },

    computed: {
      showTemp() {
        return `${this.info?.main?.temp.toFixed(1)}`;
      },
      showFeelsLikeTemp() {
        return `температура по ощущению ${this.info?.main?.feels_like.toFixed(
          1
        )}`;
      },
      showForceWind() {
        return `скорость ветра ${this.info?.wind?.speed}м/с "${winds.forceWind(
          this.info?.wind?.speed
        )}" или по простому ${winds.getKmHour(this.info?.wind?.speed)}км/ч`;
      },
      showDirectionWind() {
        return `а ветер то "${winds.directionWind(this.info?.wind?.deg)}"`;
      },

      showHumidity() {
        return `влажность ${this.info?.main?.humidity}%`;
      },
      getIconUrl() {
        return `http://openweathermap.org/img/wn/${this.info?.weather[0].icon}@2x.png`;
      },
      showSky() {
        return `${winds.getSky(this.info?.weather[0].icon)}`;
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

  .wrap__image {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
  }

  .wrap__image img {
    width: 60px;
  }

  .wrap__image p {
    font-size: 1.3rem;
  }
</style>
