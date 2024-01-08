<template>
  <h1> My first Vue Project 1</h1>
  <p>User: {{name}}</p>
  <p>Age: {{age}}</p>
  <img :src="attr" :alt='alt'>
  <a :href='href'>{{text}}</a>
  <p>{{ getDate() }}</p>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        name: 'Andrii',
        age: 37,
        attr: 'img.png',
        alt: 'Просто картинка',
        href: 'https//простоссылка',
        text: 'Это ссылка',
      }
    },
    methods: {
      getDate: function(){
        alert(new Date());
      }
    }
  }
</script>


<style scoped>
  h1 {
    color: blue;
  }
</style>
