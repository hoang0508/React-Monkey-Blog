import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import styled from "styled-components";

const PostAddNewStyles = styled.div``;
const PostAddNew = () => {
  return (
    <PostAddNewStyles>
      <h1 className="dashboard-heading">Add new post</h1>
      <form>
        <div className="grid grid-cols-2 gap-x-10 mb-10">
          <Field>
            <Label>Title</Label>
            <Input placeholder="Enter your title" name="title"></Input>
          </Field>
        </div>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
