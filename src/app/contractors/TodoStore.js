import { computed, observable } from "mobx";

class Todo {
  @observable value;
  @observable id;
  @observable complete

  constructor(value, newId) {
    this.value = value;
    this.id = newId;
    this.complete = false;
  }


}

class TodoStore {
  @observable todos = [];
  @observable filter = "";

  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i", ) // "i" means do a case insensitive filter
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }

  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }

  create(value) {
    let newId = this.todos.length + 1;
    this.todos.push(new Todo(value, newId));
  }

  delete(todo) {
    this.todos.remove(todo)
    console.log("test");
  }
}

export default new TodoStore;
