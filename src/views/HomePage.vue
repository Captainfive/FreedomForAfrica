<template>
  <section v-if="this.$i18n.locale === 'fr'" class="d-flex flex-column align-center ma-0 pa-0 my-10">
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="1" fit-parent/>
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="4" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="5" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="6" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="88" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="89" fit-parent />
    </div>
    <div class="app-content">
      <VuePDF :pdf="pdf" :page="3" fit-parent />
    </div>
  </section>
  <section v-if="this.$i18n.locale === 'en'" class="d-flex flex-column align-center ma-0 pa-0 my-10">
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="1" fit-parent />
    </div>
    <v-spacer></v-spacer>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="4" fit-parent />
    </div>
    <v-spacer></v-spacer>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="5" fit-parent />
    </div>
    <v-spacer></v-spacer>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="6" fit-parent />
    </div>
    <v-spacer></v-spacer>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="88" fit-parent />
    </div>
    <v-spacer></v-spacer>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="89" fit-parent />
    </div>
    <v-spacer></v-spacer>
    <div class="app-content">
      <VuePDF :pdf="newPDFToLoad" :page="3" fit-parent />
    </div>
  </section>
</template>


<style>
.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}

.app-content {
  width: 100%;
}

.right {
  float: right;
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
};
</script>

<script setup>
import { VuePDF, usePDF } from "@tato30/vue-pdf";

const pdfSources = [
  '/AFD_FR_vdef.pdf',
  '/AFD_EN_vdef.pdf'
]

const { pdf } = usePDF(pdfSources[0])
const { pdf: newPDFToLoad } = usePDF(pdfSources[1])
</script>
