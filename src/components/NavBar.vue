<template>
  <v-app-bar>
    <RouterLink to="/">
      <v-btn height="55">
        <v-img width="120" src="/countries/afd.png"> </v-img>
      </v-btn>
    </RouterLink>

    <v-spacer></v-spacer>

    <RouterLink to="/map">
      <v-btn text rounded>{{ $t("Map") }}</v-btn>
    </RouterLink>

    <v-spacer></v-spacer>

    <RouterLink to="/countrylist">
      <v-btn text rounded>{{ $t("CountryList") }}</v-btn>
    </RouterLink>

    <v-spacer></v-spacer>

    <RouterLink to="/about">
      <v-btn text rounded>{{ $t("Methodology") }}</v-btn>
    </RouterLink>

    <v-spacer></v-spacer>


    <v-btn v-if="this.$i18n.locale === 'fr'" prepend-icon="">
      <a href="AFD_FR_vdef.pdf" download="AFD_FR_vdef.pdf"
        ><span>{{ $t("Download") }}</span></a
      >
    </v-btn>

    <v-btn v-if="this.$i18n.locale === 'en'" prepend-icon="">
      <a href="AFD_EN_vdef.pdf" download="AFD_EN_vdef.pdf"
        ><span>{{ $t("Download") }}</span></a
      >
    </v-btn>

    <v-spacer></v-spacer>

    <!-- <v-btn text rounded @click="changelanguage(`fr`)" class="test2 ma-0 pa-0">
      FR
    </v-btn>

    <v-btn text rounded @click="changelanguage(`en`)" class="ma-0 pa-0 mr-4">
      En
    </v-btn> -->

    <select class="testt mr-3" v-model="locale">
      <option class="testt">fr</option>
      <option class="testt">en</option>
    </select>
  </v-app-bar>
</template>

<script>
// Exports
export default {
  data() {
    return {
      color: "dark",
      locale: 'fr'
    };
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  methods: {
    changelanguage(langVal) {
      this.$i18n.local = langVal
      window.location.reload();
    },
  },
  name: "NavBar",
  components: {},
};
</script>

<style>
.v-btn--size-default {
  min-width: 50px !important;
  min-height: 50px !important;
}
.v-btn__content, select {
  font-weight: bold !important;
  font-size: 1.2rem !important;
  color: blue;
}
.testt {
    width: 55px !important;
    height: 55px !important;
}
select {
    text-align-last: center !important;
    box-shadow : none !important;
    text-decoration: none !important;
    appearance: auto !important;
}
select#xyz {
    border: none !important;
    border-style: none !important;
    border: 0px !important;
    outline: 0px !important;
}
</style>

