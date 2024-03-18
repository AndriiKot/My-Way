<template>
  <h2>My First Component</h2>
  <h3>Счетчик: {{ counter }}</h3>
  <button class="btn btn-danger" v-on:click="counter++">plus One</button>
  <button class="btn btn-success" v-on:click="counter--">minus One</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
    };
  },
};
</script>
