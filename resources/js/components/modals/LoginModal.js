import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    FormGroup,
    Box,
    IconButton,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";

import CloseIcon from "@mui/icons-material/Close";

export default function RegisterModal() {
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

    return (
        <Dialog open={true} fullWidth maxWidth="xs" onClose={close}>
            <DialogTitle>
                Login{" "}
                <IconButton
                    aria-label="close"
                    className="btn-dialog-close"
                    onClick={close}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <FormGroup fullWidth size="small" sx={{ mt: 2 }}>
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
                <FormGroup fullWidth size="small" sx={{ mt: 2 }}>
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
                    <Button sx={{ mt: 3 }} variant="contained">
                        Login
                    </Button>
                </Box>
            </DialogContent>
            {/* <DialogActions>
                <Button onClick={close}>Close</Button>
            </DialogActions> */}
        </Dialog>
    );
}
