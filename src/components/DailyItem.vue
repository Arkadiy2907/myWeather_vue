<template>
  <div class="wrap_daily">
    <div class="card_header">
      <div class="localeDate">
        {{ localeDateDay }}
      </div>
      <img :src="getIconUrl" alt="Icon" />
      <p>день: {{ daily.temp.day.toFixed(1) }}</p>
      <p>ночь: {{ daily.temp.night.toFixed(1) }}</p>
      <p>
        вос:
        {{ localeDateSunriseTime }}
      </p>
      <p>зак: {{ localeDateSunsetTime }}</p>
    </div>
  </div>
</template>

<script>
  import * as date from '@/helper/helpers.js';

  export default {
    props: {
      daily: {
        type: Object,
        required: true,
      },
    },
    computed: {
      getIconUrl() {
        return `https://openweathermap.org/img/wn/${this.daily?.weather[0].icon}.png`;
      },

      localeDateDay() {
        return date.localeDateDay(this.daily?.dt);
      },
      localeDateSunriseTime() {
        return date.localeDateTime(this.daily?.sunrise);
      },
      localeDateSunsetTime() {
        return date.localeDateTime(this.daily?.sunset);
      },
    },
  };
</script>

<style scoped>
  .wrap_daily {
    display: flex;
    padding: 5px;
    margin: 2px;
    border: 1px solid green;
    border-radius: 4px;
    text-align: left;
    word-spacing: 2px;
    line-height: 1.3rem;
  }
</style>
