import Heading from "components/layout/Heading";
import { db } from "firebase-app/firsbase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import PostFeatureItem from "module/post/PostFeatureItem";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "===", 1),
      where("hot", "===", true),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      snapshot.forEach((item) => {
        console.log(item.data());
      });
    });
  }, []);
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
