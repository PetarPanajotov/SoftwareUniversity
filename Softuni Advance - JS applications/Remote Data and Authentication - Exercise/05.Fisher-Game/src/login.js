document.getElementById('logout').style.display = 'none'
const form = document.getElementById('login-form')
form.addEventListener('submit', login)
async function login(e) {
    e.preventDefault();
    try {
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData.entries())
        const response = await fetch("http://localhost:3030/users/login", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if(!response.ok) {
            throw new Error("Login or password don't match")
        }
        const data = await response.json();
        console.log(data);
        debugger;
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('email', data.email)
        sessionStorage.setItem('id', data._id)
        window.location = 'index.html'
    } catch (error) {
        form.reset()
        alert(error.message)
    }
}