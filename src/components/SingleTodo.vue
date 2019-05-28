<template>
  <div class="todo">
    <div class="todo__index">{{Number(index) + 1}}.</div>
    <div class="todo__text">{{todo.text}}</div>
    <div class="todo__actions">
      <button id="btn-check" class="btn btn-light" @click="checkTodo(todo.id)">
        <i :class="['fas fa-check-circle', {active: todo.done }]"/>
      </button>
      <button id="btn-delete" class="btn btn-light" @click="removeTodo(todo.id)">
        <i class="fa fa-trash"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      default: function() {
        return {};
      }
    },
    index: {
      type: Number
    }
  },
  methods: {
    removeTodo(id) {
      this.$emit('removeTodo', id);
    },
    checkTodo(id) {
      this.$emit('checkTodo', id);
    }
  }
};
</script>

<style scoped>
.todo {
  display: flex;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}

.todo__index {
  width: 20px;
  color: #000;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
}

.todo__text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  margin-left: 5px;
}

.todo__actions {
  width: 100px;
  display: flex;
  justify-content: flex-end;
}

.todo__actions button i.active {
  color: #209cee;
}

#btn-check {
  margin-right: 10px;
}
</style>
