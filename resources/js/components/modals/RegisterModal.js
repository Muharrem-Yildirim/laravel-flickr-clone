import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    FormGroup,
    Box,
} from "@mui/material";

import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { setAuthenticated } from "../../actions/authActions";
import CloseButton from "./CloseButton";
import { useSnackbar } from "notistack";

export default function RegisterModal() {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const close = () => {
        dispatch(closeModal("REGISTER"));
    };

    const initialState = {
        name: "",
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

    const register = () => {
        axios.get("/sanctum/csrf-cookie").then(() => {
            axios
                .post("/api/register", {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                })
                .then(({ data }) => {
                    dispatch(setAuthenticated(true, data));
                    close();
                })
                .catch((err) => {
                    dispatch(setAuthenticated(false));
                    enqueueSnackbar(
                        err.response?.data?.message || "Unknown error occured.",
                        {
                            variant: "error",
                        }
                    );
                });
        });
    };

    return (
        <Dialog open={true} fullWidth maxWidth="xs" onClose={close}>
            <DialogTitle>
                Register <CloseButton handleClose={close} />
            </DialogTitle>
            <DialogContent>
                <FormGroup size="small" sx={{ mt: 2 }}>
                    <TextField
                        id="name"
                        size="small"
                        color="primary"
                        type="name"
                        name="name"
                        variant="filled"
                        onChange={handleChange}
                        label="Name"
                    ></TextField>
                </FormGroup>
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
                        onClick={register}
                        variant="contained"
                    >
                        Register
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
