import {
    legacy_createStore as createStore, 
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";
import { cartReducer } from "./reducer/cartReducer";
import { 
    authReducer, 
    forgotPasswordReducer, 
    userReducer 
} from "./reducer/userReducer";
import { 
    myOrderReducer, 
    newOrderReducer, 
    orderDetailsReducer, 
} from "./reducer/orderReducer";
// import { myOrders } from "./actions/orderAction";
// import orderDetails from "./components/order/OrderDetails";

const reducer = combineReducers({
    restaurants: restaurantReducer,   
    menus: menuReducer,
    auth: authReducer,
    user:userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrderReducer,
    orderDetails: orderDetailsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;