import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import ConfirmBox from "../components/ConfirmBox";
import Button from "../components/Button";
import { AppContext } from "../lib/AppContext";
import { verifyUrl } from "../lib/urls";

const ConfirmCode = () => {
  const navigate = useNavigate();
  const { userDetails, opt, token } = useContext(AppContext);
  const codes = `${opt}`.split("");
  const Description = () => {
    return (
      <span>
        A four digit OTP code has been sent to your email{" "}
        <strong>{userDetails.email}</strong>
      </span>
    );
  };

  const { dispatch } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const handleVerifyCode = () => {
    const data = {
      otp: `${opt}`,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    setLoading(true);

    fetch(verifyUrl, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch({ isLoggedIn: true });
          navigate("/email-verified");
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

  return (
    <AuthLayout>
      <ConfirmBox
        header="Verify your email"
        description={<Description />}
        styles={{ padding: "50px", textAlign: "left" }}
      >
        <div className="code-row">
          <input type="text" value={codes[0]} readOnly />
          <input type="text" value={codes[1]} readOnly />
          <input type="text" value={codes[2]} readOnly />
          <input type="text" value={codes[3]} readOnly />
        </div>

        <Button
          type="primary"
          text="Confirm code"
          style={{ marginTop: "30px", marginBottom: "30px" }}
          handleClick={handleVerifyCode}
          loading={loading}
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
