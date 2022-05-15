import React from "react";
import styled from "styled-components";

const PostMetaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

const PostMeta = ({ date = "Mar 23", author = "Andiez Le" }) => {
  return (
    <PostMetaStyles>
      <span className="post-time">{date}</span>
      <span className="post-dot"></span>
      <span className="post-author">{author}</span>
    </PostMetaStyles>
  );
};

export default PostMeta;
