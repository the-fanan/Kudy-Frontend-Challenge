import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import ConfirmationModal from '@/components/modals/ConfirmationModal.vue';

const localVue = createLocalVue()

localVue.use(BootstrapVue)

describe('ConfirmationModal.vue', () => {
  it('renders props.title and props.message when passed', () => {
    const title = 'Confirm Deletions';
    const message = 'A message';
    const show = true;
    const wrapper = shallowMount(ConfirmationModal, {
      propsData: { title, message, show },
      localVue
    })
    expect(wrapper.find('h4').text()).toMatch(title)
    expect(wrapper.find('p.message').text()).toMatch(message)
  })

  it('emits decline but not approve events when decline button is clicked', async () => {
    const show = true;
    const wrapper = shallowMount(ConfirmationModal, {
      propsData: { show },
      localVue
    })

    const declineButton = wrapper.find('button.btn.btn-primary.btn-small.confirmation-modal-decline')
    await declineButton.trigger('click')
    expect(wrapper.emitted('decline')).toBeTruthy()
    expect(wrapper.emitted('decline')[0]).toEqual([false])
    expect(wrapper.emitted('approve')).toBeFalsy()
  })

  it('emits approve but not decline events when approve button is clicked', async () => {
    const show = true;
    const wrapper = shallowMount(ConfirmationModal, {
      propsData: { show },
      localVue
    })
    const approveButton = wrapper.find('button.btn.btn-danger.btn-small.confirmation-modal-approve')
    await approveButton.trigger('click')
    expect(wrapper.emitted('approve')).toBeTruthy()
    expect(wrapper.emitted('approve')[0]).toEqual([true])
    expect(wrapper.emitted('decline')).toBeFalsy()
  })
})