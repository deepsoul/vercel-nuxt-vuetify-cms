<script>
import StoryblokLivePreview from '@/mixins/StoryblokLivePreview'
import StoryblokDataProvider from '@/mixins/StoryblokDataProvider'
import StoryblokUtils from '@/utils/storyblok.js'
export default {
  mixins: [StoryblokLivePreview, StoryblokDataProvider],

  asyncData(context) {
    const sb = new StoryblokUtils()
    return sb.dataFromStory(context, '/home')
  },
}
</script>
