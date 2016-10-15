import { computed, observable, action } from "mobx";

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
  @observable loader = false;
  
  resRoute = "";

  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i", ) // "i" means do a case insensitive filter
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }
  
  constructor() {
      
  }
  
  init() {
      this.fetch();
  }
  
  @action fetch() {
      window.fetch(this.resRoute)
      
              .then(res => res.json())
              .then(action(json => {
                  console.log(json);
                  this.todos.replace(json);
                
            }))
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

export default TodoStore;
