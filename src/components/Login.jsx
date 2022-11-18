import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import AuthBox from "./AuthBox";
import MailIcon from "../assets/icons/envelop.svg";
import LockIcon from "../assets/icons/lock.svg";
import Button from "./Button";

const Login = () => {
  return (
    <AuthLayout>
      <AuthBox
        header="Register your account"
        description="Login to your account"
      >
        <div className="content">
          <div className="input-wrap left-icon mb-3">
            <input
              type="email"
              name="email"
              className="form-input"
              id="email"
              required
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
            />
            <label htmlFor="password">Password</label>
            <img src={LockIcon} alt="password" />
          </div>

          <Button
            type="disable"
            isFullWidth
            text="Login"
            style={{ marginTop: "30px" }}
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
