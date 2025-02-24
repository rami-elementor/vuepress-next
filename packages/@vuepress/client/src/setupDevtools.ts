import { setupDevtoolsPlugin } from '@vue/devtools-api'
import type { App } from 'vue'
import type { GlobalComputed } from './setupGlobalComputed'

const COMPONENT_STATE_TYPE = 'VuePress'

export const setupDevtools = (
  app: App,
  globalComputed: GlobalComputed
): void => {
  setupDevtoolsPlugin(
    {
      // fix recursive reference
      app: app as any,
      id: 'org.vuejs.vuepress',
      label: 'VuePress',
      packageName: '@vuepress/client',
      homepage: 'https://v2.vuepress.vuejs.org',
      logo: 'https://v2.vuepress.vuejs.org/images/hero.png',
      componentStateTypes: [COMPONENT_STATE_TYPE],
    },
    (api) => {
      api.on.inspectComponent((payload) => {
        payload.instanceData.state.push(
          ...Object.entries(globalComputed).map(([name, item]) => ({
            type: COMPONENT_STATE_TYPE,
            key: name,
            editable: false,
            value: item.value,
          }))
        )
      })
    }
  )
}
