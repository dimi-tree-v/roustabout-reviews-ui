import { apiUrls } from '../config';
import { authHeader } from '../helpers/authHeader';

export const userService = {
    login,
    logout,
}

function login(username, password) {
    let body = { username, password }
    apiRequest('POST', body)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}


function apiRequest(method, data={}) {
    const requestOptions = {
        method: method,
        headers: authHeader() + { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(apiUrls.login, requestOptions)
        .then(handleResponse)
}

function handleResponse(response) {
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
        return data;
    });
}
