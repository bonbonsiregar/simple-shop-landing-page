import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants"

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(x => x.product === item.product)

            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x),
                }
            } else {
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }

            }
        case CART_REMOVE_ITEM:
        console.log('REMOVE_REDUCER', action.payload, state.cartItems)
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product.id !== action.payload.id),
            }
        default:
        return state

    }
    
}