<template>
  <h1>App vue</h1>
  <my-component />
  <my-second-component />
</template>

<script>
import MySecondComponent from './MySecondComponent.vue'
  export default {
  components: { MySecondComponent },
    data() {
      return {
        counter: 1
      }
    }
  }
</script>

<style></style>
