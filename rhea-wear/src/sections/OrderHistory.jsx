import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../api/api";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeOrder, setActiveOrder] = useState(null); // Track the active order for toggling

  const fetchOrder = async () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      toast.error("No order found, please log in.");
      setLoading(false); // Set loading to false in case of no token
      return;
    }

    try {
      const response = await API.get("/order", {
        headers: {
          Authorization: token,
          "X-USER-ROLE": "client",
        },
      });
      console.log("order:", response.data);

      if (response.data.length === 0) {
        toast.info("No orders found.");
      }
      setOrders(response.data); // Directly update the state
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching order data.");
    } finally {
      setLoading(false); // Set loading to false after data is fetched or an error occurs
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleToggleOrderDetails = (orderId) => {
    setActiveOrder(activeOrder === orderId ? null : orderId);
  };

  return (
    <div className="container mx-auto pt-32">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div
            key={order.id}
            className="order-summary mb-6 p-4 border border-gray-300 rounded-lg"
          >
            {/* Order Header with Toggle */}
            <div
              onClick={() => handleToggleOrderDetails(order.id)}
              className="cursor-pointer mb-2"
            >
              <h3 className="text-xl font-semibold">
                Order {order.order_date} {/* Directly use the order_date */}
              </h3>
              <p className="text-sm text-gray-500">
                <span className="font-bold">Sipariş Tarihi:</span>{" "}
                {order.order_date}
              </p>
            </div>

            {/* Show small product images initially */}
            <div className="flex mb-4">
              {order.products.map((product) => (
                <img
                  key={product.product_id}
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded mr-2"
                />
              ))}
            </div>

            {/* Toggle product details */}
            {activeOrder === order.id && (
              <div>
                {order.products.map((product) => (
                  <div
                    key={product.product_id}
                    className="product-details mb-4 p-4 border-t border-gray-200"
                  >
                    <h4 className="text-lg font-semibold">{product.name}</h4>
                    <p className="text-gray-600">Price: ${product.price}</p>
                    <p className="text-gray-600">Quantity: {product.count}</p>
                    <p className="text-gray-600">
                      Description: {product.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Order Total Price */}
            <div className="font-bold text-lg">Total Price: ${order.price}</div>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
