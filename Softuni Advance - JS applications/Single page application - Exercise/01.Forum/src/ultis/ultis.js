export function createElements(type, text, className, idEl) {
    let result = document.createElement(type);
    result.textContent = text;
    if (className) {
        result.classList = className;
    }
    if(idEl) {
        result.setAttribute('id', idEl);
    }
    return result;
}