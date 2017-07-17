import _ from 'lodash';
import { FETCH_POSTS } from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\actions';

export default function(state = {}, action){
  console.log("Inside reducer posts");
  switch (action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;

  }
}