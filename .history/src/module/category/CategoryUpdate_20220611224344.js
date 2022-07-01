import { data } from "autoprefixer";
import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field, FieldCheckboxes } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import { db } from "firebase-app/firsbase-config";
import { doc, getDoc } from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const CategoryUpdate = () => {
  // useForm
  const { control, reset } = useForm({
    mode: "onChange",
    defaultValues: {},
  });
  // param
  const [param] = useSearchParams();
  const categoryId = param.get("id");
  // useEffect
  useEffect(() => {
    async function fetchData() {
      const colRef = doc(db, "categories", categoryId);
      const sigleDoc = await getDoc(colRef);
      reset(sigleDoc.data());
    }
    fetchData();
  }, [categoryId]);
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
