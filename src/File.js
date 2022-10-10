import "./App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./Firebase";
import { v4 } from "uuid";
import Download from "./Download";

function File() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);

  const filesListRef = ref(storage, "file/");
  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileeRef = ref(storage, `file/${fileUpload.name + v4()}`);
    uploadBytes(fileeRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
         
        setFileUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(filesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="File">
      <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload file</button>
      {fileUrls.map((url) => {
          let filename=url.toString()
        return <Download url={url} filename={filename}/>;
      })}
    </div>
  );
}

export default File;