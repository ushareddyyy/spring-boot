import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Ensure this file contains the updated CSS

const Login = () => {
    const uname = useRef(null);
    const upwd = useRef(null);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const login = () => {
        if (!uname.current.value || !upwd.current.value) {
            setError("Username and Password are required");
            return;
        }

        if (uname.current.value === "mru" && upwd.current.value === "mru@123") {
            navigate("/dashboard");
        } else {
            setError("Invalid Credentials");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <input type="text" ref={uname} placeholder="Enter username" />
                <input type="password" ref={upwd} placeholder="Enter password" />
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
};

export default Login;
