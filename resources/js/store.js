import React from "react";
import { createStore } from "redux";

function store(
    state = {
        selectedCategory: 0,
    },
    action
) {
    switch (action.type) {
        case "SELECTED_CATEGORY":
            return {
                ...state,
                selectedCategory: action.payload.selectedCategory,
            };
        default:
            return state;
    }
}

export default createStore(store);
