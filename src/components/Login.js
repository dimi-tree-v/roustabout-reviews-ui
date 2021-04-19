import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../actions/userActions";


function Login() {
    const [loginState, setLoginState] = useState({
        'submitted': false,
        'username': '',
        'password': '',
    })

    function HandleSubmit(username, password) {
        setLoginState(loginState.submitted=true);
        console.log(loginState.submitted);
        console.log(loginState.username);
        console.log(loginState.password);
        useDispatch(userActions.login(username, password));
        
    };

    // function HandleChange(username, password) {
    //     console.log(userValues.username);
    //     console.log(userValues.password);
    //     // useDispatch(userActions.login(username, password));

    const changeHandler = e => {
        setLoginState({...loginState, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Login</h2>
            <form name="form" onSubmit={() => HandleSubmit(loginState.username, loginState.password)}>
                <div >
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={loginState.username} onChange={changeHandler} />
                    {/* { loginState.submitted && !loginState.username && <div className="help-block">Username is required</div> } */}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={loginState.password} onChange={changeHandler}/>
                    {/* { loginState.submitted && !loginState.password && <div className="help-block">Password is required</div> } */}
                </div>
                <button name="submitted" onSubmit={changeHandler} value={true}>Login</button>
            </form>
        </div>
    )
};

// function HandleSubmit(username, password) {
//     console.log(username);
//     console.log(password);
//     useDispatch(userActions.login(username, password));
// };

export default Login