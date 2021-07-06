<template>
  <VContainer>
    <VRow>
      <VCol><Headline :headline="blok.headline" /></VCol>
    </VRow>
  </VContainer>
</template>
<script>
import Headline from "@/components/atoms/Headline.vue";
export default {
  components: {
    Headline,
  },
  props: {
    blok: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="">
</style>