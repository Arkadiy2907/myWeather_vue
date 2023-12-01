<template>
  <div>
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
