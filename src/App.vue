<template>
  <div class="wrapper">
    <h1>приложение о погоде</h1>
    <local-date />
    <p>узнать погоду в {{ city == '' ? 'вашем городе' : cityName }}</p>
    <input
      v-model="city"
      type="text"
      placeholder="введите город"
    >
    <button
      v-if="city !== ''"
      @click="getWeather()"
    >
      получить погоду
    </button>
    <button
      v-else
      disabled
    >
      введите название
    </button>
    <p class="error">
      {{ error }}
    </p>
    <div v-if="info != null">
      <p>{{ showTemp }}</p>
      <p>{{ showFeelsLikeTemp }}</p>
      <p>{{ showMinTemp }}</p>
      <p>{{ showMaxTemp }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LocalDate from '@/components/LocalDate.vue';

export default {
  components: { LocalDate },
  data() {
    return {
      city: '',
      error: '',
      info: null,
    };
  },
  computed: {
    cityName() {
      return '"' + this.city + '"';
    },

    showTemp() {
      return 'температура ' + this.info?.main?.temp;
    },
    showFeelsLikeTemp() {
      return 'температура по ощущению ' + this.info?.main?.feels_like;
    },
    showMinTemp() {
      return 'минимальная температура ' + this.info?.main?.temp_min;
    },
    showMaxTemp() {
      return 'максимальная температура ' + this.info?.main?.temp_max;
    },
  },
  methods: {
    getWeather() {
      if (this.city.trim().length < 2) {
        this.error = 'в названии должно быть больше 1 символа';
        return false;
      }

      this.error = '';

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=ecbaa67ba7bece31be9e96bd8181180a`
        )
        .then((res) => (this.info = res.data));
      // .then((response) => response.json())  Seattle
      // .then((data) => console.log(data)); Saint Petersburg
    },
  },
};
</script>

<style>
.error {
  color: red;
}

.wrapper {
  width: 900px;
  height: 500px;
  border-radius: 50px;
  background: linear-gradient(
    to right,
    rgb(201, 222, 150) 0%,
    rgb(41, 164, 75) 100%,
    rgb(138, 182, 107) 100%
  );

  text-align: center;
  color: white;
}

.wrapper h1 {
  padding-top: 15px;
  margin-top: 50px;
}

.wrapper p {
  margin-top: 20px;
}

.wrapper input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid rgb(95, 95, 95);
  color: rgb(34, 94, 94);
  font-size: 18px;
  padding: 5px 8px;
  outline: none;
  transition: border-bottom-color linear 300ms;
}

.wrapper input:focus {
  border-bottom-color: black;
}

.wrapper button {
  background-color: rgb(43, 125, 125);
  color: aqua;
  font-size: 15px;
  padding: 10px 15px;
  border: 2px solid black;
  border-radius: 7px;
  cursor: pointer;
  transition: all ease 500ms;
  margin-left: 7px;
}

.wrapper button:hover {
  transform: scale(1.01) translateY(-3px);
  font-size: 16px;
}

.wrapper button:disabled {
  background: blueviolet;
  cursor: not-allowed;
}
</style>
