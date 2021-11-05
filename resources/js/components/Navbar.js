import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../actions/modalActions";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";

import {
    InputAdornment,
    TextField,
    Typography,
    IconButton,
    Toolbar,
    Grid,
    Box,
    AppBar,
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

    const onClickUpload = () => {
        dispatch(openModal("UPLOAD_PHOTO"));
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
                    />

                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={onClickUpload}
                    >
                        <UploadIcon />
                    </IconButton>
                    {/* <Button color="inherit">Login</Button> */}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
