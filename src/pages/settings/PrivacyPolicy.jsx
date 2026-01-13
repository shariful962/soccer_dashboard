
import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // load saved content from localStorage
  const savedContent = localStorage.getItem("privacyContent") || `
    <p>Lorem ipsum dolor sit amet consectetur...</p>
  `;

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(savedContent);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    localStorage.setItem("privacyContent", content); // 
    setIsEditing(false);
  };

  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["link"],
      ["image"],
    ],
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-custome rounded-lg">
      <div className="flex items-center mb-4">
        <IoArrowBack
          className="text-xl mr-2 cursor-pointer"
          onClick={() => navigate("/settings")}
        />
        <h2 className="text-2xl text-[#1F1D1D] font-medium">
          {isEditing ? "Edit Privacy Policy" : "Privacy Policy"}
        </h2>
      </div>

      {isEditing ? (
        <div>
          <ReactQuill value={content} onChange={setContent} modules={modules} />

          <button
            onClick={handleSave}
            className="bg-Primary text-white py-2 px-6 rounded-lg cursor-pointer mt-4"
          >
            Update
          </button>
        </div>
      ) : (
        <div>
          {/* FIX ALIGNMENT — use ql-editor class */}
          <div
            className="ql-editor text-base text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <button
            onClick={handleEdit}
            className="bg-Primary text-white py-2 px-6 rounded-lg cursor-pointer mt-4"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicy;

