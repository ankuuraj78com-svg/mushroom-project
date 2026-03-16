// Shop Now Section – Pakri Mushroom (React + Tailwind CSS)

import React from "react";

const ShopNow = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Button Mushroom (200g)",
      description: "Farm fresh mushrooms directly from Pakri farms.",
      price: 50,
      image: "oys.webp",
    },
    {
      id: 2,
      name: "Fresh Oyster Mushroom (250g)",
      description: "Organic and naturally grown oyster mushrooms.",
      price: 70,
      image: "mush.jpg",
    },
    {
      id: 3,
      name: "Milky Mushroom Pack (100g)",
      description: "Long shelf life dried mushrooms for soups & curries.",
      price: 120,
      image: "ill.webp",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          🍄 Shop Pakri Mushrooms
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="text-gray-600 text-sm mb-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <p className="text-green-700 font-bold text-lg mb-4">
                  ₹{product.price}
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
