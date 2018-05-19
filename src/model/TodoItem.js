import Values from './Values'

let uid = Date.now()

class TodoItem {
  constructor (text) {
    this.id = uid++
    this.subject = text
    this.state = Values.STATE_ACTIVE
    this.editing = false
  }
}

export default TodoItem
