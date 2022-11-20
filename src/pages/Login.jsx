import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../pages/layouts/AuthLayout";
import AuthBox from "../components/AuthBox";
import MailIcon from "../assets/icons/envelop.svg";
import LockIcon from "../assets/icons/lock.svg";
import Button from "../components/Button";

import { loginUrl } from "../lib/urls";
import { AppContext } from "../AppContext";

const Login = () => {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AppContext);

  const handleLogin = () => {
    const data = {
      email,
      password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    setLoading(true);

    fetch(loginUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const userData = {
            userDetails: { ...data.data.user },
            token: data.data.token,
            isLoggedIn: true,
          };
          dispatch(userData);
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/dashboard");
        }
        if (data.errors) {
          console.log("err", data.errors);
        }
      })
      .catch((errors) => {
        console.log("err", errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const checkIfValid = () => {
    if (!email || !password) {
      return setIsValid(false);
    }
    setIsValid(true);
  };

  useEffect(() => {
    checkIfValid();
  }, [email, password]);

  return (
    <AuthLayout>
      <AuthBox header="Login" description="Login to your account">
        <div className="content">
          <div className="input-wrap left-icon mt-6 mb-3">
            <input
              type="email"
              name="email"
              className="form-input"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <img src={MailIcon} alt="email" />
          </div>

          <div className="input-wrap left-icon mt-6">
            <input
              type="password"
              name="password"
              className="form-input"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <img src={LockIcon} alt="password" />
          </div>

          <Button
            type={isValid ? "primary" : "disable"}
            isFullWidth
            text="Login"
            style={{ marginTop: "30px" }}
            handleClick={handleLogin}
            loading={loading}
          />

          <p className="terms">
            By clicking the button above, you agree to our{" "}
            <span className="text-primary">Terms of Service</span> and
            <span className="text-primary"> Privacy Policy</span>.
          </p>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </div>
      </AuthBox>
    </AuthLayout>
  );
};

export default Login;
