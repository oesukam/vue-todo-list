import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const timeout = 100;
export default new Vuex.Store({
  state: {
    todos: [
      {
        id: '6d470672-d137-4333-9ed8-c4939f96b2a5',
        text: 'Testing hints',
        done: false,
        deleting: false
      }
    ]
  },
  getters: {
    getTodos: state => {
      return state.todos;
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.unshift(payload);
    },
    checkTodo(state, payload) {
      state.todos = state.todos.map(todo => {
        if (todo.id === payload) {
          todo.done = !todo.done;
        }
        return todo;
      });
    },
    removeTodo(state, payload) {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    }
  },
  actions: {
    addTodo({ commit }, paylod) {
      setTimeout(() => {
        commit('addTodo', paylod);
      }, timeout);
    },
    checkTodo({ commit }, paylod) {
      setTimeout(() => {
        commit('checkTodo', paylod);
      }, timeout);
    },
    removeTodo({ commit }, paylod) {
      setTimeout(() => {
        commit('removeTodo', paylod);
      }, timeout);
    }
  }
});
