import React from "react";
import ReactDOM from "react-dom";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import "animate.css";
import axios from "../axios";
import CategorySelector from "./CategorySelector";
import { connect } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import DailyPhotoItem from "./DailyPhotoItem";
import "../../sass/app.scss";

const Layout = ({ isLoaded, images }) => {
    return isLoaded == false ? (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 60,
            }}
        >
            <CircularProgress style={{ color: "green" }} />
        </div>
    ) : (
        <>
            <Masonry columns={6} spacing={1}>
                {images.map((img, idx) => (
                    <MasonryItem key={img.id}>
                        <DailyPhotoItem img={img} />
                    </MasonryItem>
                ))}
            </Masonry>
        </>
    );
};

class DailyPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            isLoaded: false,
        };
    }

    fetchImages() {
        this.setState(
            (prevState) => {
                return {
                    ...prevState,
                    isLoaded: false,
                    images: [],
                };
            },
            () => {
                axios
                    .get(
                        "/api/daily-photos" +
                            (this.props.selectedCategory === 0
                                ? ""
                                : "/" + this.props.selectedCategory)
                    )
                    .then(({ data }) => {
                        this.setState((prevState) => {
                            return {
                                ...prevState,
                                images: data,
                                isLoaded: true,
                            };
                        });
                    });
            }
        );
    }

    componentDidMount() {
        this.fetchImages();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.selectedCategory !== nextProps.selectedCategory) {
            this.fetchImages();
        }

        return true;
    }

    render() {
        return (
            <>
                {/* <Typography>Daily Photos</Typography> */}
                <Typography
                    variant="p"
                    className="font-montserrat"
                    fontSize={20}
                >
                    Explore
                </Typography>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 20,
                    }}
                >
                    <CategorySelector isLoaded={this.state.isLoaded} />
                </div>
                {Layout(this.state)}
            </>
        );
    }
}

const mapDispatchToProps = (state) => {
    return { selectedCategory: state.selectedCategory };
};

export default connect(mapDispatchToProps)(DailyPhotos);
