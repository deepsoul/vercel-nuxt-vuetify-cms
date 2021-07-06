<template>
  <div id="app">
    <VApp>
      <VMain>
        <nuxt />
      </VMain>
      <Footer />
    </VApp>
  </div>
</template>

<script>
import Footer from "@/components/molecules/Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.v-application {
  background-color: rgba(49, 49, 49, 0.28) !important;
  color: #212529 !important;
}

p {
  font-family: "Raleway", sans-serif;
  font-size: 0.9em;
  font-weight: 400;
}
</style>
