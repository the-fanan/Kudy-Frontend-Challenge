import { shallowMount, createLocalVue } from '@vue/test-utils';
import ElipseForm from '@/components/shapes/elipse/Form.vue';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ElipseForm collects inputs for creating an elipse', () => {
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
            color: "#276db8",
            component: 'elipse-shape',
            parameters: {
                xRadius: 20,
                yRadius: 50,
            }
        }

        const wrapper = shallowMount(ElipseForm, {
            store, 
            localVue
        })

        const xRadiusInput = wrapper.find('input[name=x-radius]')
        await xRadiusInput.setValue(shape.parameters.xRadius)
        const yRadiusInput = wrapper.find('input[name=y-radius]')
        await yRadiusInput.setValue(shape.parameters.yRadius)

        const colorInput = wrapper.find('input[name=color]')
        await colorInput.setValue(shape.color)
        const submitButton = wrapper.find('button.btn-primary.submit-button')
        await submitButton.trigger('click')

        expect(actions.addShape).toHaveBeenCalledWith(expect.anything(), shape)
        expect(wrapper.emitted('shape-created')).toBeTruthy()
        //ensure form is reset
        expect(wrapper.vm.$data.xRadius).toEqual(20)
        expect(wrapper.vm.$data.yRadius).toEqual(10)
        expect(wrapper.vm.$data.color).toEqual('#276db8')
    })
})