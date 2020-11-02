import { shallowMount, createLocalVue } from '@vue/test-utils';
import CircleForm from '@/components/shapes/circle/Form.vue';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CircleForm collects inputs for creating a circle', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            addShape: jest.fn()
        }
      
        store = new Vuex.Store({
            modules: {
                shapes: {
                    actions,
                    namespaced: true
                }
            }
        })

        jest.spyOn(screen, 'height', 'get').mockReturnValue(500);
        expect(screen.height).toBe(500);
        jest.spyOn(screen, 'width', 'get').mockReturnValue(500);
        expect(screen.width).toBe(500);
    })

    it('creates the necessary Object for a circle shape', async () => {
        let shape = {
            top: 100,
            left: 100,
            color: '#276db9',
            component: 'circle-shape',
            parameters: {
                radius: 40,
            }
        }

        const wrapper = shallowMount(CircleForm, {
            store, 
            localVue
        })

        const radiusInput = wrapper.find('input[name=radius]')
        await radiusInput.setValue(shape.parameters.radius)
        const colorInput = wrapper.find('input[name=color]')
        await colorInput.setValue(shape.color)
        const submitButton = wrapper.find('button.btn-primary.submit-button')
        await submitButton.trigger('click')

        let expected = {
            commit: function () {},
            dispatch: function () {},
            getters: {},
            rootGetters: {},
            rootState: {
                shapes: {

                }
            },
            state: {}
        }
        expect(actions.addShape).toHaveBeenCalledWith(expect.anything(), shape)
        expect(wrapper.emitted('shape-created')).toBeTruthy()
        //ensure form is reset
        expect(wrapper.vm.$data.radius).toEqual(10)
        expect(wrapper.vm.$data.color).toEqual('#276db8')
    })
})