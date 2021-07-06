<template>
  <VContainer>
    <VRow>
      <VCol>
        <div>{{ blok.headline }}</div></VCol
      >
    </VRow>
  </VContainer>
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