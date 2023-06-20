<template>
  <section
    v-if="this.$i18n.locale === 'fr'"
    class="d-flex flex-column align-center ma-0 pa-0"
  >
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="57" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="58" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="59" fit-parent />
    </div>
  </section>
  <section
    v-if="this.$i18n.locale === 'en'"
    class="d-flex flex-column align-center ma-0 pa-0"
  >
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="66" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="67" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="68" fit-parent />
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
.vue-pdf-embed > div {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}



.right {
  float: right;
}
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