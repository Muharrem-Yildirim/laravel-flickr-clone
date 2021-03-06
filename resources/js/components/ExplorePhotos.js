import React from "react";
import { Typography, CircularProgress } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import "animate.css";
import axiosHelper from "../axiosHelper";
import CategorySelector from "./CategorySelector";
import { connect } from "react-redux";
import MasonryPhotoItem from "./MasonryPhotoItem";

const Layout = ({
    isLoaded,
    images,
    fetchImages,
    onLoaded,
    onUnLoaded,
    loadedImagesCount,
}) => {
    return !isLoaded ? (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 60,
                marginBottom: 60,
            }}
        >
            <CircularProgress style={{ color: "green" }} />
        </div>
    ) : (
        <Masonry columns={6} spacing={1} style={{ overflow: "hidden" }}>
            {images.map((img, idx) => (
                <MasonryPhotoItem
                    key={img.id}
                    img={img}
                    onLoaded={onLoaded}
                    onUnLoaded={onUnLoaded}
                />
            ))}
        </Masonry>
    );
};

class ExplorePhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            isLoaded: false,
            loadedImagesCount: 0,
        };
    }

    fetchImages = () => {
        this.setState(
            (prevState) => {
                return {
                    ...prevState,
                    isLoaded: false,
                    images: [],
                    loadedImagesCount: 0,
                };
            },
            () => {
                axiosHelper
                    .get(
                        "/api/explore" +
                            (this.props.selectedCategory === null
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
    };

    componentDidMount() {
        this.fetchImages();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.selectedCategory !== nextProps.selectedCategory) {
            this.fetchImages();
        }

        return true;
    }

    onLoaded = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                loadedImagesCount: prevState.loadedImagesCount + 1,
            };
        });
    };

    onUnLoaded = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                loadedImagesCount: prevState.loadedImagesCount - 1,
            };
        });
    };

    render() {
        return (
            <>
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
                    <CategorySelector
                        isLoaded={this.state.isLoaded}
                        fetchImages={this.fetchImages}
                    />
                </div>
                <Layout
                    {...this.state}
                    fetchImages={this.fetchImages}
                    onLoaded={this.onLoaded}
                    onUnLoaded={this.onUnLoaded}
                />
            </>
        );
    }
}

const mapDispatchToProps = (state) => {
    return { selectedCategory: state.exploreReducer.selectedCategory };
};

export default connect(mapDispatchToProps)(ExplorePhotos);
