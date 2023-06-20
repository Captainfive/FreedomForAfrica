<script>
// imports
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";

// Exports
export default {
  name: "App.vue",
  components: {
    NavBar,
    RouterView,
  },
};
</script>

<template>
  <v-app>
    <NavBar />
    <v-main>
        <RouterView />
    </v-main>
  </v-app>
</template>

<style>
/* Imports */
@import url("./style/reset.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto%3Awght%40300%3B400%3B700&display=swap");
@import url('https://fonts.cdnfonts.com/css/al-mito-group-sans');
@import url('https://fonts.cdnfonts.com/css/serfiyan');
@import url('https://fonts.cdnfonts.com/css/fox-bebas');
                
body::-webkit-scrollbar{
  display: none;
}

#app {
  /* font-family: "Roboto", sans-serif; */
    /* font-family: 'AL Mito Group', sans-serif; */
    font-family: 'Fox Bebas', sans-serif;
                                                
                                                
}
a {
  text-decoration: none !important;
}
</style>