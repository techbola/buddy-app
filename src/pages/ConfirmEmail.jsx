import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../pages/layouts/AuthLayout";
import ConfirmBox from "../components/ConfirmBox";
import SentMailIcon from "../assets/icons/sent-email.svg";
import Button from "../components/Button";
import { AppContext } from "../AppContext";

const Login = () => {
  const navigate = useNavigate();
  const { userDetails } = useContext(AppContext);
  const Description = () => {
    return (
      <span>
        We’ve sent an email to <strong>{userDetails.email}</strong> with an OTP
        to confirm your account. Check your inbox to activate your account.
      </span>
    );
  };
  return (
    <AuthLayout>
      <ConfirmBox
        header="Check your mailbox"
        description={<Description />}
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
