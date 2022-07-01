import React from "react";
import { useSearchParams } from "react-router-dom";

const CategoryUpdate = () => {
  const [param] = useSearchParams();
  console.log(
    "🚀 ~ file: CategoryUpdate.js ~ line 6 ~ CategoryUpdate ~ param",
    param
  );
  return <div></div>;
};

export default CategoryUpdate;
