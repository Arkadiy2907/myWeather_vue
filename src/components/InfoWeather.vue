<template>
  <div>
    <p>{{ showTemp }}</p>
    <p>{{ showFeelsLikeTemp }}</p>
    <p>{{ showMinTemp }}</p>
    <p>{{ showMaxTemp }}</p>
    <figure class="image">
      <img :src="getIconUrl" alt="Icon">
    </figure>
  </div>
</template>

<script>
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
      return `минимальная температура ${this.info?.main?.temp_min}`;
    },
    showMaxTemp() {
      return `максимальная температура ${this.info?.main?.temp_max}`;
    },
    getIconUrl() {
      return `http://openweathermap.org/img/wn/${this.info?.weather[0].icon}@2x.png`;
    }
  },
};
</script>

<style scoped></style>
