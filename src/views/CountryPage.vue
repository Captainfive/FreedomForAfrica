<template>
    <AlgeriePage v-if="countryId === 1"></AlgeriePage>
    <BeninPage v-if="countryId === 2"></BeninPage>
    <BurkinaFaso v-if="countryId === 3"></BurkinaFaso>
    <Burundi v-if="countryId === 4"></Burundi>
    <Cameroun v-if="countryId === 5"></Cameroun>
    <Comores v-if="countryId === 6"></Comores>
    <CoteDivoire v-if="countryId === 7"></CoteDivoire>
    <Djibouti v-if="countryId === 8"></Djibouti>
    <Gabon v-if="countryId === 9"></Gabon>
    <Guinee v-if="countryId === 10"></Guinee>
    <GuineeEquatoriale v-if="countryId === 11"></GuineeEquatoriale>
    <Madagascar v-if="countryId === 12"></Madagascar>
    <Mali v-if="countryId === 13"></Mali>
    <Maroc v-if="countryId === 14"></Maroc>
    <Maurice v-if="countryId === 15"></Maurice>
    <Mauritanie v-if="countryId === 16"></Mauritanie>
    <Niger v-if="countryId === 17"></Niger>
    <RCA v-if="countryId === 18"></RCA>
    <RepubliqueDemocratiqueDuCongo v-if="countryId === 19"></RepubliqueDemocratiqueDuCongo>
    <RepubliqueDuCongo v-if="countryId === 20"></RepubliqueDuCongo>
    <Rwanda v-if="countryId === 21"></Rwanda>
    <Senegal v-if="countryId === 22"></Senegal>
    <Seychelles v-if="countryId === 23"></Seychelles>
    <Tchad v-if="countryId === 24"></Tchad>
    <Togo v-if="countryId === 25"></Togo>
    <Tunisie v-if="countryId === 26"></Tunisie>
</template>

<script>
import AlgeriePage from "./PagesPays/AlgeriePage.vue";
import BeninPage from "./PagesPays/BeninPage.vue";
import BurkinaFaso from "./PagesPays/BurkinaFaso.vue";
import Burundi from "./PagesPays/Burundi.vue";
import Cameroun from "./PagesPays/Cameroun.vue";
import Comores from "./PagesPays/Comores.vue";
import CoteDivoire from "./PagesPays/CoteDivoire.vue";
import Djibouti from "./PagesPays/Djibouti.vue";
import Gabon from "./PagesPays/Gabon.vue";
import Guinee from "./PagesPays/Guinee.vue";
import GuineeEquatoriale from "./PagesPays/GuineeEquatoriale.vue";
import Madagascar from "./PagesPays/Madagascar.vue";
import Mali from "./PagesPays/Mali.vue";
import Maroc from "./PagesPays/Maroc.vue";
import Maurice from "./PagesPays/Maurice.vue";
import Mauritanie from "./PagesPays/Mauritanie.vue";
import Niger from "./PagesPays/Niger.vue";
import RCA from "./PagesPays/RCA.vue";
import RepubliqueDemocratiqueDuCongo from "./PagesPays/RepubliqueDemocratiqueDuCongo.vue";
import RepubliqueDuCongo from "./PagesPays/RepubliqueDuCongo.vue";
import Rwanda from "./PagesPays/Rwanda.vue";
import Senegal from "./PagesPays/Senegal.vue";
import Seychelles from "./PagesPays/Seychelles.vue";
import Tchad from "./PagesPays/Tchad.vue";
import Togo from "./PagesPays/Togo.vue";
import Tunisie from "./PagesPays/Tunisie.vue";


// Exports
export default {
  name: "CountryPage",
  components: {
    BeninPage,
    AlgeriePage,
    BurkinaFaso,
    Burundi,
    Cameroun,
    Comores,
    CoteDivoire,
    Djibouti,
    Gabon,
    Guinee,
    GuineeEquatoriale,
    Madagascar,
    Mali,
    Maroc,
    Maurice,
    Mauritanie,
    Niger,
    RCA,
    RepubliqueDemocratiqueDuCongo,
    RepubliqueDuCongo,
    Rwanda,
    Senegal,
    Seychelles,
    Tchad,
    Togo,
    Tunisie
  },
  computed: {
    countryId() {
      return parseInt(this.$route.params.id);
    },
  },
};
</script>

<style></style>
