"use client";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function Abutepanel() {
  const [content, setContent] = useState<string>("");

  const handleEditorChange = (content: string, editor: any) => {
    console.log("Content was updated:", content);
    setContent(content);
  };
  return (
    <div className=" w-[1000px] text-[18px]">
      <h1>درباره ما</h1>
      <div className=" mt-5">
        <Editor
          value={content}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",

            external_script: [
              "https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js",
            ],
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
      <div>
        <button className=" w-[151px] h-[46px] rounded-[8px] bg-[#269200] text-white mt-3">
          ثبت تغییرات
        </button>
      </div>

    </div>
  );
}

export default Abutepanel;
