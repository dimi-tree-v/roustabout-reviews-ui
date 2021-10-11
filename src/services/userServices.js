import { apiUrls } from '../config';
import { authHeader } from '../helpers/authHeader';

export const userService = {
    login,
    logout,
}

function login(username, password) {
    console.log('login service');
    let body = { username, password }
    apiPost(apiUrls.login, body)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            console.log(user);
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

export function apiRequest(method, url, data={}) {
    const requestOptions = {
        method: method,
        headers: authHeader(),
    };
    console.log(requestOptions);
    return fetch(url, requestOptions)
            .then(handleResponse);
}

export function apiPost(url, data={}) {
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(data),
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
            if (response.status !== 200) {
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
