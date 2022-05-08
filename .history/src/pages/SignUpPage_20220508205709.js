import { Field } from "components/field";
import { IconEyeClose } from "components/icon";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm();
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="./logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
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
              type="text"
              name="email"
              className="input"
              placeholder="Enter your email"
              control={control}
            ></Input>
          </Field>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
