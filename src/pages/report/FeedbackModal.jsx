import React, { useState } from "react";

const FeedbackModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg py-6 relative">
          <div className="border-b border-Primary">
            <h2 className="text-2xl  text-center text-textClr mb-6">
              Feedback Details
            </h2>
            {/* <div className="flex flex-row items-center gap-3 mb-4 px-7">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-13 h-13 rounded-full"
            />
            <p className="font-medium text-xl md:text-2xl">{user.name}</p>
          </div> */}
          </div>
          <div className="space-y-2">
            <div className="w-full border-b border-gray-200">
              <div className="flex px-4 py-1.5">
                <div className="w-[140px] font-medium text-textClr">Name</div>
                <div className="flex-1 text-right text-sm">{user.name}</div>
              </div>
            </div>
            <div className="w-full border-b border-gray-200">
              <div className="flex px-4 py-1.5">
                <div className="w-[140px] font-medium text-textClr ">Email</div>
                <div className="flex-1 text-right text-sm">{user.email}</div>
              </div>
            </div>

            <div className="w-full border-b border-gray-200">
              <div className="flex px-4 py-1.5">
                <div className="w-[140px] font-medium text-textClr ">
                  Joining Date
                </div>
                <div className="flex-1 text-right text-sm">{user.date}</div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-start px-4 py-1.5">
                <div className="w-[140px] font-medium text-textClr mr-6">
                Message details
              </div>
              <div className="flex-1 text-justify text-sm">{user.msg}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 px-7">
            <button
              className="px-4 py-2 border border-Primary text-Primary rounded w-full hover:bg-Primary hover:text-white cursor-pointer transition-colors duration-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackModal;
