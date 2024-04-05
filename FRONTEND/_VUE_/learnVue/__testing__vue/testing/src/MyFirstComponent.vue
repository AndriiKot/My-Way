<template>
  <div :class="notes.length > 3 ? 'background-green' : 'container-fluid'">
    <h1>App</h1>
    <hr />
    <h2>Список заметок:</h2>
    <input
      type="text"
      :placeholder="clue"
      v-model="inputValue"
      v-on:keypress.enter="addNewNote"
    />
    <p>{{ inputValue }}</p>
    <div v-if="notes.length === 1">
      Одна заметка!
      <ul class="list-group">
        <li class="list-group-item" v-for="note in notes" :key="note">
          {{ note }}
          <button class="btn btn-danger" @click="deleteNote(note)">
            Удалить
          </button>
        </li>
        <br />
      </ul>
    </div>
    <ul
      :class="{
        'list-group': true,
        'background-green': true,
        'background-blue': notes.length > 3,
      }"
      v-else-if="notes.length !== 0"
    >
      <li
        :class="['list-group-item', 'background-blue', {'background-black': notes.length > 3}]"
        class="list-group-item"
        v-for="note in notes"
        :key="note"
      >
        {{ note }}
        <button class="btn btn-danger" @click="deleteNote(note)">
          Удалить
        </button>
      </li>
      <br />
    </ul>
    <div v-else>Список заметок пуст!</div>
    <div>{{ calculateNotes }}</div>
  </div>
</template>

<script>
export default {
  name: "MyFirstComponent",
  data() {
    return {
      clue: "Enter your note here",
      inputValue: "",
      notes: ["one", "two", "three"],
    };
  },
  methods: {
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    addNewNote() {
      const note = this.inputValue;
      if (note && !this.notes.includes(note)) this.notes.push(note);
      this.inputValue = "";
    },
  },
  computed: {
    calculateNotes() {
      return this.notes.length;
    },
  },
  watch: {
    inputValue(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.container-fluid {
  background-color: blue;
}

.background-green {
  background-color: green;
}
.background-blue {
  background-color: blue;
}

.background-black {
  background-color: black;
}
</style>
