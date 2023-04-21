import { PUT, POST, DEL, GET } from "./api.js"

const endPoints = {
    dashboard: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums',
    details: '/data/albums/',
    likes: '/data/likes'
}

export async function getDashboard() {
    return GET(endPoints.dashboard);
}
export async function postNewAlbum(body) {
    return POST(endPoints.create, body);
}
export async function getDetails(id) {
    return GET(endPoints.details + id);
}
export async function putEditAlbum(id, body) {
    return PUT(endPoints.details + id, body);
}
export async function delAlbum(id) {
    return DEL(endPoints.details + id);
}
export async function postLike(albumId) {
    return POST(endPoints.likes, albumId);
}
export async function getLikes(albumId) {
    return GET(endPoints.likes + `?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count)`);
}
export async function getAlreadyLiked(albumId, userId) {
    return GET(endPoints.likes + `?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}