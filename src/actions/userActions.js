import { userConstants } from '../constants/userConstants';
import { userService }  from '../services/userServices';
import history from '../helpers/history';

export const userActions = {
    login,
    logout,
};

function login(username, password) {
    console.log('usr: ', username, 'pwd: ', password);
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    // dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    console.log('logged out')
    userService.logout()
    return { type: userConstants.LOGOUT };
}