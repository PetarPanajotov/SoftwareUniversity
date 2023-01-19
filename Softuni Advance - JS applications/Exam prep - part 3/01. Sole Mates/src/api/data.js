import { PUT, POST, DEL, GET } from "./api.js"

const endPoints = {
    dashboard: '/data/shoes?sortBy=_createdOn%20desc',
    addPairs: '/data/shoes',
    details: '/data/shoes/',
    search: '/data/shoes'
}

export async function getDashboard() {
    return GET(endPoints.dashboard);
}
export async function postNewPairs(body) {
    return POST(endPoints.addPairs, body);
}
export async function getDetails(id) {
    return GET(endPoints.details + id);
}
export async function delPairs(id) {
    return DEL(endPoints.details + id)
}
export async function putEditPairs(id, body) {
    return PUT(endPoints.details + id, body)
}
export async function getSearch(query) {
    return GET(endPoints.details + `?where=brand%20LIKE%20%22${query}%22`)
}
