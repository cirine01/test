export const ErrorCatcher = error => {
    if (error.status === 498 || error.status === 401) {
        console.warn("Error detected. Token is invalid, logout incoming.");
        if (window.setOpenTokenError) {
            window.setOpenTokenError(true);
        }
    }
};