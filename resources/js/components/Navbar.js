import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// import MenuIcon from "@material-ui/icons/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import UploadIcon from "@mui/icons-material/Upload";
import { useDispatch } from "react-redux";
import { openModal } from "../actions/modalActions";

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
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Logo />
                    {/* <Button color="inherit">Explore</Button> */}

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
