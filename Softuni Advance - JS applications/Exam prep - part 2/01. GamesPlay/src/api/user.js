import { PUT, POST, DEL, GET } from "./api.js"
import { clearUserData, setUserData } from "./util.js";

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout' : '/users/logout'
}


export async function login(body) {
    const data = await POST(endpoints['login'], body);
    setUserData(data);
}
export async function logout() {
    await GET(endpoints['logout']);
    clearUserData();
}
export async function register(body) {
    const data = await POST(endpoints['register'], body);
    setUserData(data);
}