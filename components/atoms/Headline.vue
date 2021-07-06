<template>
  <h2 class="mb-3">
    <div class="module-title">{{ titleId }}</div>
    {{ headline }}
  </h2>
</template>
<script>
export default {
  props: {
    headline: {
      type: String,
      default() {
        return "Headline";
      },
    },
    titleId: {
      type: String,
      default() {
        return "01";
      },
    },
  },
};
</script>
<style lang="scss">
.module-title {
  position: relative;
  font-family: "Playfair Display", serif;
  font-size: 1em;

  &:after {
    position: absolute;
    top: 50%;
    left: 30px;
    width: 70px;
    height: 1px;
    content: "";
    background-color: #000;
  }
}
h2 {
  & .module-title {
    position: relative;
    font-family: "Playfair Display", serif;
    font-size: 1em;

    &:after {
      position: absolute;
      top: 50%;
      left: 30px;
      width: 70px;
      height: 1px;
      content: "";
      background-color: #000;
    }
  }
  margin: 0 0 1em 0;
  font-family: "Playfair Display", serif;
  font-size: 1.5em;
  text-align: left;
}
</style>