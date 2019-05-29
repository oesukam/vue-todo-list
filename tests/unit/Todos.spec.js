import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Todos from '@/components/Todos';

const localVue = createLocalVue();

localVue.use(Vuex);
describe('Todos.vue', () => {
  let store;
  let actions;
  let getters;
  beforeEach(() => {
    actions = {
      addTodo: jest.fn(),
      checkTodo: jest.fn(),
      removeTodo: jest.fn()
    };
    getters = {
      getTodos: jest.fn(() => [{ id: '2', text: '' }])
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(Todos, {
      store,
      localVue
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('when clicking on `add` todo', () => {
    it('should call `addTodo` without adding', () => {
      const wrapper = shallowMount(Todos, {
        store,
        localVue
      });
      wrapper.find('#add-btn').trigger('click');
      expect(wrapper.vm.text).toBe('');
    });

    it('should call `addTodo` and add new todo`', () => {
      const wrapper = shallowMount(Todos, {
        store,
        localVue
      });
      wrapper.setData({
        text: 'text'
      });
      wrapper.find('#add-btn').trigger('click');
      expect(actions.addTodo).toHaveBeenCalled();
    });
  });
});
