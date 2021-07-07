<template>
  <section id="logo">
    <VRow>
      <VCol class="d-flex justify-center mt-8" justify-center align-center>
        <VImg
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          :src="blok.image.filename"
          alt=""
        />
      </VCol>
    </VRow>
  </section>
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