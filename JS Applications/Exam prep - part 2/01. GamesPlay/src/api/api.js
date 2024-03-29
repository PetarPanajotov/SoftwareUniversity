import { getUserData } from "./util.js";

const url = 'http://localhost:3030'
async function api(method, endPoint, body) {
    const header = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (body !== undefined) {
        header['body'] = JSON.stringify(body);
    }
    const user = getUserData();

    if (user) {
        header.headers['X-Authorization'] = user.accessToken;
    }

    try {
        const response = await fetch(url + endPoint, header);
        if (response.status == 204) {
            return response;
        }

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        
        return data;
    }
    catch (error) {
        alert(error.message);
        throw error;
    }
}

const GET = api.bind(null, 'GET');
const POST = api.bind(null, 'POST');
const DEL = api.bind(null, 'DELETE');
const PUT = api.bind(null, 'PUT');

export { GET, POST, DEL, PUT };