<template>
  <VRow>
    <VCol class="d-flex justify-center mt-8" justify-center align-center>
      <img :src="blok.image.filename" height="200px" alt=""
    /></VCol>
  </VRow>
</template>
<script>
export default {
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
<style lang="scss" scoped>
</style>