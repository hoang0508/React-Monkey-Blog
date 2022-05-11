import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onChange",
  });
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
            name="email"
            placeholder="Please enter your email address"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Please enter your password"
            control={control}
          ></Input>
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            style={{ maxWidth: 300, margin: "0 auto" }}
          >
            Sign in
          </Button>
        </Field>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
