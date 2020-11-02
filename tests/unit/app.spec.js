import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue';

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

describe('App.vue is the parent layout and entry point of app', () => {
    let state 
    let store

    beforeEach(()=> {
        jest.spyOn(screen, 'height', 'get').mockReturnValue(500);
        expect(screen.height).toBe(500);
        jest.spyOn(screen, 'width', 'get').mockReturnValue(500);
        expect(screen.width).toBe(500);
    })
    it('ensures that the computed property shapesIsEmpty returns true when created shapes is empty', () => {
        state = {
            created: {}
        }
        store = new Vuex.Store({
            modules: {
                shapes: {
                    namspaced: true,
                    state,
                }
            }
        })

        const wrapper = shallowMount(App, { store, localVue, stubs: ['router-link', 'router-view'] })
        expect( wrapper.vm.shapesIsEmpty).toBeTruthy()
    })

    it('ensures that the computed property shapesIsEmpty returns false when created shapes is not empty', () => {
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

        const wrapper = shallowMount(App, { store, localVue, stubs: ['router-link', 'router-view'] })
        expect( wrapper.vm.shapesIsEmpty).toBeFalsy()
        
    })

    it('tests that the methods toggle data appropriately', () => {
        state = {
            created: {}
        }
        store = new Vuex.Store({
            modules: {
                shapes: {
                    namspaced: true,
                    state,
                }
            }
        })

        const wrapper = shallowMount(App, { store, localVue, stubs: ['router-link', 'router-view'] })
        expect(wrapper.vm.showSidebar).toBeTruthy()
        expect(wrapper.vm.showConfirmationModal).toBeFalsy()
        wrapper.vm.deleteAllShapes()
        expect(wrapper.vm.showConfirmationModal).toBeTruthy()
        wrapper.vm.toggleShowSideBar()
        expect(wrapper.vm.showSidebar).toBeFalsy()
        wrapper.vm.toggleShowSideBar()
        expect(wrapper.vm.showSidebar).toBeTruthy()
        wrapper.vm.handleDeleteConfirmation(false)
        expect(wrapper.vm.showConfirmationModal).toBeFalsy()
    })
})