import { combineReducers } from 'redux';
import products from '../screens/Home/store/reducer';
import product from '../screens/Product/store/reducer';
import cart from '../screens/Cart/store/reducer';

const appReducer = combineReducers({
    products,
    product,
    cart
});

const rootReducer = (state, action) => {
    const { type } = action;
    if (type === 'LOGOUT_REQUESTED') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
