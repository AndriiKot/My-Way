<template>
  <h3>My Third Component</h3>
  <input v-bind:placeholder="clue" />
</template>

<script>
export default {
  data() {
    return {
      clue: "Enter your name(Version 2): ",
    };
  },
};
</script>
