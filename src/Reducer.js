import products from './products.json'

export const initialState = {
    basket: [],
    products: products,
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((sum, item) => sum + item.price, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.cartId !== action.cartId),
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

export default reducer;