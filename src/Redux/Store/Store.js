import {createStore} from 'redux'; 
import rootReducer from '../Reducers';

//create an empty store
//import of Redux devtools from a github profile 
const store = createStore (rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );


export default store;