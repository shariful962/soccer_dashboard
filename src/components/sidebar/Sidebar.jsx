import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { menuItem } from "../ui/MenuItem";
import { FiLogOut } from "react-icons/fi";
import Icons from "../../assets/image";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <div
        className={`
          fixed  left-0 h-full bg-white shadow-lg
          transition-all duration-300 z-60
          ${collapsed ? "md:w-20" : "md:w-64"}
          ${
            mobileOpen
              ? "translate-x-0 w-64"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <RxCross2
          size={22}
          className="md:hidden cursor-pointer absolute top-2 right-3"
          onClick={() => setMobileOpen(false)}
        />

        {/* logo section  */}
        <div className="flexCenter mt-6 mb-8">
          <img
            src={Icons.navLogo}
            alt="logo"
            className={` ${
              collapsed ? "w-12 h-12" : "w-20 h-20"
            } cursor-pointer`}
            onClick={() => navigate("/dashboard")}
          />
        </div>
        {/* menu item section  */}
        <ul className="mt-5 space-y-2">
          {menuItem.map((item) => (
            <li
              key={item.id}
              className={`px-2.5  ${
                collapsed ? "flex items-center justify-center" : ""
              }`}
            >
              <NavLink
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg  ${
                    isActive
                      ? "bg-Primary text-white"
                      : "hover:bg-Primary/10 transition-all duration-300"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className={`absolute bottom-5 w-full px-2.5 ${
            collapsed ? "flex justify-center" : ""
          }`}
        >
          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-700 bg-Primary/10 cursor-pointer ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <FiLogOut size={20} />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
