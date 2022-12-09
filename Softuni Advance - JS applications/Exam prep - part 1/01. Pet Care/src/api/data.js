import { PUT, POST, DEL, GET } from "./api.js"

const endPoints = {
    dashboard: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/pets',
    details: '/data/pets/',
    donation : '/data/donation',
}
export async function getDashBoardPets() {
    return await GET(endPoints.dashboard);
}
export async function postCreatePet(data) {
    return await POST(endPoints.create, data);
}
export async function getPetDetails(id) {
    return await GET(endPoints.details + id);
}
export async function deletePet(id) {
    return await DEL(endPoints.details + id);
}
export async function putPet(id, data) {
    return await PUT(endPoints.details + id, data);
}
export async function getDonation(petId) {
    return await GET(endPoints.donation + `?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}
export async function postDonation(petId) {
    return await POST(endPoints.donation, petId);
}
export async function getIfUserDonated(petId, userId) {
    return await GET(endPoints.donation + `?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}
