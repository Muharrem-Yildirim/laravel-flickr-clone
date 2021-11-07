import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../actions/modalActions";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { setAuthenticated } from "../actions/authActions";

import {
    InputAdornment,
    TextField,
    Typography,
    IconButton,
    Toolbar,
    Grid,
    Box,
    AppBar,
    Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import UploadIcon from "@mui/icons-material/Upload";

import styled from "styled-components";

const WhiteBorderTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
        {
            // borderColor: "white",
        },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]:
        {
            borderColor: "white",
        },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
        {
            borderColor: "white",
        },
    [`& .${outlinedInputClasses.input}`]: {
        color: "white",
    },
    [`&:hover .${outlinedInputClasses.input}`]: {
        color: "white",
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
        {
            color: "white",
        },
    [`& .${inputLabelClasses.outlined}`]: {
        color: "white",
    },
    [`&:hover .${inputLabelClasses.outlined}`]: {
        color: "white",
    },
    [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
        color: "white",
    },
});

const Logo = () => (
    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Typography
            variant="h6"
            component="div"
            style={{
                fontWeight: "bold",
                marginRight: 25,
            }}
            className="font-montserrat"
        >
            flickr
        </Typography>
    </Link>
);

export default function Navbar() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
    const user = useSelector((state) => state.authReducer.user);

    const logout = () => {
        dispatch(setAuthenticated(false));

        axios.get("/sanctum/csrf-cookie").then(() => {
            axios
                .get("/api/logout")
                // .then(() => dispatch(setAuthenticated(false)))
                .catch((err) => console.log({ err }));
        });
    };

    return (
        <AppBar position="static" color="success">
            <Toolbar>
                <Grid
                    item
                    xs={8}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    <Logo />

                    <Box sx={{ flexGrow: 1 }} />
                    {/* 
                    <WhiteBorderTextField
                        value={""}
                        size="small"
                        style={{ borderColor: "white" }}
                        variant="outlined"
                        disabled={true}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        label="Search"
                    /> */}

                    <Box sx={{ flexGrow: 1 }} />

                    {isLoggedIn ? (
                        <>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() =>
                                    dispatch(openModal("UPLOAD_PHOTO"))
                                }
                            >
                                <UploadIcon />
                            </IconButton>
                            <Typography
                                sx={{ ml: 1, mr: 2 }}
                                className="font-montserrat"
                                variant="body2"
                            >
                                Welcome, {user?.user?.name || "-"}
                            </Typography>
                            <Button
                                color="inherit"
                                sx={{ mr: 1 }}
                                onClick={logout}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                color="inherit"
                                sx={{ mr: 1 }}
                                onClick={() => dispatch(openModal("LOGIN"))}
                            >
                                Login
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => dispatch(openModal("REGISTER"))}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
