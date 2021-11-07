import Cookies from "universal-cookie";

export default new Cookies();

export const options = {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: true,
};
