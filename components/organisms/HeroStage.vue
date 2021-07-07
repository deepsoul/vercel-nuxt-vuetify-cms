<template>
  <section id="hero" class="no-margin" v-editable="blok">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        :src="src"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <span
                  ref="title1"
                  :class="[$vuetify.breakpoint.smAndDown ? 'head-2' : 'head-1']"
                  class="font-weight-light"
                >
                  {{ first }}
                </span>

                <br />

                <span
                  ref="title2"
                  :class="[$vuetify.breakpoint.smAndDown ? 'head-4' : 'head-3']"
                  class="font-weight-black text-uppercase"
                >
                  {{ second }}
                </span>
              </v-col>
              <div ref="heroBtn" class="hero-btn">
                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="goToAnchor()"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </div>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
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
    src() {
      return this.blok.image.filename;
    },
    first() {
      return this.blok.first;
    },
    second() {
      return this.blok.second;
    },
  },
  methods: {
    goToAnchor() {
      this.$vuetify.goTo(`#${this.blok.anchor}`);
    },
  },
  mounted() {
    this.$refs.title1.classList.add("inital-animation");
    this.$refs.title2.classList.add("inital-animation");
    this.$refs.heroBtn.classList.add("inital-animation");
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Playfair Display", serif;

  text-align: center;

  & .head-2 {
    font-size: 2.5em;
    font-style: italic;
  }
  & .head-1 {
    font-size: 6.5em;
    font-style: italic;
  }

  & .head-1,
  & .head-2 {
    transform: translateX(-50px);
    opacity: 0;
    &.inital-animation {
      opacity: 1;
      transition: all 500ms ease-in-out;
      transition-delay: 600ms;
      transform: translateX(0);
    }
  }

  & .head-3,
  & .head-4 {
    transform: translateX(-50px);
    transform: translateY(-50px);
    opacity: 0;
    &.inital-animation {
      opacity: 1;
      transition: all 500ms ease-in-out;
      transition-delay: 600ms;
      transform: translateX(0);
      transform: translateY(0);
    }
  }

  & .head-3 {
    font-family: "Raleway", sans-serif;
    font-size: 1em;
    font-weight: 800;
  }
  & .head-4 {
    font-family: "Raleway", sans-serif;
    font-size: 1.5em;
    font-weight: 800;
  }
}
.hero-btn {
  opacity: 0;
  transform: translateX(-50px);
  transform: translateY(-50px);
  &.inital-animation {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
    transition-delay: 1000ms;
    transform: translateX(0);
    transform: translateY(0);
  }
}
</style>
