import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

//create a rootReducer using a predefined function: combineReducers
//destructuring with our reducer (1 reducer)
//after exporting our reducer= TodoReducer --> import it in CombineReducers
const rootReducer= combineReducers ({TodoReducer}
    
    );

export default rootReducer;