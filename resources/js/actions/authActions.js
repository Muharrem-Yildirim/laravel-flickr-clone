import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import axios from "../axios";

export const setAuthenticated = (isLoggedIn, user) => {
    localStorage.setItem("isLoggedIn", isLoggedIn);

    if (isLoggedIn == true) {
        localStorage.setItem("user", JSON.stringify(user));

        axios.defaults.headers.Authorization = "Bearer " + user.token;
    } else localStorage.removeItem("user");

    return {
        type: "SET_AUTHENTICATED",
        payload: { isLoggedIn, user },
    };
};
