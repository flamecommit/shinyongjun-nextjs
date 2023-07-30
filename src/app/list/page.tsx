"use client";

import Image from "next/image";
import { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  const [count, setCount] = useState([0, 0, 0]);

  return (
    <div className="page-list">
      <h1 style={{ fontSize: 30 }}>상품목록</h1>
      <div className="product-list">
        {products.map((product, index) => {
          return (
            <div className="product-item" key={product}>
              <Image
                src="https://picsum.photos/200/300"
                width={200}
                height={300}
                alt=""
                priority={true}
              />
              <div className="product-name">{product} $40</div>
              <span>{count[index]}</span>
              <button
                onClick={() => {
                  const copy = [...count];
                  copy[index]++;
                  setCount(copy);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
