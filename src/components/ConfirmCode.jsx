import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ConfirmBox from "./ConfirmBox";
import Button from "./Button";

const ConfirmCode = () => {
  const navigate = useNavigate();
  const description = `A four digit OTP code has been sent to your email seyi@zojatech.com`;
  return (
    <AuthLayout>
      <ConfirmBox
        header="Verify your email"
        description={description}
        styles={{ padding: "50px", textAlign: "left" }}
      >
        <div className="code-row">
          <input type="text" id="val1" required />
          <input type="text" id="val2" required />
          <input type="text" id="val3" required />
          <input type="text" id="val4" required />
        </div>

        <Button
          type="primary"
          text="Confirm code"
          style={{ marginTop: "30px", marginBottom: "30px" }}
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

export default ConfirmCode;
