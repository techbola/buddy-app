import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../pages/layouts/AuthLayout";
import AuthBox from "../components/AuthBox";
import MailIcon from "../assets/icons/envelop.svg";
import UserIcon from "../assets/icons/user.svg";
import LockIcon from "../assets/icons/lock.svg";
import Button from "../components/Button";

import { registerUrl } from "../lib/urls";
import { AppContext } from "../lib/AppContext";

const Register = () => {
  const navigate = useNavigate();

  const [isValid, setIsValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AppContext);

  const handleRegister = () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
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

    fetch(registerUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const userData = {
            userDetails: { email },
            opt: data.data.opt,
            token: data.data.token,
            isLoggedIn: false,
          };
          dispatch(userData);
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/confirm-email");
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
    if (!firstName || !lastName || !email || !password) {
      return setIsValid(false);
    }
    setIsValid(true);
  };

  useEffect(() => {
    checkIfValid();
  }, [firstName, lastName, email, password]);

  return (
    <AuthLayout>
      <AuthBox
        header="Register your account"
        description="Proceed to create account and setup your organization"
      >
        <div className="content">
          <div className="form-row-2">
            <div className="input-wrap left-icon mb-3">
              <input
                type="text"
                name="firstName"
                className="form-input"
                id="firstName"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label htmlFor="firstName">First name</label>
              <img src={UserIcon} alt="first name" />
            </div>

            <div className="input-wrap left-icon mb-3">
              <input
                type="text"
                name="lastName"
                className="form-input"
                id="lastName"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="lastName">Last name</label>
              <img src={UserIcon} alt="last name" />
            </div>
          </div>

          <div className="input-wrap left-icon mb-6">
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

          <div className="input-wrap left-icon">
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
            text="Create account"
            style={{ marginTop: "30px" }}
            handleClick={handleRegister}
            loading={loading}
          />

          <p className="terms">
            By clicking the button above, you agree to our{" "}
            <span className="text-primary">Terms of Service</span> and
            <span className="text-primary"> Privacy Policy</span>.
          </p>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </AuthBox>
    </AuthLayout>
  );
};

export default Register;
