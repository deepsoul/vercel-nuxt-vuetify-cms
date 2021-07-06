<template>
  <section :id="anchor">
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        {{ headline }}
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row v-editable="blok">
        <component
          :is="blokItem.component"
          v-for="blokItem in blok.articles"
          :key="blokItem._uid"
          :blok="blokItem"
        />
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    anchor() {
      return this.blok.anchor
    },
    headline() {
      return this.blok.headline
    },
  },
}
</script>

<style></style>
