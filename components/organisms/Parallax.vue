<template>
  <section :id="anchor" v-editable="blok">
    <VParallax :height="$vuetify.breakpoint.smAndDown ? 700 : 500" :src="src">
      <VContainer fill-height>
        <VRow class="mx-auto">
          <component
            :is="blokItem.component"
            v-for="blokItem in blok.columns"
            :key="blokItem._uid"
            :blok="blokItem"
          />
        </VRow>
      </VContainer>
    </VParallax>
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
  computed: {
    anchor() {
      return this.blok.anchor;
    },
    src() {
      return this.blok.image.filename;
    },
  },
};
</script>

<style></style>
