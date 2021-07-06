// import crypto from 'crypto';
// import axios from 'axios'

class StoryblokUtils {
  dataFromStory(context, story = context.route.path) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get('cdn/stories' + story, {
        version,
        cv: new Date(),
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        })
      })
  }

  getAllStories(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get('cdn/stories/', {
        version,
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        })
      })
  }

  getPageNavigation(context) {
    // const version = context.query._storyblok || context.isDev ? 'draft' : 'published';
    return context.$storyapi
      .get('cdn/links/')
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        })
      })
  }
}

export default StoryblokUtils
