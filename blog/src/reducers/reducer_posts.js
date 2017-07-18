import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST} from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\actions';

export default function(state = {}, action){

  switch (action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_POST:
      //const post = action.payload.data;
      /*es5 code
      const new State = { ... state }; put all the stuff from state into this new object
      newState[post.id] = post;
      return newState; */

      return { ...state, [action.payload.data.id]: action.payload.data }; //key interpolation
    default:
      return state;

  }
}
