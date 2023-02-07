<template>
  <v-main>
    <!-- <CountryTemplate></CountryTemplate> -->
    <AlgeriePage v-if="countryId === 1"></AlgeriePage>
    <BeninPage v-if="countryId === 2"></BeninPage>
    <BurkinaFaso v-if="countryId === 3"></BurkinaFaso>
  </v-main>
</template>

<script>
// import CountryTemplate from "../components/CountryTemplate.vue";
import AlgeriePage from "./PagesPays/AlgeriePage.vue";
import BeninPage from "./PagesPays/BeninPage.vue";
import BurkinaFaso from "./PagesPays/BurkinaFaso.vue";

// Exports
export default {
  name: "App",
  components: {
    // CountryTemplate,
    BeninPage,
    AlgeriePage,
    BurkinaFaso,
  },
  computed: {
    countryId() {
      return parseInt(this.$route.params.id);
    },
  },
};
</script>

<style></style>
