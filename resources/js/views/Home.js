import React from "react";
import { Grid } from "@mui/material";
import ExplorePhotos from "../components/ExplorePhotos";

export default function Home() {
    return (
        <Grid
            container
            spacing={5}
            justifyContent={"center"}
            style={{ marginTop: 10 }}
        >
            <Grid item xs={8}>
                <ExplorePhotos />
            </Grid>
        </Grid>
    );
}
