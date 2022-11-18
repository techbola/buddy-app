import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ConfirmBox from "./ConfirmBox";
import SentMailIcon from "../assets/icons/sent-email.svg";
import Button from "./Button";

const Login = () => {
  const navigate = useNavigate();
  const description = `We’ve sent an email to seyi@zojatech.com with an OTP to confirm your account. Check your inbox to  activate your account.`;
  return (
    <AuthLayout>
      <ConfirmBox
        header="Check your mailbox"
        description={description}
        icon={SentMailIcon}
      >
        <Button
          type="primary"
          text="Confirm Email"
          style={{ margin: "30px auto 38px" }}
          handleClick={() => navigate("/verify-code")}
        />

        <p>
          Didn’t get the mail?
          <span className="text-primary">Resend</span>
        </p>
      </ConfirmBox>
    </AuthLayout>
  );
};

export default Login;
