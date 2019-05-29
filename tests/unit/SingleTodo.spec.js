import { shallowMount } from '@vue/test-utils';
import SingleTodo from '@/components/SingleTodo';

describe('SingleTodo.vue', () => {
  const propsData = {
    todo: {
      id: '6d470672-d137-4333-9ed8-c4939f96b2a5',
      text: 'Testing hints',
      done: false,
      deleting: false
    }
  };

  test('renders correctly', () => {
    const wrapper = shallowMount(SingleTodo, { propsData });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly without `props`', () => {
    const wrapper = shallowMount(SingleTodo);
    expect(wrapper.props().todo).toEqual({});
  });

  describe('when clicking on `check` todo', () => {
    it('should call `checkTodo`', () => {
      const wrapper = shallowMount(SingleTodo, {
        propsData
      });
      wrapper.find('.btn-check').trigger('click');
      expect(wrapper.props().todo).toHaveProperty('done');
    });
  });

  describe('when clicking on `remove` todo', () => {
    it('should call `removeTodo`', () => {
      const wrapper = shallowMount(SingleTodo, {
        propsData
      });
      wrapper.find('.btn-delete').trigger('click');
      expect(wrapper.props().todo).toHaveProperty('id');
    });
  });
});
