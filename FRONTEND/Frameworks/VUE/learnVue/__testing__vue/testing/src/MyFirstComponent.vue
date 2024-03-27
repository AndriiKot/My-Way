<template>
  <div class="container-fluid">
    <h1>App</h1>
    <hr />
    <h2>Список заметок:</h2>
    <input type="text" :placeholder="clue" v-model="inputValue" />
    <p>{{ inputValue }}</p>
    <ul class="list-group">
      <li class="list-group-item" v-for="note in notes" :key="note">{{ note }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyFirstComponent",
  data() {
    return {
      clue: "Enter your note here",
      inputValue: "",
      notes: ['one', 'two', 'three'],
    };
  },
};
</script>
