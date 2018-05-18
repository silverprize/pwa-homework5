<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <nav class="panel">
        <p class="panel-heading has-text-centered">Todos</p>
        <form v-on:submit.prevent="addTodoItem" class="panel-block">
          <p class="control">
            <input v-model="textInput" class="input" type="text" placeholder="What to do" autofocus autocomplete="off">
          </p>
        </form>
        <p class="panel-tabs">
          <a v-for="(tab, index) in tabs" v-bind:key="tab.name" v-bind:class="tab === activeTab ? 'is-active' : ''" @click="changeTab(index)">{{tab.name}}</a>
        </p>
        <div>
        <div v-for="todo in viewTodoItems" :key="todo.id" class="todo panel-block">
          <input @change="changeTodoState(todo)" v-bind:checked="todo.state === STATE_COMPLETED" type="checkbox" class="checkbox">
          <div v-show="!todo.editing" @click="enterTodoEdit($event, todo)" style="flex: 1; min-width: 0;">
            <div style="overflow: hidden; text-overflow: ellipsis;">{{todo.subject}}</div>
          </div>
          <form v-show="todo.editing" v-on:submit.prevent="todo.editing = false" style="flex: 1; min-width: 0;">
            <input @blur="todo.editing = false" v-model="todo.subject" class="input is-small" type="text">
          </form>
          <button @click="deleteTodoItem(todo)" class="is-pulled-right" style="display: block;" type="button">X</button>
        </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
const DATA_ID = 'pwa-homework5'
const storage = window.localStorage
const STATE_ACTIVE = 'Active'
const STATE_COMPLETED = 'Completed'
export default {
  name: 'Todo',
  data () {
    const tabs = [{
      name: 'All'
    }, {
      name: STATE_ACTIVE
    }, {
      name: STATE_COMPLETED
    }]
    const todoItems = JSON.parse(storage.getItem(DATA_ID) || '[]')
    return {
      STATE_ACTIVE,
      STATE_COMPLETED,
      textInput: '',
      tabs,
      activeTab: tabs[0],
      viewTodoItems: todoItems,
      todoItems: todoItems
    }
  },
  methods: {
    addTodoItem () {
      if (!this.textInput) {
        return
      }

      const todo = {
        id: Math.random(),
        subject: this.textInput,
        state: STATE_ACTIVE
      }
      this.todoItems.push(todo)
      this.textInput = ''
      this._updateViewTodoItems()
    },
    deleteTodoItem (todo) {
      const index = this.todoItems.findIndex(t => t === todo)
      this.todoItems.splice(index, 1)
      this._updateViewTodoItems()
    },
    changeTodoState (todo) {
      todo.state = todo.state === STATE_ACTIVE ? STATE_COMPLETED : STATE_ACTIVE
      this._updateViewTodoItems()
    },
    changeTab (index) {
      const tab = this.tabs[index]
      this.activeTab = tab
      this._updateViewTodoItems()
    },
    enterTodoEdit ($event, todo) {
      const input = $event.currentTarget.nextElementSibling.querySelector('input')
      todo.editing = true
      this.$nextTick(() => {
        input.select()
      })
    },
    _updateViewTodoItems () {
      if (this.activeTab.name === 'All') {
        this.viewTodoItems = this.todoItems
      } else {
        this.viewTodoItems = this.todoItems.filter(item => item.state === this.activeTab.name)
      }
      storage.setItem(DATA_ID, JSON.stringify(this.todoItems))
    }
  }
}
</script>

<style scoped>
</style>