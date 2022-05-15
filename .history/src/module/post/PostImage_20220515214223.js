import React from "react";
import styled from "styled-components";

const PostImageStyles = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const PostImage = () => {
  return <PostImageStyles></PostImageStyles>;
};

export default PostImage;
