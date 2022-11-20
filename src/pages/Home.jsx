import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import AuthBox from "../components/AuthBox";
import MailIcon from "../assets/icons/email.svg";
import GoogleIcon from "../assets/icons/google.svg";
import Button from "../components/Button";

const Divider = () => {
  return (
    <div className="divider">
      <div className="line"></div>
      <div className="text">or</div>
      <div className="line"></div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <AuthBox header="Register your account" description="">
        <div className="content">
          <Button
            type="outline"
            isFullWidth
            text="Sign up with email"
            iconLeft={MailIcon}
            handleClick={() => navigate("/register")}
          />
          <Divider />
          <Button
            type="outline"
            isFullWidth
            text="Sign up with Google"
            iconLeft={GoogleIcon}
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

export default Home;
