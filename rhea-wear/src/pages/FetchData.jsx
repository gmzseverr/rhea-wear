import React, { useEffect } from "react";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com"
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const FetchData = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>GET Request Example</h1>
      <p>Check the console for response data.</p>
    </div>
  );
};

export default FetchData;
