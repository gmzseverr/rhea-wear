import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NotUserModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.client);

  if (!isOpen || isAuthenticated) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-semibold mb-4">You need to log in</h2>
        <p className="text-gray-600 mb-4">
          Please log in to continue using this feature.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-[#23A6F0] text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
        <button
          onClick={onClose}
          className="ml-2 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default NotUserModal;
