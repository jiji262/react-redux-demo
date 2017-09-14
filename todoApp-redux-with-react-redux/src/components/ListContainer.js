import React from "react";
import PropTypes from "prop-types";
import AddItem from "./AddItem";
import List from "./List";
import todoActions from "../actions/todoActions";
import { connect } from "react-redux";

let ListContainer = ({ list, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="col-sm-6 col-md-offset-3">
      <div className="col-sm-12">
        <h3 className="text-center"> Todo List </h3>
        <AddItem add={handleAddItem} />
        <List items={list} remove={handleRemoveItem} />
      </div>
    </div>
  );
};

ListContainer.propTypes = {
  list: PropTypes.array.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    list: state.list
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleAddItem: newItem => {
      dispatch(todoActions.addItem(newItem));
    },
    handleRemoveItem: index => {
      dispatch(todoActions.removeItem(index));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
