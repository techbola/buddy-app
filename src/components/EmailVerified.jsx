import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ConfirmBox from "./ConfirmBox";
import EmailVerifiedIcon from "../assets/icons/envelop-check.svg";
import Button from "./Button";

const EmailVerified = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <ConfirmBox
        header="Email verified!"
        description="The verified email address will be associated with your account. Click on the button below to continue"
        icon={EmailVerifiedIcon}
      >
        <Button
          type="primary"
          text="Continue"
          style={{ margin: "30px auto 38px" }}
          handleClick={() => navigate("/dashboard")}
        />
      </ConfirmBox>
    </AuthLayout>
  );
};

export default EmailVerified;
