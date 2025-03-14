import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

function File() {
  const [file, setFile] = useState<File[] | null>(null);
  const handleChange = (file: File[]) => {

    setFile(file);
  };
  console.log(file)
  const fileTypes = ["PDF"];

  return (
    <div className="App">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  
  )
}

export default File