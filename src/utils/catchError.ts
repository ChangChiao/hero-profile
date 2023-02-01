export const catchError = (fn: Function) => {
    try {
        fn();
    } catch (error) {
        console.error(error);
    }
}