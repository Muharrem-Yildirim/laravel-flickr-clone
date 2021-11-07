import React from "react";
import { Grid } from "@mui/material";
import ExplorePhotos from "../components/ExplorePhotos";
import YourPhotos from "../components/YourPhotos";
import { useSelector } from "react-redux";

export default function Home() {
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

    return (
        <Grid
            container
            spacing={5}
            justifyContent={"center"}
            style={{ marginTop: 10 }}
        >
            <Grid item xs={8}>
                <ExplorePhotos />
                {isLoggedIn && <YourPhotos />}
            </Grid>
        </Grid>
    );
}
