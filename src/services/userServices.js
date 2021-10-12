import { apiUrls } from '../config';
import { authHeader } from '../helpers/authHeader';

export const userService = {
    login,
    logout,
}

function login(username, password) {
    console.log('login service');
    let body = { username, password }
    return apiPost(apiUrls.login, body)
            .then(tokens => {
                let { refresh, access } = tokens;
                let user = { username, access};
                localStorage.setItem('user', JSON.stringify(user));
                console.log(user);
                return user;
            });
}

function logout() {
    localStorage.removeItem('user');
}

export function apiRequest(method, url) {
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
            if (response.status >= 400) {
              console.log(data.message, response.status);
            }
            const error = ( data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data);
        return data;
    });
}
