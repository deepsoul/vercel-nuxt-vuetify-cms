<template>
  <section class="grey lighten-3">
    <div class="py-12"></div>
    <VContainer class="text-center" v-editable="blok">
      <h2 class="display-2 text-uppercase font-weight-bold mb-3 text-center">
        {{ blok.headline }}
      </h2>

      <VResponsive class="mx-auto mb-12" width="56">
        <VDivider class="mb-1"></VDivider>

        <VDivider></VDivider>
      </VResponsive>
      <VRow>
        <component
          :is="blokItem.component"
          v-for="blokItem in blok.columns"
          :key="blokItem._uid"
          :blok="blokItem"
        />
      </VRow>
    </VContainer>

    <div class="py-12"></div>
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

<style></style>
