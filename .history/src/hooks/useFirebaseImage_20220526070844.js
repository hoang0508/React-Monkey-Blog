import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const useFirebase = (setValue, getValues) => {
  // Progess
  const [progress, setProgress] = useState(0);
  // Image
  const [image, setImage] = useState("");
  // handleUploadImage
  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progressPercen =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercen);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all!!");
        }
      },
      (error) => {
        console.log("Error!!");
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  // onSelectImage
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue("image_name", file.name);
    handleUploadImage(file);
  };

  // Delete Image
  const handleDeleteImage = () => {
    const storage = getStorage();

    // Create a reference to the file to delete
    const imageRef = ref(storage, "images/" + getValues("image_name"));

    // Delete the file
    deleteObject(imageRef)
      .then(() => {
        // File deleted successfully
        console.log("Remove image successfully!!");
        setImage("");
        setProgress(0);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log("Can not delete image!!");
      });
  };
  return {
    progress,
    image,
    handleDeleteImage,
    handleSelectImage,
  };
};
