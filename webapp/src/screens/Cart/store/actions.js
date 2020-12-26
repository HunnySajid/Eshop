import {
    ADD_CART_ITEM,
    REMOVE_CART_ITEM
} from './constants';

const addCartItem = (item) => {
    return {
        type: ADD_CART_ITEM,
        item
    }
}

const removeCartItem = (itemId) => {
    return {
        type: REMOVE_CART_ITEM,
        itemId
    }
}

export {
    addCartItem,
    removeCartItem
}