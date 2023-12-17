<template>
  <div class="localeDate">
    {{
      new Date().toLocaleDateString('eu-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }}
  </div>
</template>

<style scoped>
  .localeDate {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.7rem;
  }
</style>
