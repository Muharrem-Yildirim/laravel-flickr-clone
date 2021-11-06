import { Dialog, DialogTitle } from "@mui/material";
import { DropzoneDialog } from "material-ui-dropzone";
import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";
import { useSnackbar } from "notistack";

export default function UploadPhotoModal() {
    const dispatch = useDispatch();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const close = () => {
        dispatch(closeModal("UPLOAD_PHOTO"));
    };

    return (
        <DropzoneDialog
            open={"true"}
            maxFileSize={5000000}
            filesLimit={1}
            acceptedFiles={["image/*"]}
            onClose={() => close()}
            onSave={(files) => {
                let formData = new FormData();
                files.map((fileMap) => {
                    formData.append("images[]", fileMap);
                });

                axios
                    .post("/api/photo", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((data) => {
                        enqueueSnackbar("Photo successfully uploaded.", {
                            variant: "success",
                        });
                        close();
                    })
                    .catch(function (err) {
                        enqueueSnackbar(
                            err.response?.data?.error ||
                                "Unknown error occured.",
                            {
                                variant: "error",
                            }
                        );
                    });
            }}
            showPreviews={true}
        ></DropzoneDialog>
    );
}
