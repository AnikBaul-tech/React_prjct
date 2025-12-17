import React from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./PreviousOrder.css";

const ordersData = [
  {
    id: 1,
    title: "Classic Oversized Tee",
    img: "https://images.unsplash.com/photo-1761522001763-c45e3e0d2377?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 2,
    rating: 4.5,
    date: "2024-12-10",
    price: "$39.99"
  },
  {
    id: 2,
    title: "Premium Hoodie",
    img: "https://images.unsplash.com/photo-1616196395402-31872a09315b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 1,
    rating: 5,
    date: "2024-11-02",
    price: "$59.99"
  },
  {
    id: 3,
    title: "Minimal Joggers",
    img: "https://plus.unsplash.com/premium_photo-1681912767618-b78349675d1d?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 3,
    rating: 4,
    date: "2024-10-18",
    price: "$49.99"
  }
];

const PreviousOrders = () => {

  return (
    <section className={`orders-section`}>
      <div className="orders-header">
        <h2>Your Previous Orders</h2>
        <p>Track your past purchases and ratings.</p>
      </div>

      <div className="orders-list">
        {ordersData.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-img">
              <img src={order.img} alt={order.title} />
            </div>

            <div className="order-info">
              <h3 className="order-title">{order.title}</h3>

              <p className="order-detail">
                <span>Quantity:</span> {order.quantity}
              </p>

              <p className="order-detail">
                <span>Rating:</span> ⭐ {order.rating}
              </p>

              <p className="order-detail">
                <span>Order Date:</span> {order.date}
              </p>

              <p className="order-price">{order.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousOrders;