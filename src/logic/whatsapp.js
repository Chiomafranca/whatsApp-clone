export const getTime = () => {
    return new Date().toLocaleString("en-NG", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }).toLowerCase();
}
