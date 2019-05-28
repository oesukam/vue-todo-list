<template>
  <section class="container todos-container">
    <div class="row align-items-center">
      <div class="col-sm-6 offset-md-3">
        <div class="todos-box">
          <h1 class="title has-text-centered">My Todos</h1>
          <div class="input-group mb-5">
            <input
              class="form-control"
              placeholder="Enter your todo"
              name="text"
              v-model="text"
              v-on:keydown.enter="addNewTodo"
            >
            <div class="input-group-append">
              <button
                v-on:click="addNewTodo"
                class="btn btn-outline-secondary"
                type="button"
                id="add-btn"
              >Add</button>
            </div>
          </div>
          <div class="my-todos">
            <SingleTodo
              v-for="(todo, index) in todos"
              :index="index"
              :key="todo.id"
              :todo="todo"
              v-on:removeTodo="removeTodo"
              v-on:checkTodo="checkTodo"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import uuid from 'uuid';
import SingleTodo from './SingleTodo';

export default {
  name: 'Todos',
  components: {
    SingleTodo
  },
  data() {
    return {
      text: ''
    };
  },
  computed: {
    ...mapGetters({
      todos: 'getTodos'
    })
  },
  methods: {
    addNewTodo() {
      const { text } = this;
      if (text) {
        const todo = {
          id: uuid.v4(),
          text,
          done: false,
          deleting: false
        };
        this.addTodo(todo).then(() => {
          this.text = '';
        });
      }
    },
    ...mapActions(['addTodo', 'checkTodo', 'removeTodo'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todos-box {
  min-height: 300px;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 0.5rem;
}
.todos-box h1 {
  margin-bottom: 2rem;
}
</style>
