import { PUT, POST, DEL, GET } from "./api.js"

const endPoints = {
    allGames: '/data/games?sortBy=_createdOn%20desc',
    createGame: '/data/games',
    lastestGame: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    details: '/data/games/',
}
export async function getAllGames() {
    return GET(endPoints.allGames);
}
export async function postNewGame(body) {
    return POST(endPoints.createGame, body)
}
export async function getLatestGame() {
    return GET(endPoints.lastestGame)
}
export async function getDetails(id) {
    return GET(endPoints.details + id)
}
export async function delGame(id) {
    return DEL(endPoints.details + id)
}
export async function putEditGame(id, body) {
    return PUT(endPoints.details + id, body)
}
