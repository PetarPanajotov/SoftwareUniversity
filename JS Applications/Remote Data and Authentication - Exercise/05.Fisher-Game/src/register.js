document.getElementById('logout').style.display = 'none'
const form = document.getElementById('register-form')
form.addEventListener('submit', register)
async function register(e) {
    e.preventDefault();
    try {
        const formData = new FormData(e.target);
        debugger;
        const { email, password, rePass } = Object.fromEntries(formData.entries())
        if (password !== rePass) {
            throw new Error ("Passwords do not match")
        }
        const response = await fetch("http://localhost:3030/users/register", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        if (response.status == 409) {
            throw new Error('User already exist')
        }
        if(!response.ok) {
            throw new Error("Login or password don't match")
        }
        const data = await response.json();
        console.log(data);
        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('email', data.email)
        sessionStorage.setItem('id', data._id)
        window.location = 'index.html'
    } catch (error) {
        form.reset()
        alert(error.message)
    }
}