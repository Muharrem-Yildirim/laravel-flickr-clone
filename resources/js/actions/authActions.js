export const setAuthenticated = (isLoggedIn, user) => ({
    type: "SET_AUTHENTICATED",
    payload: { isLoggedIn, user },
});
