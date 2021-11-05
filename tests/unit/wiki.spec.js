import { mount, createLocalVue } from '@vue/test-utils'
import Wiki from './../../src/components/wiki/Wiki'
import VueCompositionApi from '@vue/composition-api'
import components from '@baldeweg/components'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)
localVue.use(components)

describe('Wiki', () => {
  it('renders the article', () => {
    const $t = () => {}
    const wrapper = mount(Wiki, {
      localVue,
      propsData: {},
      mocks: {
        $t,
      },
    })

    expect(wrapper.find('article').exists()).toBeTruthy()
  })
})
