<template>
    <iframe v-if="this.$i18n.locale === 'fr'" scrolling="no" style="width: 100%; height: 100%; max-height: 100vh; border: 0" src="./ifa_map_fr.html"></iframe>
    <iframe v-if="this.$i18n.locale === 'en'" scrolling="no" style="width: 100%; height: 100%; max-height: 100vh; border: 0" src="./ifa_map_en.html"></iframe>
</template>

<script>
export default {
    
};
</script>
<style>
</style>
