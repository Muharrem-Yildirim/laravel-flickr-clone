import React from "react";
import { useSelector } from "react-redux";
import UploadPhotoModal from "./UploadPhotoModal";
import LoginModal from "./LoginModal";
import TestModal from "./TestModal";

export const MODALS = {
    UPLOAD_PHOTO: UploadPhotoModal,
    TEST_MODAL: TestModal,
    LOGIN: LoginModal,
    // REGISTER: RegisterModal,
};

export default function ModalRoot() {
    const activeModals = useSelector(
        (state) => state.modalReducer.activeModals
    );

    if (activeModals.length === 0) return <></>;

    return activeModals.map((el, idx) => {
        return React.createElement(MODALS[el], { key: idx });
    });
}
