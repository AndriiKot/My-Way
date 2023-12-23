<template>

  <p>Hello Vue!!!</p>
  <p>Hello {{ user1 }}!</p>
  <p>Hello {{ user2 }}!</p>
  <img v-bind:src="attr" v-bind:alt="alt">
  <br>
  <a :href="href">{{ text }}</a>
  <br>
  <p>{{ var1 + var2 }}</p>
  <br>
  <p>{{ arr[0] }}</p>
  <p>{{ arr[1] }}</p>
  <p>{{ arr[2] }}</p>
  <hr>
  <p>{{ obj.a }}</p>
  <p>{{ obj.b }}</p>
  <p>{{ obj.c }}</p>
  <hr>
  <p>{{ obj['c'] }}</p>
  <p>{{ obj['b'] }}</p>
  <p>{{ obj['c'] }}</p>
  <hr>
  	<button v-on:click="show">text</button>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
                user1: "Andrii",
                user2: "Oxy",
                attr: 'img.png',
                alt: 'просто картина',
                href: 'page.html',
                text: 'page',
                var1: 1,
                var2: 3,
                arr: [11,22,33],
                obj: {a: 111, b: 222, c: 333},
            }
        },
        methods: {
            show() {
                alert(this.text)
            }
        }
}

</script>

<style></style>
