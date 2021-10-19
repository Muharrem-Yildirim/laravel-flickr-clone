import React from "react";
import store from "../store";

export default function useCategoryHook(friendID) {
    const [selectedCategory, setSelectedCategory] = React.useState(0);

    React.useEffect(() => {
        store.dispatch({
            type: "SELECTED_CATEGORY",
            payload: {
                selectedCategory: selectedCategory,
            },
        });
    }, [selectedCategory]);

    return [selectedCategory, setSelectedCategory];
}
