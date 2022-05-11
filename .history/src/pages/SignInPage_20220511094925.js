import { useAuth } from "contexts/auth-context";
import React from "react";

const SignInPage = () => {
  const { userInfo } = useAuth();
  console.log(
    "🚀 ~ file: SignInPage.js ~ line 6 ~ SignInPage ~ userInfo",
    userInfo
  );
  return <div></div>;
};

export default SignInPage;
