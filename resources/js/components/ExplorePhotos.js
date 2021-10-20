import React from "react";
import { Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import MasonryItem from "@mui/lab/MasonryItem";
import "animate.css";
import axios from "../axios";
import CategorySelector from "./CategorySelector";
import { connect } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import DailyPhotoItem from "./ExplorePhotoItem";
import InfiniteScroll from "react-infinite-scroll-component";

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
                <DailyPhotoItem
                    key={img.id}
                    img={img}
                    onLoaded={onLoaded}
                    onUnLoaded={onUnLoaded}
                />
            ))}
        </Masonry>
    );
};

class DailyPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            isLoaded: false,
            loadedImagesCount: 0,
        };
    }

    fetchImages() {
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
                axios
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
    return { selectedCategory: state.selectedCategory };
};

export default connect(mapDispatchToProps)(DailyPhotos);
