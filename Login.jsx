import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./login.css";

const Login = () => {
  const uname = useRef();
  const upwd = useRef();
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
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <Header />

      <div className="login-container">
        <div className="login-box">
          <h2>User Login</h2>
          {error && <p className="error-message">{error}</p>}
          <input ref={uname} placeholder="Enter username" />
          <input ref={upwd} type="password" placeholder="Enter password" />
          <button onClick={login}>Login</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
