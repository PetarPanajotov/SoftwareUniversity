async function api(method, endPoint, body, token) {
    const url = 'http://localhost:3030/jsonstore/' + endPoint;
    const header = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (body !== undefined) {
        header['body'] = JSON.stringify(body);
    }
    if (token) {
        body.headers['X-Authorization'] = token;
    }
    try {
        const response = await fetch(url, header);
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        if (response.status == 204) {
            return response
        }
        const data = response.json();
        return data;
    }
    catch (error) {
        alert(error.message);
        throw Error(error.message);
    }
}
const GET = api.bind(null, 'GET');
const POST = api.bind(null, 'POST');
const DELETE = api.bind(null, 'DELETE');
const PUT = api.bind(null, 'PUT');
export { GET, POST, DELETE, PUT };
