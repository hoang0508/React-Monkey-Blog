import { Radio } from "components/checkbox";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const PostAddNewStyles = styled.div``;
const PostAddNew = () => {
  const { control, watch, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      status: "",
    },
  });
  const watchStatus = watch("status");
  console.log(
    "🚀 ~ file: PostAddNew.js ~ line 18 ~ PostAddNew ~ watchStatus",
    watchStatus
  );
  return (
    <PostAddNewStyles>
      <h1 className="dashboard-heading">Add new post</h1>
      <form>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio checked={watchStatus === "approved"} control={control} />
            </div>
          </Field>
          <Field>
            <Label>Author</Label>
            <Input
              control={control}
              placeholder="Enter your Author"
              name="Author"
            ></Input>
          </Field>
        </div>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
