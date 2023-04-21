import { PUT, POST, DEL, GET } from "./api.js"

const endpoints = {
    create: '/data/catalog',
    catalog: '/data/catalog',
    details: '/data/catalog/',
}
export async function onCreate(data) {
    return await POST(endpoints.create, data)
}
export async function getDashboard() {
    return await GET(endpoints.catalog)
}
export async function getDetails(id) {
    return await GET(endpoints.details + id)
}
export async function onDelete(id) {
    return await DEL(endpoints.details + id)
}
export async function getMyPublicatons(ownerId) {
    return await GET(endpoints.catalog + `?where=_ownerId%3D%22${ownerId}%22`)
}
export async function putEditDetails(id, body) {
    return await PUT(endpoints.details + id, body)
}