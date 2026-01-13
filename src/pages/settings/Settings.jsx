import React from "react";
import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";


const Settings = () => {
  return (
    <div className="">
      <Link to={'/settings/profile'}>
        <div className="border-b border-gray-200 py-2.5 flexBetween">
          <h1 className="text-lg">Personal Information</h1>
          <span><MdKeyboardArrowRight size={24}/></span>
        </div>
      </Link>
      <Link to={'/settings/changepass'}>
        <div className="border-b border-gray-200 py-2.5 flexBetween">
          <h1 className="text-lg">Change Password</h1>
          <span><MdKeyboardArrowRight size={24}/></span>
        </div>
      </Link>
       <Link to={'/settings/policy'}>
        <div className="border-b border-gray-200 py-2.5 flexBetween">
          <h1 className="text-lg">Privacy Policy</h1>
          <span><MdKeyboardArrowRight size={24}/></span>
        </div>
      </Link>
       <Link to={'/settings/terms'}>
        <div className="border-b border-gray-200 py-2.5 flexBetween">
          <h1 className="text-lg">Terms & Condition</h1>
          <span><MdKeyboardArrowRight size={24}/></span>
        </div>
      </Link>
         <Link to={'/settings/faq'}>
        <div className="border-b border-gray-200 py-2.5 flexBetween">
          <h1 className="text-lg">FAQ</h1>
          <span><MdKeyboardArrowRight size={24}/></span>
        </div>
      </Link>
      
    </div>
  );
};

export default Settings;
