<template>
  <h3>My Third Component</h3>
  <input :placeholder="clue"/>
</template>

<script>
export default {
  data() {
    return {
        clue: 'Enter your name: ',
    };
  },
};
</script>
