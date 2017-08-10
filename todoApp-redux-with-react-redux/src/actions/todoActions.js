import { actionConstants } from '../AppConstants';

var todoActions = {
  addItem: function(item){
    return {
      type: actionConstants.ADD_ITEM,
      data: item
    };
  },
  removeItem: function(index){
    return {
      type: actionConstants.REMOVE_ITEM,
      data: index
    };
  }
}

export default todoActions
