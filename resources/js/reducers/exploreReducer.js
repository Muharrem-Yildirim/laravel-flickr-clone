export default function exploreReducer(
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
