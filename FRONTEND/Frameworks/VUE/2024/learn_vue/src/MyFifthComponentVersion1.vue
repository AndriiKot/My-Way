<template>
  <div class="container-fluid">
    <h2>For vue</h2>
    <hr />
    <h3>Список заметок:</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="note in notes" :key="note">{{ note }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clue: "Введите текст: ",
      notes: ["one", "two", "three"],
    };
  },
};
</script>
