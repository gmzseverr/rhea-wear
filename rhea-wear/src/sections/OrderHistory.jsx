import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderHistory } from "../redux/actions/orderActions"; // Action to fetch order history
import { API } from "../api/api";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const [savedOrders, setSavedOrders] = useState([]);

  const fetchOrderHistory = async () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("Token not found, please log in.");
      return;
    }

    try {
      const response = await API.get("/order", {
        headers: {
          Authorization: token,
          "X-USER-ROLE": "client",
        },
      });

      setSavedOrders(response.data);
    } catch (error) {
      console.error("Error fetching ordes:", error.response || error);
      toast.error("Unable to fetch saved order.");
    }
  };

  useEffect(() => {
    // Fetch order history when component mounts
    dispatch(fetchOrderHistory());
  }, [dispatch]);

  if (!orderHistory) {
    return <p>Loading order history...</p>;
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Order History
      </h2>
      {orderHistory.length > 0 ? (
        <div className="space-y-4">
          {orderHistory.map((order) => (
            <div
              key={order.id}
              className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="text-gray-800">Order ID: {order.id}</p>
                <p className="text-gray-600">Date: {order.date}</p>
                <p className="text-gray-600">Address: {order.address}</p>
              </div>
              <div>
                <p className="text-xl font-semibold">${order.totalPrice}</p>
                <p
                  className={`text-sm ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {order.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
