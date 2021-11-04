import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";

export default function UploadPhotoModal() {
    const dispatch = useDispatch();

    const onClickClose = () => {
        dispatch(closeModal("TEST_MODAL"));
    };

    return (
        <div>
            TestModal <button onClick={onClickClose}>close</button>
        </div>
    );
}
