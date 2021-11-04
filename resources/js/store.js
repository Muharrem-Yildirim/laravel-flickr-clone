import React from "react";
import { createStore } from "redux";

function store(
    state = {
        selectedCategory: 0,
        activeModals: [
            // "UPLOAD_PHOTO",
            // "TEST_MODAL",
        ],
    },
    action
) {
    switch (action.type) {
        case "SELECTED_CATEGORY":
            return {
                ...state,
                selectedCategory: action.payload.selectedCategory,
            };
        case "OPEN_MODAL": {
            const modalKey = action.payload.modalKey;

            if (!state.activeModals.includes(modalKey))
                return {
                    ...state,
                    activeModals: [...state.activeModals, modalKey],
                };
            else
                return {
                    ...state,
                    activeModals: state.activeModals,
                };
        }

        case "CLOSE_MODAL": {
            const modalKey = action.payload.modalKey;

            const tempState = [...state.activeModals];

            const modalIdx = tempState.findIndex((val) => val === modalKey);

            if (modalIdx !== -1) {
                tempState.splice(modalIdx, 1);

                return {
                    ...state,
                    activeModals: tempState,
                };
            }
        }

        default:
            return state;
    }
}

export default createStore(store);
