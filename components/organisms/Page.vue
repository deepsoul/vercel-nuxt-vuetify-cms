<template>
  <div v-editable="blok" class="page">
    <component
      :is="item.asyncComponent"
      v-for="(item, index) in components"
      :key="index"
      :blok="item.data"
    />
  </div>
</template>

<script>
import { getAsyncComponents } from '@/utils/async-components'
export default {
  props: {
    blok: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      components: [],
    }
  },

  created() {
    this.components = getAsyncComponents(this.blok.body)
  },
}
</script>
