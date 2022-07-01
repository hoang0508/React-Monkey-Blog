import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useSearchParams } from "react-router-dom";

const CategoryUpdate = () => {
  const [param] = useSearchParams();
  const categoryId = param.get("id");
  if (!categoryId) return null;
  return (
    <div>
      <DashboardHeading title="Update category"></DashboardHeading>
    </div>
  );
};

export default CategoryUpdate;
