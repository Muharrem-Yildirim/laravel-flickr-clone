import React from "react";
import MasonryItem from "@mui/lab/MasonryItem";
import { convertPhotoUrl } from "../utils";

export default function DailyPhotoItem({ img, onLoaded, onUnLoaded }) {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [url, setUrl] = React.useState("");

    React.useEffect(() => {
        const link = convertPhotoUrl(img.url + "?v=" + Math.random() * 1337),
            image = new Image();

        setUrl(link);

        image.onload = () => {
            setIsLoaded(true);

            onLoaded(img);
        };

        image.src = link;

        return () => {
            onUnLoaded(img);
        };
    }, []);

    // return (
    //     <MasonryItem key={img.id}>
    //         <img
    //             src={url}
    //             style={{ opacity: 0 }}
    //             className={isLoaded ? "animate__animated animate__fadeIn" : ""}
    //         />
    //     </MasonryItem>
    // );

    return (
        <MasonryItem key={img.id}>
            <img
                src={url}
                style={{ opacity: 0 }}
                className={isLoaded ? "animate__animated animate__fadeIn" : ""}
            />
        </MasonryItem>
    );
}
