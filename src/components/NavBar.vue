<template>
  <v-app-bar>
    <v-btn text rounded
      ><RouterLink to="/">{{ $t("HomePage") }}</RouterLink>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn text rounded
      ><RouterLink to="/map">{{ $t("Map") }}</RouterLink>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn text rounded
      ><RouterLink to="/countrylist">{{ $t("CountryList") }}</RouterLink>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn text rounded
      ><RouterLink to="/about">{{ $t("About") }}</RouterLink>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn
      @click="changelanguage(`fr`)"
      class="ma-0 pa-0"
      width="35px"
      height="35px"
    >
      <VImg
        class="ma-0 pa-0"
        :src="`/countries/France.svg`"
        aspect-ratio="4/3"
        width="35px"
        height="35px"
      >
        <template v-slot:placeholder>
          <VRow class="fill-height ma-0" align="center" justify="center">
            <VProgressCircular
              indeterminate
              color="grey-lighten-5"
            ></VProgressCircular>
          </VRow>
        </template>
      </VImg>
    </v-btn>

    <v-btn
      @click="changelanguage(`en`)"
      class="ma-0 pa-0"
      width="35px"
      height="35px"
    >
      <VImg
        class="ma-0 pa-0"
        :src="`/countries/Uk.svg`"
        aspect-ratio="4/3"
        width="35px"
        height="35px"
      >
        <template v-slot:placeholder>
          <VRow class="fill-height ma-0" align="center" justify="center">
            <VProgressCircular
              indeterminate
              color="grey-lighten-5"
            ></VProgressCircular>
          </VRow>
        </template>
      </VImg>
    </v-btn>

    <!-- <select class="test1 ma-2 pa-2 mr-6" v-model="language" @change="changelanguage()">
        <option class="test2" value="fr">Fr</option>
        <option class="test2" value="en">En</option>
      </select> -->

    <!-- <v-spacer></v-spacer>
      <v-btn text rounded @click="toggleTheme">{{ $t("SwitchTheme") }}</v-btn> -->
  </v-app-bar>
</template>

<script>
// Imports
// import { useTheme } from "vuetify";
import { RouterLink } from "vue-router";

// Exports
export default {
  data() {
    return {
      language: null,
      color: "dark",
    };
  },

  methods: {
    changelanguage(lang) {
      localStorage.setItem("lang", lang);
      window.location.reload();
    },
  },
  created() {
    if (localStorage.getItem("lang") !== null) {
      this.language = localStorage.getItem("lang");
    }
    localStorage.setItem("lang", "fr");
  },
  //   setup() {
  //     const theme = useTheme();

  //     return {
  //       theme,
  //       toggleTheme: () =>
  //         (theme.global.name.value = theme.global.current.value.dark
  //           ? "light"
  //           : "dark"),
  //     };
  //   },
  name: "App",
  components: {
    RouterLink,
  },
};
</script>

<style>
/* .test1 {
  line-height: 1.5;
}
.test2 {
  color: primary;
} */
</style>

