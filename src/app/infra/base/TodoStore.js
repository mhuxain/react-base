import { computed, observable } from "mobx";

class Collection {
  @observable records = [];
  @observable name = "";

  constructor(collectionName) {
    this.name = collectionName;
  }

  create(value) {
    let newId = this.records.length + 1;
    this.records.push({item: value, id: newId });
  }

  delete(record) {
    this.records.remove(record)
  }


}

class BaseStore {
  @observable collections = [];
  @observable filter = "";

  // @computed get filteredTodos() {
  //   var matchesFilter = new RegExp(this.filter, "i", ) // "i" means do a case insensitive filter
  //   return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
  // }

  create(collectionName) {
    let tempColl = new Collection(collectionName)
    let obj = {};
    let tempObj = obj[collectionName] = tempColl;
    this.collections.push(tempObj);
  }

  delete(todo) {
    this.todos.remove(todo)
  }
}

export default new BaseStore;
