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
      <p>ветер:</p>
      <p>{{ showForceWind }}</p>
      <p>{{ showDirectionWind }}</p>
      <p>{{ showForceWindM }}</p>
      <p>{{ showForceWindKm }}</p>
    </div>
  </div>
</template>

<script>
  import * as help from '@/helper/helpers.js';

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
        return help.localeDateDay(this.daily?.dt);
      },
      localeDateSunriseTime() {
        return help.localeDateTime(this.daily?.sunrise);
      },
      localeDateSunsetTime() {
        return help.localeDateTime(this.daily?.sunset);
      },
      showDirectionWind() {
        return help.directionWind(this.daily?.wind_deg);
      },
      showForceWind() {
        return help.forceWind(this.daily?.wind_speed);
      },
      showForceWindM() {
        return `${this.daily?.wind_speed.toFixed(1)} м/с`;
      },
      showForceWindKm() {
        return `${help.getKmHour(this.daily?.wind_speed)} км/ч`;
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
    width: 6rem;
    max-width: 6rem;
    overflow: hidden;
    transition: background-color ease 500ms;
  }

  .wrap_daily:hover {
    background-color: rgb(43, 125, 125, 0.7);
  }
</style>
