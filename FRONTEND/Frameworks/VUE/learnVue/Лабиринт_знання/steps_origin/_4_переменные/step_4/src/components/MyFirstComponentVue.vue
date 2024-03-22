<template>
  <h1>My First Vue Component</h1>
  <h2>Счётчик: {{ counter }}</h2>
</template>

<script>
export default {
  name: "MyFirstComponentVue",
  data() {
    return {
      counter: 0,
    };
  },
};
</script>
