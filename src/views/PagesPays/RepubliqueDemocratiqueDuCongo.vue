<template>
  <section
    v-if="this.$i18n.locale === 'fr'"
    class="d-flex flex-column align-center ma-0 pa-0"
  >
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="63" fit-parent/>
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="64" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="65" fit-parent />
    </div>
  </section>
  <section
    v-if="this.$i18n.locale === 'en'"
    class="d-flex flex-column align-center ma-0 pa-0"
  >
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="36" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="37" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="38" fit-parent />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style>
</style>

<script setup>
import { VuePDF, usePDF } from "@tato30/vue-pdf";

const pdfSources = [
  '/AFD_FR_vdef.pdf',
  '/AFD_EN_vdef.pdf'
]

const { pdf } = usePDF(pdfSources[0])
const { pdf: newPDFToLoad } = usePDF(pdfSources[1])
</script>