import React from "react";
import { getRndNumber } from "../utils";

export default function DailyPhotoItem({ img }) {
    return (
        <img
            src={img.url + "?v=" + img.id}
            className="animate__animated animate__fadeIn"
            style={{
                width: "100%",
                animationDelay: getRndNumber(0.1, 0.4) + "s",
            }}
        ></img>
    );
}
