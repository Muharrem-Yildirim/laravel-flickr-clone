import {
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    FormGroup,
    Box,
} from "@mui/material";
import axios from "../../axios";
import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { setAuthenticated } from "../../actions/authActions";
import CloseButton from "./CloseButton";

export default function LoginModal() {
    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeModal("LOGIN"));
    };

    const initialState = {
        email: "",
        password: "",

        waitingForCallback: false,
        callbackMessage: "",
    };

    const [values, setValues] = React.useState(initialState);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]:
                event.target.type.toLowerCase() === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        });
    };

    const login = () => {
        axios.get("/sanctum/csrf-cookie").then(() => {
            axios
                .post("/api/login", {
                    email: values.email,
                    password: values.password,
                })
                .then(({ data }) => {
                    dispatch(setAuthenticated(true, data));
                    close();
                })
                .catch((err) => {
                    dispatch(setAuthenticated(false));
                    alert("Wrong username or password");
                });
        });
    };

    return (
        <Dialog open={true} fullWidth maxWidth="xs" onClose={close}>
            <DialogTitle>
                Login <CloseButton handleClose={close} />
            </DialogTitle>
            <DialogContent>
                <FormGroup size="small" sx={{ mt: 2 }}>
                    <TextField
                        id="email"
                        size="small"
                        color="primary"
                        type="email"
                        name="email"
                        variant="filled"
                        onChange={handleChange}
                        label="E-mail"
                    ></TextField>
                </FormGroup>
                <FormGroup size="small" sx={{ mt: 2 }}>
                    <TextField
                        id="password"
                        size="small"
                        color="primary"
                        name="password"
                        onChange={handleChange}
                        type="password"
                        variant="filled"
                        label="Password"
                    ></TextField>
                </FormGroup>

                <Box display="flex" justifyContent="center">
                    <Button sx={{ mt: 3 }} variant="contained" onClick={login}>
                        Login
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
