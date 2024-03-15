<template>
  <h1>App vue</h1>
  <my-component />
  <h3>Счетчик: {{ counter }}</h3>
</template>

<script>
  export default {
    data() {
      return {
        counter: 1
      }
    }
  }
</script>

<style></style>
