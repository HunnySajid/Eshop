import {
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    cart_items
} from './constants';

const initialState = {
    cartItems: localStorage.getItem(cart_items) ? JSON.parse(localStorage.getItem(cart_items)) : []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CART_ITEM: {
            const { item } = action;
            const existItem = state.cartItems.find(i => i._id === item._id);
            let newState = state;
            if (existItem)
                newState = {
                    ...state,
                    // if item already exists in cart then 
                    // replace it with new object that contains updated quantity
                    cartItems: state.cartItems.map(it => it._id === existItem._id ? item : it)
                };
            else
                newState = {
                    ...state,
                    cartItems: [...state.cartItems, action.item]
                };

            localStorage.setItem(cart_items, JSON.stringify(newState.cartItems));
            return newState;
        }
        case REMOVE_CART_ITEM: {
            const { itemId } = action
            const newState = {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== itemId)
            };
            localStorage.setItem(cart_items, JSON.stringify(newState.cartItems));
            return newState;
        }
        default:
            return state;
    }
}
