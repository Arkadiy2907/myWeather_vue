<template>
  <div v-show="dailys.length > 0" class="wrap_dailys">
    <daily-item v-for="daily in dailys" :key="daily.dt" :daily="daily" />
  </div>
</template>

<script>
  import DailyItem from '@/components/DailyItem.vue';

  export default {
    components: { DailyItem },
    props: {
      dailys: {
        type: Array,
        required: true,
      },
    },
  };
</script>
<style scoped>
  .wrap_dailys {
    display: flex;
    padding: 5px;
    border-top: 1px solid green;
    border-bottom: 1px solid green;
  }
</style>
