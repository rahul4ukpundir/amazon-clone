export const userInitialState  = {
    user: null
}


export const userReducer = (state, action) =>{
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.payload
            }
        default: return state;
    }

}