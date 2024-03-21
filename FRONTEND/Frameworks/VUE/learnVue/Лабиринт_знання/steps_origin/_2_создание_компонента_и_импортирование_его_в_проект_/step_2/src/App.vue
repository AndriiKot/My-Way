<template>
  <MyComponentVue1 msg="My Fist Vue Component"/>
</template>

<script>
import MyComponentVue1 from './components/MyComponentVue1.vue'

export default {
  name: 'App',
  components: {
    MyComponentVue1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
