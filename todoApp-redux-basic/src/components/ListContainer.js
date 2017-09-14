import React, { Component } from "react";
import AddItem from "./AddItem";
import List from "./List";
import todoStore from "../stores/todoStore";
import todoActions from "../actions/todoActions";

export default class ListContainer extends Component {
  state = {
    list: todoStore.getState()
  };

  componentDidMount = () => {
    todoStore.subscribe(this._onChange);
  };

  componentWillUnmount = () => {
    todoStore.unsubscribe(this._onChange);
  };

  handleAddItem = newItem => {
    todoStore.dispatch(todoActions.addItem(newItem));
  };

  handleRemoveItem = index => {
    todoStore.dispatch(todoActions.removeItem(index));
  };

  getOwnState() {
    return {
      list: todoStore.getState()
    };
  }

  _onChange = () => {
    this.setState(this.getOwnState());
  };

  render = () => {
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem} />
          <List items={this.state.list} remove={this.handleRemoveItem} />
        </div>
      </div>
    );
  };
}
