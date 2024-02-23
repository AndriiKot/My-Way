<template>
  <div>
      Hello Vue!
  </div>
  <p>
    Hello {{text1}}!
  </p>
  <p> 
    Hello {{text2}}!
  </p>
  <div class=""></div>
  <div class=""></div>
</template>


<script>
  export default {
    name: 'App',
    data() {
      return {
        text1: "Andrii",
        text2: "Oxi",
      }
    }
  }
</script>

<style>
  div {
    background: blue;
    color: white;
  }
</style>