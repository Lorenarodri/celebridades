import { Login } from "../auth/Login";

const inicialState = {
    isAuthenticated: false,
    user: null,
};

//Los reducer siempre recibe, un estado inicial y una acción
const authReducer = (state = inicialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };

        default:
            return state;
    }
}

export default authReducer;