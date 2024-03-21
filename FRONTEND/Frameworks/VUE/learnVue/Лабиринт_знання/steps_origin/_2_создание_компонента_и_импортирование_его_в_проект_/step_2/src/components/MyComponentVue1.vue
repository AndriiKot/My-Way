<template>
  <h1>My {{ msg }}</h1>
</template>

<script>
  export default {
    name: 'MyComponentVue1',
    props: {
      msg: String
    }
  } 
</script>