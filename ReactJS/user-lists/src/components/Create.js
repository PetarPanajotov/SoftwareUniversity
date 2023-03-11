import { User } from "./User";

export function Create({url, onCloseCreate}) {

    async function createNewUser(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {firstName, lastName, email, phoneNumber, imageUrl, country, city, street, streetNumber} = Object.fromEntries(formData);
        const data = {firstName, lastName, email, phoneNumber, imageUrl, address:{country, city, street, streetNumber}};
        const header = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        await fetch(url, header);
        debugger;
        window.location.href = 'http://localhost:3000/';
    };
    debugger;
    return (<User createNewUser = {createNewUser} onClose = {onCloseCreate}/>);
}