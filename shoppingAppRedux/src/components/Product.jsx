import React from "react";
import { products } from "../data";

function Product() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            width: "250px",
            borderRadius: "10px",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
          <h3>{item.title}</h3>
          <p>{item.description.substring(0, 80)}...</p>
          <p>
            <strong>${item.price}</strong>
          </p>
          <button>
            {true ? "Remove Item" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
