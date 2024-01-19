<template>
  <div>
    <h1>My Component Vue</h1>
    <h1>Счётчик: {{ counter }}</h1>
    <button class="btn btn-danger" v-on:click="decrease">Уменьшить</button>
    <button class="btn btn-success" v-on:click="encrease">Увеличить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    encrease() {
      this.counter += 1;
    },
    decrease() {
      this.counter -= 1;
    },
  },
};
</script>
