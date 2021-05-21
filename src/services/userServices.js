import { apiUrls } from '../config';
import { authHeader } from '../helpers/authHeader';

export const userService = {
    login,
    logout,
}

function login(username, password) {
    console.log('login service');
    let body = { username, password }
    apiRequest('POST', apiUrls.login, body)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            console.log(user);
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}


export function apiPost(method, url, data={}) {
    const requestOptions = {
        method: method,
        headers: authHeader(),
        body: JSON.stringify(data)
    };
    console.log(requestOptions);
    return fetch(url, requestOptions)
            .then(handleResponse);
}

function handleResponse(response) {
    console.log(response)
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload();
            }
            const error = ( data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data);
        return data;
    });
}

