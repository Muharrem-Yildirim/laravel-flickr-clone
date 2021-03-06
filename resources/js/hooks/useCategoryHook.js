import React from "react";
import store from "../store";

export default function useCategoryHook() {
    const [selectedCategory, setSelectedCategory] = React.useState(null);

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
