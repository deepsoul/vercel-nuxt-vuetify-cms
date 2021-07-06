<template>
  <div class="rich-text" :class="alignmentClass">
    <div v-html="richtext" />
  </div>
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
    alignment: {
      type: String,
      default: "left",
    },
  },
  computed: {
    richtext() {
      return this.$storyapi.richTextResolver.render(this.blok);
    },
    alignmentClass() {
      return "alignment--" + this.alignment;
    },
  },
};
</script>

<style lang="postcss" scoped>
.rich-text {
  display: flex;
  align-items: center;

  & >>> div {
    width: 100%;
  }

  &.alignment--center {
    text-align: center;
  }

  &.alignment--left {
    text-align: left;
  }

  &.alignment--right {
    text-align: right;
  }

  /* justify-content: center ; */

  & >>> ul {
    justify-content: flex-start;

    & li {
      & p {
        margin: 0;
      }
    }
  }

  & >>> h1,
  & >>> h1 span {
    margin: 65px 0 20px 0;

    @media (--sm) {
      margin: 65px 0 20px 0;
    }

    font-size: responsive 28px 45px;
    font-style: normal;
    font-weight: bold;
    font-stretch: condensed;
    line-height: normal;
    text-align: center;

    &.left-align {
      display: block;
      text-align: left !important;
    }

    &.right-align {
      display: block;
      text-align: right !important;
    }

    letter-spacing: normal;
  }

  & >>> h1 {
    & + h1 {
      margin: 0;
      margin: -20px 0 20px 0;

      & span {
        margin-top: -45px;
        margin-bottom: 20px;
      }
    }

    font-family: "Alfa Slab One", cursive;
  }

  /* stylelint-disable */
  & >>> p,
  & >>> p span {
    width: auto;
    margin: 0 0 25px 0;
    font-size: 18px;

    @media (--sm) {
      margin: 0 0 37px 0;
      font-size: 18px;
    }

    &:last-child {
      margin: 0;
    }

    font-style: normal;

    font-stretch: normal;
    line-height: 1.25;
    color: #000;
    letter-spacing: normal;

    & b {
      font-weight: 700;
    }

    &.left-align {
      display: block;
      text-align: left !important;
    }

    &.right-align {
      display: block;
      text-align: right !important;
    }

    &.center {
      display: inline-block;
      text-align: center !important;
      margin: 0;
      width: 100%;
    }

    font-family: "Barlow Semi Condensed", sans-serif;
  }

  & >>> h2,
  & >>> h2 span {
    margin: 65px 0 20px 0;

    &:first-child {
      margin: 0 0 20px 0;
    }

    @media (--sm) {
      margin: 65px 0 20px 0;
    }

    font-size: 22px;
    font-weight: bold;
    font-stretch: condensed;
    line-height: 1.18;
    color: #000;

    text-align: center;

    &.left-align {
      display: block;
      text-align: left !important;
    }

    &.right-align {
      display: block;
      text-align: right !important;
    }

    letter-spacing: normal;

    font-family: "Alfa Slab One", cursive;
  }

  & >>> h3,
  & >>> h3 span {
    margin: 65px 0 20px 0;

    &:first-child {
      margin: 0 0 20px 0;
    }
    font-size: 25px;
    @media (--sm) {
      font-size: 30px;
      margin: 65px 0 20px 0;
    }

    font-weight: bold;
    font-stretch: condensed;
    line-height: 1.18;
    color: #000;

    text-align: center;

    &.left-align {
      display: block;
      text-align: left !important;
    }

    &.right-align {
      display: block;
      text-align: right !important;
    }

    letter-spacing: normal;

    font-family: "Alfa Slab One", cursive;
  }

  & >>> blockquote,
  & >>> blockquote p,
  & >>> blockquote p span {
    position: relative;
    font-weight: 700;
    font-size: 25x;
    font-style: italic;
    color: rgb(54, 50, 50);
    padding: 10px;

    font-family: "Alfa Slab One", cursive;

    &:first-child {
      &:before {
        content: "\201C";
        color: #999;
        font-size: 7.5em;
        font-weight: 700;
        opacity: 0.3;
        position: absolute;
        top: -0.4em;
        left: -0.2em;
        text-shadow: none;
        z-index: -300;
      }
    }
  }

  /* stylelint-enable */
}
</style>
