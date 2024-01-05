<template>
  <div class="wrapper">
    <h1>Че там обещают наверху</h1>
    <div class="chose">
      <h2>но сначала определись, что ты, где ты?</h2>
      <div class="chose__place">
        <select v-model="selectedCity" class="select">
          <option value="">комп думает ты где то тут</option>
          <option
            v-for="option in options"
            :key="option.name"
            :value="option.name"
          >
            {{ option.name }}
          </option>
        </select>
        <div class="wrap_input">
          <input
            v-model="city"
            type="text"
            placeholder="сам то че? где?"
            @keyup.enter="
              getWeather();
              focused = false;
            "
            @focus="focused = true"
            @blur="focused = false"
          />
          <p class="error">
            {{ error }}
          </p>
        </div>
        <button :disabled="city === ''" @click="getWeather()">
          {{ city === '' ? 'нее сначала впишись' : 'нукася и че? жмакай!!' }}
        </button>
      </div>
    </div>
    <h2 class="place">
      есть мнение, что тебе интересен {{ myCity == '' ? 'релакс' : cityName }}
    </h2>
    <div v-if="!!info && myCity !== ''" class="info">
      <local-date />
      <info-weather :info="info" />
    </div>
    <div>
      <daily-list :dailys="dailys" />
    </div>

    <div v-if="info === false && !focused">
      <p>но это не точно, потому город не найден</p>
    </div>
  </div>
</template>

<script>
  import LocalDate from '@/components/LocalDate.vue';
  import InfoWeather from '@/components/InfoWeather.vue';
  import DailyList from '@/components/DailyList.vue';
  import {
    fetchWeatherNow,
    fetchWeatherNextDays,
    fetchNearMyCity,
  } from '@/helper/api.js';

  export default {
    components: { LocalDate, InfoWeather, DailyList },
    data() {
      return {
        city: '',
        error: '',
        info: null,
        infoNextDays: [],
        dailys: [],
        focused: false,
        myCity: '',
        lat: '',
        lon: '',
        selectedCity: '',
        options: [],
      };
    },
    computed: {
      cityName() {
        return `" ${this.myCity} "`;
      },
    },
    watch: {
      selectedCity(newCity) {
        this.myCity = newCity;
        this.city = newCity;
      },
    },
    mounted() {
      this.getLocation();
    },
    methods: {
      getWeather() {
        if (this.city.trim().length < 2) {
          this.error = 'а если 2 буковки написать';
          return false;
        }
        this.myCity = this.city;
        this.error = '';
        this.info = null;

        fetchWeatherNow(this.city)
          .then((res) => {
            this.info = res.data;
            // console.log(res.data);
            this.lat = res.data.coord.lat;
            this.lon = res.data.coord.lon;
            this.city = '';
          })
          .catch(() => {
            this.info = [
              {
                name: 'нет вариантов',
              },
            ];
            this.info = false;
          });

        fetchWeatherNextDays(this.lat, this.lon)
          .then((res) => {
            this.infoNextDays = res.data;
            this.dailys = res?.data?.daily;
            // console.log(this.dailys);
            console.log(this.dailys);
          })
          .catch(() => {
            this.infoNextDays = [
              {
                name: 'нет данных',
              },
            ];
          });
      },

      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
          this.error = 'Geolocation is not supported.';
        }
      },

      showPosition(position) {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.getCoordCity();
      },

      getCoordCity() {
        return fetchNearMyCity(this.lat, this.lon)
          .then((res) => {
            // console.log(res.data);
            this.options = res.data;
            this.city = '';
          })
          .catch(() => {
            this.options = [
              {
                name: 'напиши город сам',
              },
            ];
            this.info = false;
          });
      },
    },
  };
</script>

<style>
  .wrapper {
    width: 60rem;
    max-height: min-content;
    border-radius: 50px;
    background: linear-gradient(
      to right,
      rgb(201, 222, 150) 0%,
      rgb(41, 164, 75) 100%,
      rgb(138, 182, 107) 100%
    );
    padding: 1rem;
    text-align: center;
    color: white;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .wrapper h1 {
    padding: 5px;
    margin: 2rem;
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

  .chose h2,
  .place {
    margin-bottom: 1rem;
  }

  .chose__place {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: baseline;
  }

  .wrap_input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 1rem;
  }

  .select {
    outline: none;
    border-radius: 5px;
    border: none;
    height: 2.5rem;
    padding: 8px;
    background-color: rgb(43, 125, 125);
    color: rgb(170, 255, 255);
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }

  .error {
    color: red;
    font-size: 1rem;
    padding-top: 2px;
  }
</style>
