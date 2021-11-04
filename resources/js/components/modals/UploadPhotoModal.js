import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";

export default function UploadPhotoModal() {
    const dispatch = useDispatch();

    const onClickClose = () => {
        dispatch(closeModal("UPLOAD_PHOTO"));
    };

    return (
        <div>
            UploadPhotoModal <button onClick={onClickClose}>close</button>
        </div>
    );
}
