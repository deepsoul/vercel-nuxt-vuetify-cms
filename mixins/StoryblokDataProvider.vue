<template>
  <section class="util__container">
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </section>
</template>

<script>
export default {
  data() {
    return { story: { content: {} } }
  },
}
</script>
