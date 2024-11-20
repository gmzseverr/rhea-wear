import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify"; // For showing toast notifications
import { logoutUser } from "../redux/actions/clientActions";

function ProfilePage() {
  const user = useSelector((state) => state.client.user);
  const dispatch = useDispatch();

  // Check if user data exists
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading user data...</p>
      </div>
    );
  }

  // Handle Logout
  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the logout action
    toast.success("You have successfully logged out!"); // Show a toast on successful logout
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img
              src={user.avatarUrl || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-[#23A6F0] mr-6"
            />
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                {user.name || user.email}
              </h1>
              <p className="text-lg text-gray-600">{user.email}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {/* Edit Profile Button */}
            <button className="bg-[#23A6F0] text-white px-6 py-2 rounded-md hover:bg-[#1e90b6] transition duration-200">
              Edit Profile
            </button>
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Order History Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Order History
          </h2>
          <div className="space-y-4">
            {/* Example Order */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <p className="text-gray-800">Order ID: 1</p>
                <p className="text-gray-600">Date: 2024-10-01</p>
              </div>
              <div>
                <p className="text-xl font-semibold">$50</p>
                <p className="text-sm text-green-600">Delivered</p>
              </div>
            </div>
          </div>
        </section>

        {/* Liked Items Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Liked Items
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Example Liked Item */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/100"
                alt="Leather Jacket"
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <p className="text-gray-800 font-semibold">Leather Jacket</p>
              <p className="text-gray-600">$200</p>
            </div>
          </div>
        </section>

        {/* Account Settings Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Account Settings
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600">
              Change your password, manage email notifications, or upgrade your
              plan.
            </p>
            <button className="bg-[#23A6F0] text-white px-6 py-2 rounded-md mt-4 hover:bg-[#1e90b6] transition duration-200">
              Manage Settings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfilePage;
