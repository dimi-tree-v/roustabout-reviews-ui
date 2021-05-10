import { useState } from "react";
import { userActions } from "../actions/userActions";
import { useDispatch } from 'react-redux';


function LoginPage() {
    // const [submitted, setSubmitted] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");

    const dispatch = useDispatch();

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(userActions.login(username, password));
    }

    return (
        <div>
            <h2>Login</h2>
            <form name="form" onSubmit={handleSumbit}>
                <div >
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* { loginState.submitted && !loginState.username && <div className="help-block">Username is required</div> } */}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* { loginState.submitted && !loginState.password && <div className="help-block">Password is required</div> } */}
                </div>
                <button name="submitted">Login</button>
            </form>
        </div>
    )
};


export default LoginPage;