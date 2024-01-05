<template>
  <div class="localeDate">
    {{ localeDateNow }}
  </div>
</template>

<script>
  import { localeDateNow } from '@/helper/helpers.js';

  export default {
    computed: {
      localeDateNow() {
        return localeDateNow();
      },
    },
  };
</script>

<style scoped>
  .localeDate {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.7rem;
  }
</style>
