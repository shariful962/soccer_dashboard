import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { RiCrossLine } from "react-icons/ri";


 const Header = ({ collapsed, setCollapsed, setMobileOpen }) => {
    const [userProfile, setUserProfile] = useState({
    name: "Shariful",
    image: "https://i.pravatar.cc/150?img=12",
  });
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-20 bg-white shadow flex items-center justify-between px-4 z-50 transition-all duration-300 
        ${collapsed ? "md:ml-20" : "md:ml-64"} 
        ${collapsed ? "md:w-[calc(100%-5rem)]" : "md:w-[calc(100%-16rem)]"} 
        ml-0 w-full`} // For desktop, no margin-left
    >
      {/* Menu Button */}
      <button
        className="text-2xl md:hidden cursor-pointer"
        onClick={() => setMobileOpen(true)}
      >
        <HiMenu />
      </button>
     

      <button
        className="text-2xl hidden md:block cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <HiMenu />
      </button>

    {/* profile  */}
     <div className="flex gap-x-4 relative">
        <div>
          <div className="flex items-center gap-x-2">
            <img
              src={userProfile.image}
              alt="Profile"
              className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-600"
            />
            <div>
              <p>{userProfile.name}</p>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
export default Header;