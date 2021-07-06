<template>
  <v-app-bar app color="white" height="100">
    <v-avatar class="mr-3" color="grey lighten-5" size="70">
      <v-img contain max-height="70%" src="images/logo.png"></v-img>
    </v-avatar>

    <v-toolbar-title class="font-weight-black headline darken">
      {{ title }}
    </v-toolbar-title>
    <client-only>
      <v-facebook-login :app-id="facebookAppId"></v-facebook-login>
    </client-only>
  </v-app-bar>
</template>

<script>
export default {
  components: {
    VFacebookLogin: () =>
      process.client ? import('vue-facebook-login-component') : null,
  },
  data() {
    return {
      title: 'Challenge',
      facebookAppId: '251997956291544',
    }
  },
}
</script>

<style></style>
