import { shallowMount, createLocalVue } from '@vue/test-utils';
import Shapes from '@/views/Shapes.vue';
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue';

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

describe('Shapes.vue displays the shapes on the user\'s screen', () => {
    let state 
    let store
    beforeEach(() => {
        state = {
            created: {
                'circle': {
                    top: 100,
                    left: 100,
                    color: "#276db8",
                    key: 'circle',
                    component: 'circle-shape',
                    parameters: {
                        radius: 10,
                    }
                },
                'elipse': {
                    top: 100,
                    left: 100,
                    color: "#276db8",
                    component: 'elipse-shape',
                    key: 'elipse',
                    parameters: {
                        xRadius: 20,
                        yRadius: 50,
                    }
                },
                'rectangle': {
                    top: 100,
                    left: 100,
                    color: "#276db8",
                    component: 'rectangle-shape',
                    key: 'rectangle',
                    parameters: {
                        width: 40,
                        height: 20,
                    }
                },
                'square': {
                    top: 100,
                    left: 100,
                    color: "#276db8",
                    component: 'rectangle-shape',
                    key: 'square',
                    parameters: {
                        width: 30,
                    }
                },
                'triangle': {
                    top: 100,
                    left: 100,
                    color: "#276db8",
                    component: 'polygon-shape',
                    key: 'triangle',
                    parameters: {
                        width: 30,
                        sides: 3,
                    }
                },
                'pentagon': {
                    top: 100,
                    left: 100,
                    color: "#276db8",
                    component: 'polygon-shape',
                    key: 'pentagon',
                    parameters: {
                        width: 30,
                        sides: 5,
                    }
                }
            }
        }
        store = new Vuex.Store({
            modules: {
                shapes: {
                    namspaced: true,
                    state,
                }
            }
        })
    })
    
    it('displays the component for the shapes', () => {
        const wrapper = shallowMount(Shapes, { store, localVue })
        expect(wrapper.findComponent({ name: 'circle-shape' }).exists()).toBe(true)
        expect(wrapper.findComponent({ name: 'elipse-shape' }).exists()).toBe(true)
        expect(wrapper.findComponent({ name: 'polygon-shape' }).exists()).toBe(true)
    })
})