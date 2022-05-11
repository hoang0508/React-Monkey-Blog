import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  // useAuth , context
  // const { userInfo } = useAuth();
  // navigate
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!userInfo.email) navigate("/sign-up");
  //   else navigate("/");
  // }, []);
  return <AuthenticationPage></AuthenticationPage>;
};

export default SignInPage;
