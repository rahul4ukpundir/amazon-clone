
export const filterInitialState = {
    sort: '', // if true then decending
    byStock: false,
    fastdevelivery: false,
    byRating: 0,
    searchQuery: ''
}


export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sort: action.payload
            }
        case 'FILTER_BY_STOCK':
            return {
                ...state,
                byStock: !state.byStock
            }
        case 'FILTER_BY_Delivery':
            return {
                ...state,
                fastdevelivery: !state.fastdevelivery
            }
        case 'FILTER_BY_RATING':
            return {
                ...state,
                byRating: action.payload
            }
        case 'FILTER_BY_SEARCH':
            return {
                ...state,
                searchQuery: action.payload
            }
        case 'CLEAR_FILTER':
            return {
                sort: false, // if true then decending
                byStock: false,
                fastdevelivery: false,
                byRating: 0,
                searchQuery: ''
            }
        default:
            return state;
    }
}