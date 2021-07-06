<template>
  <VCarousel hide-delimiters>
    <VCarouselItem
      v-for="(item, i) in images"
      :key="i"
      :src="item.image.filename"
    ></VCarouselItem>
  </VCarousel>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style lang="">
</style>