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
        <div v-for="(todo, index) in viewTodoItems" :key="todo.id" class="todo panel-block">
          <input @change="changeTodoState(todo)" v-bind:checked="todo.state === Values.STATE_COMPLETED" type="checkbox" class="checkbox">
          <div v-show="!todo.editing" @dblclick="enterEditMode(todo, index)" style="flex: 1; min-width: 0;">
            <div style="overflow: hidden; text-overflow: ellipsis;">{{todo.subject}}</div>
          </div>
          <form v-show="todo.editing" @submit.prevent="editTodoItem(todo)" style="flex: 1; min-width: 0;">
            <input ref="editInputBox" @blur="todo.editing = false" v-model="todo.subject" class="input is-small" type="text">
          </form>
          <button @click="deleteTodoItem(todo)" class="is-pulled-right" style="display: block;" type="button">X</button>
        </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Values from '../model/Values'
import TodoItem from '../model/TodoItem'

const DATA_ID = 'pwa-homework5'
const storage = window.localStorage
const tabs = [{
  name: 'All'
}, {
  name: Values.STATE_ACTIVE
}, {
  name: Values.STATE_COMPLETED
}]
const todoItems = JSON.parse(storage.getItem(DATA_ID) || '[]')

export default {
  name: 'Todo',
  data () {
    return {
      Values,
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
      this.todoItems.push(new TodoItem(this.textInput))
      this.textInput = ''
      this._updateViewTodoItems(true)
    },
    deleteTodoItem (todo) {
      const index = this.todoItems.findIndex(t => t === todo)
      this.todoItems.splice(index, 1)
      this._updateViewTodoItems(true)
    },
    changeTodoState (todo) {
      todo.state = todo.state === Values.STATE_ACTIVE ? Values.STATE_COMPLETED : Values.STATE_ACTIVE
      this._updateViewTodoItems(true)
    },
    changeTab (index) {
      const tab = this.tabs[index]
      this.activeTab = tab
      this._updateViewTodoItems(true)
    },
    enterEditMode (todo, index) {
      todo.editing = true
      const editInputBox = this.$refs.editInputBox[index]
      this.$nextTick(() => editInputBox.select())
    },
    editTodoItem (todo) {
      todo.editing = false
      this._updateViewTodoItems(false)
    },
    _updateViewTodoItems (needToUpdateList) {
      if (needToUpdateList) {
        if (this.activeTab.name === 'All') {
          this.viewTodoItems = this.todoItems
        } else {
          this.viewTodoItems = this.todoItems.filter(item => item.state === this.activeTab.name)
        }
      } else {
        storage.setItem(DATA_ID, JSON.stringify(this.todoItems))
      }
    }
  }
}
</script>
