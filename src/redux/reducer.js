let initialState = JSON.parse(localStorage.getItem('users')) || []

const userReducer = (state = initialState, action) => {
    if(action.type === 'ADD_USER'){
        let users = [...state, action.payload]
        localStorage.setItem('users', JSON.stringify(users))
        return users
    } else if ( action.type === 'DELETE_USER'){
        let users = state.filter(item => item.id != action.payload)
        localStorage.setItem('users', JSON.stringify(users))
        return users
    } else if ( action.type === 'UPDATE_USER') {
        let users = state.map(item => item.id === action.payload.id ? action.payload : item)
        localStorage.setItem('users', JSON.stringify(users))
        return users
    }
    return state
}

export default userReducer;