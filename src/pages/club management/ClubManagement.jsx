import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";;
import { RiDeleteBin6Line } from "react-icons/ri";
import { users as initialUsers } from "../dashboard/data"; 




const ClubManagement = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(initialUsers)
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 10;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filterUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.tier.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filterUsers.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = filterUsers.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

    const handleDelete = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };


  return (
    <div className="bg-[#F9F9FA] rounded-2xl pb-6">
      <div className="p-4 md:px-12 flex flex-col md:flex-row gap-3 md:items-center justify-between">
        <h1 className="text-2xl font-semibold mb-4">Clubs</h1>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 w-72 border bg-white border-gray-300 rounded-lg pl-10 outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

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
            {paginatedUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500 text-lg">
                  No users found
                </td>
              </tr>
            ) : (
              paginatedUsers.map((user, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.tier}</td>
                  <td className="px-4 py-2">{user.date}</td>
                  <td className="px-4 py-2">{user.user}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(user.id)}
                     
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

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between px-4">
          <div className="text-lg text-gray-600">
            SHOWING {startIndex + 1}–{Math.min(endIndex, filterUsers.length)} OF{" "}
            {filterUsers.length}
          </div>

          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              shape="rounded"
              siblingCount={0}
              boundaryCount={1}
              sx={{
                "& .MuiPaginationItem-root": { color: "#727272" },
                "& .Mui-selected": {
                  backgroundColor: "#012356 !important",
                  color: "white",
                },
              }}
            />
          </Stack>
        </div>
      )}

  
    </div>
  );
};

export default ClubManagement;


