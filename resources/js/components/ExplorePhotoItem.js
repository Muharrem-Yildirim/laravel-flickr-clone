import React from "react";
import MasonryItem from "@mui/lab/MasonryItem";

export default function DailyPhotoItem({ img }) {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [url, setUrl] = React.useState("");

    React.useEffect(() => {
        let image = new Image();

        const link = img.url + "?v=" + Math.random() * 1337; // for testing

        setUrl(link);

        image.onload = () => {
            setTimeout(() => {
                setIsLoaded(true);
            }, 200);
            console.log("loaded");
        };

        image.src = link;
    }, []);

    return (
        <MasonryItem key={img.id}>
            <img
                src={url}
                style={{ opacity: 0 }}
                className={isLoaded ? "animate__animated animate__fadeIn" : ""}
            />
        </MasonryItem>
    );

    // return isLoaded ? (
    //     <img
    //         src={img.url}
    //         className="animate__animated animate__fadeIn"
    //         style={{
    //             width: "100%",

    //             animationDelay: getRndNumber(0.1, 0.4) + "s",
    //         }}
    //     ></img>
    // ) : (
    //     <div />
    // );
}
