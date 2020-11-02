import { shallowMount, createLocalVue } from '@vue/test-utils';
import PolygonForm from '@/components/shapes/polygon/Form.vue';
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('PolygonForm collects inputs for creating a polygon', () => {
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

    it('creates the necessary Object for a polygon shape', async () => {
        let shape = {
            top: 100,
            left: 100,
            color: "#276db9",
            component: 'polygon-shape',
            parameters: {
                width: 30,
                sides: 8,
            }
        }

        const wrapper = shallowMount(PolygonForm, {
            store, 
            localVue
        })

        const widthInput = wrapper.find('input[name=width]')
        await widthInput.setValue(shape.parameters.width)

        const sidesInput = wrapper.find('input[name=sides]')
        await sidesInput.setValue(shape.parameters.sides)

        const colorInput = wrapper.find('input[name=color]')
        await colorInput.setValue(shape.color)
        const submitButton = wrapper.find('button.btn-primary.submit-button')
        await submitButton.trigger('click')

        expect(actions.addShape).toHaveBeenCalledWith(expect.anything(), shape)
        expect(wrapper.emitted('shape-created')).toBeTruthy()
        //ensure form is reset
        expect(wrapper.vm.$data.width).toEqual(80)
        expect(wrapper.vm.$data.sides).toEqual(5)
        expect(wrapper.vm.$data.color).toEqual('#276db8')
    })
})