import { products } from "../product"
export const initialState = {
    products: null,
    carts: [],
}

const productReducer = (state, action) =>{
    switch(action.type){
        case 'GET_ALLPRODUCT':
            return{
                ...state,
                products: action.products

            }
        case 'ADD_TO_CART':
            return{
                ...state,
                carts: [...state.carts, {...action.payload, qty: 1}]
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                carts: state.carts.filter((c)=> c.id !== action.payload.id)
            }
            case 'ADD_NEW_QUANTITY':
                return{
                    ...state,
                    carts: state.carts.filter((c)=> c.id === action.payload.id ? c.qty = action.payload.qty : c.qty)
                }
        default:  return state;

    }
}

export default productReducer;