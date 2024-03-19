<template>
    <h3>My Fourth Component Version-2</h3>
    <input v-model="inputValue" />
    <div>Значение поля ввода: {{inputValue}}</div>
</template>
  
  <script>
  export default {
    data() {
      return {
        inputValue: ''     
      }
    },
  };
  </script>
  