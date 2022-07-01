import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field, FieldCheckboxes } from "components/field";
import { Label } from "components/label";
import DashboardHeading from "module/dashboard/DashboardHeading";
import { Input } from "postcss";
import React from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const CategoryUpdate = () => {
  // useForm
  const { control } = useForm({
    mode: "onChange",
  });
  // param
  const [param] = useSearchParams();
  const categoryId = param.get("id");
  if (!categoryId) return null;
  return (
    <div>
      <DashboardHeading
        title="Update category"
        desc={`Update your category id: ${categoryId}`}
      ></DashboardHeading>
      <form>
        <div className="form-layout">
          <Field>
            <Label>Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your category name"
            ></Input>
          </Field>
          <Field>
            <Label>Slug</Label>
            <Input
              control={control}
              name="slug"
              placeholder="Enter your slug"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio name="status" control={control}>
                Approved
              </Radio>
              <Radio name="status" control={control}>
                Unapproved
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button kind="primary" className="mx-auto">
          Update category
        </Button>
      </form>
    </div>
  );
};

export default CategoryUpdate;
