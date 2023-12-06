<template>
  <div class="wrapper">
    <h1>приложение о погоде</h1>
    <local-date />
    {{ lat }} {{ lon }}
    <select v-model="selectedCity">
      <option disabled value="">Выберите один из вариантов</option>
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    <p>погода в {{ myCity == '' ? 'вашем городе' : cityName }}</p>
    <input v-model="city" type="text" placeholder="введите город" @keyup.enter="
      getWeather();
    focused = false;
    " @focus="focused = true" @blur="focused = false">
    <button :disabled="city === ''" @click="getWeather()">
      показать погоду
    </button>
    <p class="error">
      {{ error }}
    </p>
    <div v-if="!!info">
      <info-weather :info="info" />
    </div>

    <div v-if="info === false && !focused">
      <p>город не найден</p>
    </div>
  </div>
</template>

<script>
import LocalDate from '@/components/LocalDate.vue';
import InfoWeather from '@/components/InfoWeather.vue';
import { fetchWeather, fetchMyCity, fetchChoseMyCity } from '@/helper/api.js';

export default {
  components: { LocalDate, InfoWeather },
  data() {
    return {
      city: '',
      error: '',
      info: null,
      focused: false,
      myCity: '',
      lat: '',
      lon: '',
      selectedCity: '',
      options: [
        { text: 'Один', value: 'A' },
        { text: 'Два', value: 'B' },
        { text: 'Три', value: 'C' }
      ]
    };
  },
  computed: {
    cityName() {
      return `" ${this.myCity} "`;
    },
  },
  mounted() {
    // this.myCity = this.getCoordCity();
    // this.city = this.getCoordCity();
    this.getLocation();
    // this.getCoordCity();
  },
  methods: {
    getWeather() {
      if (this.city.trim().length < 2) {
        this.error = 'в названии должно быть больше 1 символа';
        return false;
      }
      this.myCity = this.city;
      this.error = '';
      this.info = null;

      fetchWeather(this.city)
        .then((res) => {
          this.info = res.data;
          // console.log(res.data);
          this.city = '';
        })
        .catch(() => (this.info = false));
    },

    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported.";
      }
    },

    showPosition(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
      this.myCity = this.getCoordCity();
    },

    getCoordCity() {
      // return fetchMyCity(this.lat, this.lon)
      return fetchChoseMyCity(this.lat, this.lon)
        .then((res) => {
          // this.info = res.data.lat;
          // this.myCity = res.data.lat;
          console.log(res.data);
          this.city = '';
        })
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
  background: linear-gradient(to right,
      rgb(201, 222, 150) 0%,
      rgb(41, 164, 75) 100%,
      rgb(138, 182, 107) 100%);

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
