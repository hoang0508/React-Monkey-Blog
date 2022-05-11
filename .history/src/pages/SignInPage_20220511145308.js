import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firsbase-config";

// Validation Yup
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 character or greater")
    .required("Please enter your password"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // useAuth , context
  const { userInfo } = useAuth();
  // navigate
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo.email) navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // handleSignIn, submit,
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  // useEffect , toastify. error
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);
  // Toggle password
  const [togglePassword, setTogglePassword] = useState(false);
  // handleTogglePasssword
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
  };
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
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
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Please enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose onClick={handleTogglePassword}></IconEyeClose>
            ) : (
              <IconEyeOpen onClick={handleTogglePassword}></IconEyeOpen>
            )}
          </Input>
        </Field>
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          style={{ maxWidth: 300, margin: "0 auto" }}
        >
          Sign in
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
