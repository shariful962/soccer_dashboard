import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!oldPassword || !newPassword || !confirmPassword) {
      setErrorMsg("Every Password field must be required");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMsg("New password and confirmation do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setErrorMsg("New password must be at least 6 characters long.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Password changed successfully!");
      setLoading(false);
      // setOldPassword("");
      // setNewPassword("");
      // setConfirmPassword("");
      navigate("/settings")
    }, 500);

    // setErrorMsg("");
  };

  return (
    <div className="px-4">
      <div className="mt-20 bg-white p-6 py-8 rounded-2xl shadow-lg w-full max-w-lg mx-auto border border-gray-100">
        <div className="flexCenter">
          <div className="flex items-center gap-x-3">
            <span>
              {" "}
              <MdArrowBack
                size={22}
                className="cursor-pointer"
                onClick={() => navigate("/settings")}
              />{" "}
            </span>
            <h1 className="text-2xl font-semibold">Change Password</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="oldPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Old Password
            </label>
            <div className="relative mt-1">
              <input
                type={showOldPassword ? "text" : "password"}
                id="oldPassword"
                placeholder="Enter old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                // className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                // required
                className="form-control"
              />
              <span
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute top-4.5 right-3 cursor-pointer"
              >
                {showOldPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div className="relative mt-1">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                // className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                className="form-control"
              />
              <span
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute top-4.5 right-3 cursor-pointer"
              >
                {showNewPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <div className="relative mt-1">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                // className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                // required
                className="form-control mb-3"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-4.5 right-3 cursor-pointer"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="authButton" disabled={loading}>
            {loading ? <ClipLoader size={20} color="fff" /> : "Change Password"}
          </button>
          {errorMsg && (
            <div className="text-red-500 text-sm mt-2">{errorMsg}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
