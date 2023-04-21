import { logout } from "../api/user.js";
import { getUserData } from "../api/util.js";

const logoutBtn = document.getElementById('logoutBtn');
const guest = document.getElementById('guest');
const user = document.getElementById('user');
logoutBtn.addEventListener('click', onLogout);

export function navigation(ctx) {
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