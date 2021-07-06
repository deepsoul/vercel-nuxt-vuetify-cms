<template>
  <v-footer class="justify-center" color="#fff" height="300">
    <VRow>
      <VCol
        cols="12"
        sm="4"
        class="d-flex justify-center"
        justify-center
        align-center
      >
        <a class="pt-10" href="https://www.instagram.com/bohemians.music/"
          ><img src="/images/instagram-logo.png" height="100px" alt="" /></a
      ></VCol>

      <VCol
        cols="12"
        sm="4"
        class="d-flex justify-center mt-4 mb-4"
        justify-center
        align-center
      >
        <img src="/images/the-bohemians-logo.svg" height="200px" alt=""
      /></VCol>
      <VCol
        cols="12"
        sm="4"
        class="d-flex justify-center align-center"
        justify-center
        align-center
      >
        <a href="hhttps://www.youtube.com/channel/UCyfXb-IbwyF2PstDGeh36Og"
          ><img src="/images/youtube-logo.png" width="200px" alt="" /></a
      ></VCol>
    </VRow>
    <client-only>
      <cookie-law
        theme="dark-lime"
        :message="'Diese Seite verwendet Cookies.'"
        :buttonText="'Alles klar!'"
      ></cookie-law>
    </client-only>
  </v-footer>
</template>

<script>
export default {
  components: {
    CookieLaw: () => (process.client ? import("vue-cookie-law") : null),
  },
};
</script>
