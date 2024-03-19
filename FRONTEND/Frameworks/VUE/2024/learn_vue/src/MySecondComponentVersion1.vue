<template>
  <h2>My Second Component</h2>
  <h3>Счетчик: {{ counter }}</h3>
  <button class="btn btn-danger" v-on:click="plusOne">plus One</button>
  <button class="btn btn-success" v-on:click="minusOne">minus One</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 2,
    };
  },
  methods: {
    plusOne() {
      this.counter++;
    },
    minusOne() {
      this.counter--;
    },
  },
};
</script>
