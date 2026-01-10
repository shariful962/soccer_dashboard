import { RiHomeLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { GoReport } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";






export const menuItem = [
    { id: 1, path: "/dashboard", label: "Overview", icon: <RiHomeLine className="text-xl" /> },
    {
      id: 2,
      path: "/user",
      label: "Club Management",
      icon: <CiUser className="text-xl" />,
    },
     {
      id: 3,
      path: "/billing",
      label: "Billing  & Revenue",
      icon: <CiMoneyBill className="text-xl" />,
    },
    {
      id: 4,
      path: '/report',
      label: "Report",
      icon: <GoReport className="text-xl" />
    },
    {
      id: 5,
      path: "/settings",
      label: "Platform Settings",
      icon: <IoSettingsOutline className="text-xl" />,
    },
  ];