import { hydrateWhenIdle, hydrateWhenVisible } from 'vue-lazy-hydration'
import { pascalCase } from 'change-case'

export function getAsyncComponents(
  componentsData,
  initialVisibleComponents = 1
) {
  if (!componentsData) {
    return false
  }
  return componentsData.map((item, index) => {
    const component = pascalCase(item.component)
    const asyncLoad = () => import('@/components/organisms/' + component)
    const data = Object.assign(
      {
        options: {},
      },
      item
    )
    if (index >= initialVisibleComponents) {
      return {
        asyncComponent: hydrateWhenVisible(asyncLoad, {
          observerOptions: {
            rootMargin: '100px',
          },
        }),
        data,
      }
    }
    data.options = Object.assign(data.options, {
      visible: true,
    })
    return {
      asyncComponent: hydrateWhenIdle(asyncLoad),
      data,
    }
  })
}
