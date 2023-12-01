<template>
  <div class="wrapper">
    <h1>приложение о погоде</h1>
    <local-date />
    <p>узнать погоду в {{ city == '' ? 'вашем городе' : cityName }}</p>
    <input v-model="city" type="text" placeholder="введите город" />
    <button v-if="city !== ''" @click="getWeather()">показать погоду</button>
    <button v-else disabled>показать погоду</button>
    <p class="error">
      {{ error }}
    </p>
    <div v-if="!!info">
      <info-weather :info="info" />
    </div>
    <div v-if="info == false">
      <p>город не найден</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LocalDate from '@/components/LocalDate.vue';
import InfoWeather from '@/components/InfoWeather.vue';

export default {
  components: { LocalDate, InfoWeather },
  data() {
    return {
      city: '',
      error: '',
      info: null,
    };
  },
  computed: {
    cityName() {
      return `" ${this.city} "`;
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
        .then((res) => (this.info = res.data))
        .catch(() => (this.info = false));
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
  color: rgb(0, 255, 255);
  font-size: 15px;
  padding: 10px 15px;
  border: 2px solid rgb(103, 103, 103);
  border-radius: 7px;
  cursor: pointer;
  transition: all ease 500ms;
  margin-left: 7px;
}

.wrapper button:hover {
  background-color: rgb(43, 125, 125, 0.7);
  border: 2px solid rgb(162, 162, 162);
  color: rgb(170, 255, 255);
}

.wrapper button:disabled {
  background: rgb(138, 43, 227);
  cursor: not-allowed;
}
</style>
