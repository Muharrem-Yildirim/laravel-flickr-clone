import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CloseButton({ handleClose }) {
    return (
        <IconButton
            aria-label="close"
            className="btn-dialog-close"
            onClick={handleClose}
        >
            <CloseIcon />
        </IconButton>
    );
}
