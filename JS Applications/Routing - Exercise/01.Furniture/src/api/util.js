export function getUserData() {
    const data = JSON.parse(sessionStorage.getItem('userData'))
    return data;
}
export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}
export function clearUserData() {
    sessionStorage.removeItem('userData');
}
// export function invalidClassList(node) {
//     node.classList.add('is-invalid');
//     node.classList.remove('is-valid')
// }
// export function validClassList(node) {
//     node.classList.add('is-valid')
//     node.classList.remove('is-invalid')
// }