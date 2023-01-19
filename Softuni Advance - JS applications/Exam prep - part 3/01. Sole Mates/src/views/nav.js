import { logout } from "../api/user.js";
import { getUserData } from "../api/util.js";

const logoutBtn = document.getElementById('logoutBtn');
const guest = document.getElementsByClassName('guest')[0];
const user = document.getElementsByClassName('user')[0];
logoutBtn.addEventListener('click', onLogout);

export function navigation() {
    if(getUserData()) {
        guest.style.display = 'none';
        user.style.display = 'inline-block';
    } else {
        guest.style.display = 'inline-block';
        user.style.display = 'none';
    }
}
async function onLogout() {
    await logout();
    navigation();
}