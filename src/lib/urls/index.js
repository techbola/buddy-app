const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

export const registerUrl = `${REACT_APP_BASE_URL}/api/admin/register`;
export const loginUrl = `${REACT_APP_BASE_URL}/api/admin/login`;
export const verifyUrl = `${REACT_APP_BASE_URL}/api/admin/verify-otp`;
export const resendUrl = `${REACT_APP_BASE_URL}/api/admin/resend-otp`;
