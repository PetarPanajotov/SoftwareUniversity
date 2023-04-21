const navigation = document.getElementsByTagName('nav')[0]
export function userNavView() {
[...navigation.getElementsByClassName('nav-item guest')].forEach(el => el.style.display = 'none');
document.getElementById('welcome-msg').textContent = `Welcome, ${sessionStorage['email']}`;
[...navigation.getElementsByClassName('nav-item user')].forEach(el => el.style.display = 'inline-block')
}