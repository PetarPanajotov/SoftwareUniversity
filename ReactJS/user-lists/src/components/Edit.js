import { User } from "./User";

export function Edit({ url, user, onCloseEdit }) {
    async function editUser(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { firstName, lastName, email, phoneNumber, imageUrl, country, city, street, streetNumber } = Object.fromEntries(formData);
        const data = { firstName, lastName, email, phoneNumber, imageUrl, address: { country, city, street, streetNumber } };
        const header = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        await fetch(`${url}/${user._id}`, header);
        window.location.href = 'http://localhost:3000/';
    };
    return (
        <User user={user} onClose={onCloseEdit} editUser={editUser} />
    );
};