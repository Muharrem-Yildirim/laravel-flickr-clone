import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modalActions";

export default function UploadPhotoModal() {
    const dispatch = useDispatch();

    const close = () => {
        dispatch(closeModal("TEST_MODAL"));
    };

    return (
        <div>
            TestModal <button onClick={close}>close</button>
        </div>
    );
}
