<script>
// imports
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";

// Exports
export default {
  name: "App",
  components: {
    NavBar,
    // RouterLink,
    RouterView,
  },
};
</script>

<template>
  <v-app>
    <NavBar />
    <RouterView />
  </v-app>
</template>

<style>
/* Imports */
@import url("./style/reset.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap");

#app {
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
}
</style>