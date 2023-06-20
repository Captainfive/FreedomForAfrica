<template>
    <div color="transparent" class="my-10 mx-12">
      <VRow>
        <VCol
          v-for="country in countries"
          :key="country.id"
          xs="7"
          sm="6"
          md="3"
          lg="2"
        >
          <VCard class="ma-0 pa-0">
            <VImg
              class="ma-0 pa-0"
              :src="`/countries/${country.image}`"
              width="100%"
              min-height="100px"
              min-width="120px"
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

            <v-card-actions
              class="d-flex justify-center bg-surface-variant ma-0 pa-0"
            >
              <VBtn @click="push(country.id, country.slug)" width="100%" variant="text">
                <RouterLink
                  class="spacer text-white"
                  :to="{
                    name: 'country.show',
                    params: { id: country.id, slug: country.slug },
                  }"
                  >{{ country.name }}</RouterLink
                >
              </VBtn>
            </v-card-actions>
          </VCard>
        </VCol>
      </VRow>
    </div>
</template>

<script>
// Imports
import sourceData from "@/locales/fr.json";
import sourceData2 from "@/locales/en.json";


// Exports
export default {
  name: "CountryList",
  components: {

  },
  computed: {
    countries() {
      if (localStorage.getItem("lang") === "fr") {
        console.log(localStorage.getItem('lang'))
        return sourceData.countries;
      }
      console.log(localStorage.getItem('lang'))
      return sourceData2.countries;
    },
  },
  data() {
    return {
    };
  },
  methods: {
    push(id, slug) {
        this.$router.push(`/Country/${id}/${slug}`)
    },
  },
};
</script>

<style scoped>
.v-card-actions {
  min-height: 20px !important;
  max-height: 55px !important;
}

.v-btn {
  min-height: 45px;
  max-height: 75px;
  height: 100% !important;
  font-size: 0.88rem !important;
}

.v-btn__content {
  flex: auto;
}

.spacer {
  white-space: normal !important;
}
</style>