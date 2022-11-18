import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import AuthBox from "./AuthBox";
import MailIcon from "../assets/icons/envelop.svg";
import UserIcon from "../assets/icons/user.svg";
import LockIcon from "../assets/icons/lock.svg";
import Button from "./Button";

const Register = () => {
  return (
    <AuthLayout>
      <AuthBox
        header="Register your account"
        description="Proceed to create account and setup your organization"
      >
        <div className="content">
          <div className="form-row-2 mb-3">
            <div className="input-wrap left-icon">
              <input
                type="text"
                name="firstName"
                className="form-input"
                id="firstName"
                required
              />
              <label htmlFor="firstName">First name</label>
              <img src={UserIcon} alt="first name" />
            </div>

            <div className="input-wrap left-icon">
              <input
                type="text"
                name="lastName"
                className="form-input"
                id="lastName"
                required
              />
              <label htmlFor="lastName">Last name</label>
              <img src={UserIcon} alt="last name" />
            </div>
          </div>

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
            text="Create account"
            style={{ marginTop: "30px" }}
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
