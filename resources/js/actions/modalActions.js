export const closeModal = (modalKey) => ({
    type: "CLOSE_MODAL",
    payload: { modalKey },
});

export const openModal = (modalKey) => ({
    type: "OPEN_MODAL",
    payload: { modalKey },
});
