import products from './products.json'

export const initialState = {
    basket: [],
    products: products
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
            console.log(state.basket);
            console.log(action.cartId);
            return {
                ...state,
                basket: state.basket.filter(item => item.cartId !== action.cartId),
            };
        default:
            return state;
    }
}

export default reducer;