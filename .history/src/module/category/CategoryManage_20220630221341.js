import { ActionDelete, ActionEdit, ActionView } from "components/action";
import { Button } from "components/button";
import { LabelStatus } from "components/label";
import { Table } from "components/table";
import { db } from "firebase-app/firsbase-config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  onSnapshot,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React, { useEffect, useState } from "react";
import { categoryStatus } from "utils/constants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const CategoryManage = () => {
  // navigate
  const navigate = useNavigate();
  // category
  const [categoryList, setCategoryList] = useState([]);
  // Fiter, search
  const [filter, setFilter] = useState("");

  //
  const [lastDoc, setLastDoc] = useState();
  const handleLoadMoreCategory = async () => {
    const nextRef = query(
      collection(db, "categories"),
      startAfter(lastDoc),
      limit(1)
    );
    // Get document
    onSnapshot(nextRef, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategoryList(result);
    });
    setLastDoc(nextRef);
  };
  // useEffect
  useEffect(() => {
    async function fetchData() {
      // data
      const colRef = collection(db, "categories");
      // query firebase,
      const newRef = filter
        ? query(
            colRef,
            where("name", ">=", filter),
            where("name", "<=", filter + "utf8")
          )
        : query(colRef, limit(1));

      // load more
      const documentSnapshots = await getDocs(newRef);

      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      setLastDoc(lastVisible);
      // Lấy dữ liệu data , api
      onSnapshot(newRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCategoryList([...categoryList, ...results]);
      });
    }
    fetchData();
  }, [filter]);
  // handleInputFilter
  const handleInputFilter = debounce((e) => {
    setFilter(e.target.value);
  }, 500);
  const handleDeleteCategory = async (docId) => {
    // doc => lấy 1 dữ liệu
    const colRef = doc(db, "categories", docId);
    // sweet alert confirm
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(colRef);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button kind="ghost" height="60px" to="/manage/add-category">
          Create category
        </Button>
      </DashboardHeading>
      <div className="mb-10 flex justify-end">
        <input
          type="text"
          placeholder="Search category..."
          className="py-4 px-5 border border-gray-300 rounded-lg outline-none"
          onChange={(e) => handleInputFilter(e)}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryList.length > 0 &&
            categoryList.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <span className="italic text-gray-400">{category.slug}</span>
                </td>
                <td>
                  {Number(category.status) === categoryStatus.APPROVED && (
                    <LabelStatus type="success">Approve</LabelStatus>
                  )}
                  {Number(category.status) === categoryStatus.UNAPPROVED && (
                    <LabelStatus type="warning">UnApproved</LabelStatus>
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <ActionView></ActionView>
                    <ActionEdit
                      onClick={() =>
                        navigate(`/manage/update-category?id=${category.id}`)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteCategory(category.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="mt-10">
        <button onClick={handleLoadMoreCategory}>Load more</button>
      </div>
    </div>
  );
};

export default CategoryManage;
