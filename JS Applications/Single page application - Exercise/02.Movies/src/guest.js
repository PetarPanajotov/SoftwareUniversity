const navigation = document.getElementsByTagName('nav')[0]
export function guestNavView() {
    [...navigation.getElementsByClassName('nav-item user')].forEach(el => el.style.display = 'none');
    [...navigation.getElementsByClassName('nav-item guest')].forEach(el => el.style.display = 'inline-block')
}