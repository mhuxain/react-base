import React from "react"
import { observer } from "mobx-react"

@observer
export default class TodoList extends React.Component {

  Store = this.props.store;


  render() {


    return(
      <div>
        <h1>Contracts</h1>

          Create new: <input className="create" ref="createNewInput"  />
        <button onClick={(e) => {this.Store.create(this.refs.createNewInput.value); this.refs.createNewInput.value = "";}}>Create</button><br /><br />
        <hr />
        <br />
        {this.props.store.collections.length}
        {JSON.stringify(this.Store.collections)}
        <hr />
        <br />
        Create new: <input className="create" ref="createItem"  />
      <button onClick={(e) => {this.Store.collections[0].create(this.refs.createItem.value); this.refs.createItem.value = "";}}>Create</button><br /><br />
      </div>);

  }
}
