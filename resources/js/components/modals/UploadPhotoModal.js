import { Dialog, DialogTitle } from "@mui/material";
import { DropzoneDialog } from "material-ui-dropzone";
import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";

export default function UploadPhotoModal() {
    const dispatch = useDispatch();

    const onClickClose = () => {
        dispatch(closeModal("UPLOAD_PHOTO"));
    };

    return (
        <DropzoneDialog
            open={"true"}
            maxFileSize={5000000}
            filesLimit={3}
            acceptedFiles={["image/*"]}
            onClose={() => onClickClose()}
            onSave={(files) => {
                console.log("Files:", files);
                setOpen(false);
            }}
            showPreviews={true}
        ></DropzoneDialog>
    );
    // return (
    //     <div>
    //         UploadPhotoModal <button onClick={onClickClose}>close</button>
    //     </div>
    // );
}
