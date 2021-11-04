const intialState = {
    selectedCategory: 0,
};

export default function exploreReducer(state = intialState, action) {
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
