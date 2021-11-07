import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import axiosHelper from "../axiosHelper";
import cookieHelper from "../cookieHelper";

export const setAuthenticated = (isLoggedIn, user) => {
    cookieHelper.set("isLoggedIn", isLoggedIn, cookieHelper.options);
    console.log(isLoggedIn);

    if (isLoggedIn == true) {
        cookieHelper.set("user", JSON.stringify(user), cookieHelper.options);

        axiosHelper.defaults.headers.Authorization = "Bearer " + user.token;
    } else cookieHelper.remove("user");

    return {
        type: "SET_AUTHENTICATED",
        payload: { isLoggedIn, user },
    };
};
