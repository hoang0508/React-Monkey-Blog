import Heading from "components/layout/Heading";
import { db } from "firebase-app/firsbase-config";
import { collection, limit, query, where } from "firebase/firestore";
import PostFeatureItem from "module/post/PostFeatureItem";
import React, { useState } from "react";
import styled from "styled-components";
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  const colRef = collection(db, "posts");
  const queries = query(
    colRef,
    where("status", "===", "1"),
    where("hot", "===", true),
    limit(3)
  );
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout"></div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
