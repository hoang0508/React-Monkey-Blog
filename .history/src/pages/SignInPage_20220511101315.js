import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { handleSubmit } = useForm();
  // useAuth , context
  // const { userInfo } = useAuth();
  // navigate
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!userInfo.email) navigate("/sign-up");
  //   else navigate("/");
  // }, []);
  const handleSignUp = () => {};
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            placeholder="Please enter your email address"
          ></Input>
        </Field>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
