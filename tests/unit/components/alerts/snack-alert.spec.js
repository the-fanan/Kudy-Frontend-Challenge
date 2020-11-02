import { shallowMount, createLocalVue } from '@vue/test-utils';
import SnackAlert from '@/components/alerts/SnackAlert.vue';
import { BootstrapVue } from 'bootstrap-vue';
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(BootstrapVue)

describe('SnackAlert.vue', () => {
    it('renders alert.state.snackAlert values', () => {
        let state = {
            snackAlert: {
                show: true,
                type: "success",
                heading: "Alert Heading",
                messages: ["Alert message"],
            },
        }
        let store = new Vuex.Store({
            modules: {
                alert: {
                    namspaced: true,
                    state,
                }
            }
        })
        const wrapper = shallowMount(SnackAlert, { store, localVue })
        expect(wrapper.find('div.fec-snack-alert').exists()).toBe(true)
        expect(wrapper.find('div.main.shadow-lg').classes('success')).toBe(true)
        expect(wrapper.find('h6.alert-heading').text()).toMatch(state.snackAlert.heading)
        expect(wrapper.find('li.alert-message').text()).toMatch(state.snackAlert.messages[0])
    })

    it('does not render when show is false', () => {
        let state = {
            snackAlert: {
                show: false,
            },
        }
        let store = new Vuex.Store({
            modules: {
                alert: {
                    namspaced: true,
                    state,
                }
            }
        })
        const wrapper = shallowMount(SnackAlert, { store, localVue })
        expect(wrapper.find('div.fec-snack-alert').exists()).toBe(false)
    })
})
