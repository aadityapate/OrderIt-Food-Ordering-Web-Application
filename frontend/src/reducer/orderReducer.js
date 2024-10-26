import { 
    CLEAR_ERRORS,
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    MY_ORDER_FAILURE,
    MY_ORDER_SUCCESS,
    MY_ORDER_REQUEST,
    ORDER_DETAILS_FAILURE,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstant";

const initialState = {
    loading: false,
    error: null,
    order: null,
};

export const newOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };
            
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload,
            };

        case CREATE_ORDER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;    
    }
};

export const myOrderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case MY_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case MY_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        
        case MY_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        
        default:
            return state;
    }
};

// Order Details

export const orderDetailsReducer = (state = { order: {} }, action ) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.payload,
            };

        case ORDER_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
            
        default:
            return state;
    }
};