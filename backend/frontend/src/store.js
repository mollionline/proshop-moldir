import { createStore, combineReducers, applyMiddleware } from "redux";
import thunck from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducers,
  productDetailsReducers,
  productDeletesReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { 
  userLoginReducers, 
  userRegisterReducers, 
  userDetailsReducers, userUpdateProfileReducer, 
  userListProfileReducer, userDeleteReducer,
  userUpdateReducer 
} from "./reducers/userReducers";
import { 
  orderCreateReducer, orderDetailsReducer, 
  orderPayReducer, orderlistMyReducer,
  orderListReducer, orderDeliverReducer 
} from './reducers/orderReducers'

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducers,
  productDelete: productDeletesReducer,
  productCreate: productCreateReducer,
  productUpdate:productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  
  cart: cartReducer,

  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userDetails: userDetailsReducers,
  userUpdateProfile: userUpdateProfileReducer,
  userDelete: userDeleteReducer,
  userList: userListProfileReducer,
  userUpdate: userUpdateReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy:orderlistMyReducer,
  orderList:orderListReducer,
  orderDeliver: orderDeliverReducer,


});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: { cartItems: cartItemsFromStorage, 
  shippingAddress: shippingAddressFromStorage,
  },
  userLogin: {userInfo: userInfoFromStorage},
};

const middleware = [thunck];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
