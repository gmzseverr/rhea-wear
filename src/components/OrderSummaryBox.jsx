const OrderSummaryBox = ({ orderTotal }) => {
  const shippingCost = orderTotal > 150 ? 0 : 15;
  const totalAmount = orderTotal + shippingCost;

  return (
    <div>
      <div className="p-4 border rounded-md shadow-lg bg-white w-96 max-w-sm">
        <h2 className="text-lg font-semibold mb-4 text-[#23A6F0]">
          Order Summary
        </h2>
        <div className="flex justify-between mb-2">
          <span className="text-[#737373]">Total Products:</span>
          <span className="font-semibold text-[#737373]">
            ${orderTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-[#737373]">Shipping:</span>
          <span
            className={`font-bold text-[#737373] ${
              shippingCost === 0 ? "text-green-500" : "text-red-700"
            }`}
          >
            {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between mb-4 border-t pt-2">
          <span className="font-semibold text-zinc-950">Total Amount:</span>
          <span className="font-bold text-zinc-950">
            ${totalAmount.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryBox;
