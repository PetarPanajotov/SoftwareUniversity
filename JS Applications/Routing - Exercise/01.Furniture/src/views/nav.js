import { logout } from "../api/user.js";
import { getUserData } from "../api/util.js";
const logoutBtn = document.getElementById('logoutBtn');
const guest = document.getElementById('guest');
const user = document.getElementById('user');

export function navigation() {
    if(getUserData()) {
        guest.style.display = 'none';
        user.style.display = 'inline-block';
    } else {
        guest.style.display = 'inline-block';
        user.style.display = 'none';
    }
}
logoutBtn.addEventListener('click', onLogout);

async function onLogout() {
    await logout();
    navigation();
}
