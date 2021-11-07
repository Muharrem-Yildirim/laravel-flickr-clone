import {
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    FormGroup,
    Box,
} from "@mui/material";
import axiosHelper from "../../axiosHelper";
import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { setAuthenticated } from "../../actions/authActions";
import CloseButton from "./CloseButton";
import { useSnackbar } from "notistack";

export default function LoginModal() {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const close = () => {
        dispatch(closeModal("LOGIN"));
    };

    const initialState = {
        email: "",
        password: "",

        waitingForCallback: false,
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
        setValues((state) => {
            return { ...state, waitingForCallback: true };
        });

        axiosHelper.get("/sanctum/csrf-cookie").then(() => {
            axiosHelper
                .post("/api/login", {
                    email: values.email,
                    password: values.password,
                })
                .then(({ data }) => {
                    dispatch(setAuthenticated(true, data));
                    close();

                    setValues((state) => {
                        return { ...state, waitingForCallback: false };
                    });
                })
                .catch((err) => {
                    dispatch(setAuthenticated(false));
                    enqueueSnackbar(
                        err.response?.data?.message || "Unknown error occured.",
                        {
                            variant: "error",
                        }
                    );

                    setValues((state) => {
                        return { ...state, waitingForCallback: false };
                    });
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
                    <Button
                        sx={{ mt: 3 }}
                        variant="contained"
                        onClick={login}
                        disabled={values.waitingForCallback}
                    >
                        Login
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
