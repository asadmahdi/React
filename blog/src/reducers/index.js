import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\reducers\\reducer_posts';


const rootReducer = combineReducers({

  posts:PostsReducer,
  form: formReducer

});

export default rootReducer;
