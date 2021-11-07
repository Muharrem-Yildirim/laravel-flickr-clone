const intialState = {
    isLoggedIn: false,
    user: null,
};

export default function authReducer(state = intialState, action) {
    switch (action.type) {
        case "SET_AUTHENTICATED":
            if (action.payload.isLoggedIn) {
                return {
                    ...state,
                    isLoggedIn: true,
                    user: action.payload.user,
                };
            } else {
                return {
                    ...state,
                    isLoggedIn: false,
                    user: null,
                };
            }

        default:
            return state;
    }
}
