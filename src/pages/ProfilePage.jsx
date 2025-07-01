import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logoutUser } from "../redux/actions/clientActions";
import OrderHistory from "../sections/OrderHistory";

function ProfilePage() {
  const user = useSelector((state) => state.client.user);
  const dispatch = useDispatch();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-600 text-lg animate-pulse">
          Loading user data...
        </p>
      </div>
    );
  }

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("You have successfully logged out!");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 space-y-12">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img
              src={user.avatarUrl || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-[#23A6F0] shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {user.name || user.email}
              </h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#23A6F0] hover:bg-[#1e90b6] text-white px-6 py-2 rounded-lg transition shadow-md">
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition shadow-md"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Order History Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Order History
          </h2>
          <OrderHistory />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Example Order */}
            <div className="bg-white border rounded-xl p-5 shadow hover:shadow-md transition">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800 font-medium">Order ID: 1</p>
                <span className="text-green-600 text-sm font-semibold">
                  Delivered
                </span>
              </div>
              <p className="text-gray-500 text-sm">Date: 2024-10-01</p>
              <p className="text-xl font-semibold mt-2">$50</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Account Settings
          </h2>
          <div className="bg-gray-100 border rounded-xl p-6 shadow-sm">
            <p className="text-gray-600">
              Change your password, manage email notifications, or upgrade your
              plan.
            </p>
            <button className="mt-4 bg-[#23A6F0] text-white px-6 py-2 rounded-lg hover:bg-[#1e90b6] transition shadow">
              Manage Settings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfilePage;
