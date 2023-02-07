<template>
  <div class="d-flex flex-column mb-6 ml-16 mr-16">

    <div class="d-flex justify-start ml-16 mr-16">
      <v-btn height="100%" class="ma-0 pa-0">
        <a @click="scrollToAnchorPoint('testBlock')"> Scroll Test </a>
      </v-btn>

      <v-sheet>
        <h1>{{ $t(`countries[${countryId}].name`) }}</h1>
      </v-sheet>
    </div>

    <div class="d-flex justify-start flex-column ml-16 mr-16">
      <v-sheet class="mb-6">
        <h2>A. {{ $t(`countries[${countryId}].content.A.title`) }}</h2>
      </v-sheet>

      <ol id="shopping-list">
        <li class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.un`) }}
        </li>

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.content_1`) }}
        </p>

        <li class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.deux`) }}
        </li>

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.content_2`) }}
        </p>

        <li class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.trois`) }}
        </li>

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.A.content_3`) }}
        </p>
      </ol>
    </div>

    <div class="d-flex justify-start flex-column ml-16 mr-16">
      <v-sheet class="mb-6">
        <h2>B. {{ $t(`countries[${countryId}].content.B.title`) }}</h2>
      </v-sheet>

      <ol id="shopping-list">
        <li class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.B.un`) }}
        </li>

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.B.content_1`) }}
        </p>

        <li class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.B.deux`) }}
        </li>

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.B.content_2`) }}
        </p>
      </ol>
    </div>

    <div class="d-flex justify-start flex-column ml-16 mr-16">
      <v-sheet class="mb-6">
        <h2>C. {{ $t(`countries[${countryId}].content.C.title`) }}</h2>
      </v-sheet>

      <ol id="shopping-list">
        <li class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.un`) }}
        </li>

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.content_1`) }}
        </p>

        <li class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.deux`) }}
        </li>

        <p class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.content_2`) }}
        </p>

        <li class="ml-16 mr-16 mb-6 pl-5">
          {{ $t(`countries[${countryId}].content.C.trois`) }}
        </li>

        <p class="ml-16 mr-16 mb-0 pl-5">
          {{ $t(`countries[${countryId}].content.C.content_3`) }}
        </p>
        <a
          class="mx-16 16 mb-6 pl-5"
          :href="`${country.content.C.url}`"
          target="_blank"
          >{{ $t(`countries[${countryId}].content.C.url`) }}</a
        >
        <div ref="testBlock">In page anchor point</div>
      </ol>
    </div>
  </div>
</template>

<script>
// Imports
import sourceData from "@/locales/fr.json";
import sourceData2 from "@/locales/en.json";

// Exports
export default {
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
  computed: {
    countryId() {
      return parseInt(this.$route.params.id) - 1;
    },
    country() {
      // return sourceData.countries.find(
      //   (country) => country.id === this.countryId +1
      // );
      if (localStorage.getItem("lang") !== "fr") {
        return sourceData2.countries.find(
          (country) => country.id === this.countryId + 1
        );
      }
        return sourceData.countries.find(
          (country) => country.id === this.countryId + 1
        );
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>
