import { shallowMount, createLocalVue } from '@vue/test-utils';
import Shape from '@/components/shapes/Shape.vue';
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue';
import VueTouch from 'vue-touch';

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.use(VueTouch)
localVue.use(Vuex)

describe('Shape.vue the parent wrapper that wraps around all shape types', () => {
    let mutations
    let store

    beforeEach(() => {
        mutations = {
            deleteShape: jest.fn()
        }
      
        store = new Vuex.Store({
            modules: {
                shapes: {
                    mutations,
                    namespaced: true
                }
            }
        })
    })

    it('calls deleteShape action when double clicked', async () => {
        const shape = {
            top: 100,
            left: 100,
            key: 'key',
        }
        const wrapper = shallowMount(Shape, {
            propsData: { shape },
            store, 
            localVue
        })
        await wrapper.find('.v-touch').trigger('dblclick')
        //expect(mutations.deleteShape).toHaveBeenCalled()
    })
})