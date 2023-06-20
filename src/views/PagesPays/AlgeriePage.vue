<template>
  <section
    v-if="this.$i18n.locale === 'fr'"
    class="d-flex flex-column align-center ma-0 pa-0"
  >
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="9" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="10" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="11" fit-parent />
    </div>
  </section>
  <section
    v-if="this.$i18n.locale === 'en'"
    class="d-flex flex-column align-center ma-0 pa-0"
  >
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="9" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="10" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="11" fit-parent />
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
.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}



body::-webkit-scrollbar{
  display: none;
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