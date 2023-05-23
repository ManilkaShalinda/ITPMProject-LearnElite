import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
	adminLoginReducer, adminRegisterReducer,
} from "./reducers/userReducers";
import { categoryListReducer,categoryCreateReducer,productDeleteReducer,productUpdateReducer } from "./reducers/categoryReducers";


//create your states here
const reducer = combineReducers({
	admin_Login: adminLoginReducer,
	adminRegistar: adminRegisterReducer,
	categoryList : categoryListReducer,
	categoryCreate: categoryCreateReducer,
	categoryUpdate : productUpdateReducer,
     categoryDelete : productDeleteReducer,
});

const adminInfoFromStorage = localStorage.getItem("adminInfo") ? JSON.parse(localStorage.getItem("adminInfo")) : null;



const initialState = {
	admin_Login: { adminInfo: adminInfoFromStorage },
	
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;