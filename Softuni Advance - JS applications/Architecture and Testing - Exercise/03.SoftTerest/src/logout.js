import { GET } from "./api/api.js";

export async function uponLogout(ctx) {
    const token = sessionStorage.getItem('accessToken');
    await GET('users/logout', '', token);
    sessionStorage.clear();
    ctx.check();
    ctx.goto('Home')
}