import React from "react";
import styled from "styled-components";

const PostAddNewStyles = styled.div``;
const PostAddNew = () => {
  return (
    <PostAddNewStyles>
      <h1 className="dashboard-heading">Add new post</h1>
      <form>
        <div className="grid grid-cols-2 gap-x-10 mb-10"></div>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
