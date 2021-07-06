<template>
  <VCol v-editable="blok">{{ blok.name }}</VCol>
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