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

export default function Navbar() {
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
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        style={{
                            fontWeight: "bold",
                        }}
                        className="font-montserrat"
                    >
                        Flickr
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
