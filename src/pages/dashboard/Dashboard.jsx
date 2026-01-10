import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import OverviewChart from "../../shared/OverviewChart";
import OverviewLabel from "../../shared/OverviewLabel";
import { users } from "./data";


const Overview = () => {


  return (
    <div>
      <h1 className="font-semibold text-3xl text-dark1">Overview</h1>
      <div className="mt-5">
        < OverviewLabel/>
      </div>
      
      <div className="bg-[#F9F9FA] p-8 pb-12 mt-12 rounded-2xl">
        <OverviewChart />
      </div>
      {/* table section  */}
      <div className="bg-[#F9F9FA] rounded-2xl pb-6 mt-12">
        <div className="p-4 ">
          <h1 className="text-2xl font-semibold "> Recent Clubs</h1>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-Primary text-white">
              <tr>
                <th className="px-4 py-4 text-left">Serial</th>
                <th className="px-4 py-2 text-left">Club Name</th>
                <th className="px-4 py-2 text-left">Tier</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Users</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 text-lg"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                users.slice(0, 5).map((user, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.tier}</td>
                    <td className="px-4 py-2">{user.date}</td>
                    <td className="px-4 py-2">{user.user}</td>
                    <td className="px-4 py-2">
                      <button
                        className="text-red-500 cursor-pointer"
                        
                      >
                        <RiDeleteBin6Line size={24} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

   
      </div>
    </div>
  );
};

export default Overview;

