import { Button } from "components/button";
import { Field } from "components/field";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Input } from "components/input";
import { Label } from "components/label";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firsbase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";

// Validation Yup
const schema = yup.object({
  fullname: yup.string().required(`Please enter your fullName`),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 character or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  // Navigate
  const navigate = useNavigate();
  // React hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // Submit form
  const handleSignUp = async (values) => {
    if (!isValid) return;
    console.log(values);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
    // Tạo tài khoản
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    // displayName
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    // Collection, Firestore , addDoc
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      name: values.fullname,
      email: values.email,
      password: values.password,
    });
    //  toast success
    toast.success(`Register successfully!!!`);
    // navigate
    navigate(`/`);
  };

  // Toggle password
  const [togglePassword, setTogglePassword] = useState(false);
  // handleTogglePasssword
  const handleTogglePassword = () => {
    setTogglePassword(!togglePassword);
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
  // useEffect, document title
  useEffect(() => {
    document.title = "Register Page";
  }, []);
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="fullname" className="label">
            Fullname
          </Label>
          <Input
            type="text"
            name="fullname"
            className="input"
            placeholder="Enter your fullName"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="email" className="label">
            Email address
          </Label>
          <Input
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="password" className="label">
            Password
          </Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            className="input"
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose onClick={handleTogglePassword}></IconEyeClose>
            ) : (
              <IconEyeOpen onClick={handleTogglePassword}></IconEyeOpen>
            )}
          </Input>
        </Field>
        <div className="have-acount">
          You already have an acount? <NavLink to={"/sign-in"}>Login</NavLink>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
        >
          Sign up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
