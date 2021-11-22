import { IS_LOADING, LOGIN_SUCCESS, USER_LIST, IS_LOGOUT } from "./types";

const initialState = {
    isLoading: false,
    isLogin: false,
    userData: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                userData: action.payload,
                isLogin: true
            }
        }

        case IS_LOGOUT: {
            return {
                ...state,
                userData: {},
                isLogin: false
            }
        }

        default:
            return initialState;
    }
}

export default userReducer;