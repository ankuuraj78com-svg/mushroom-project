import React from 'react'

const Products = () => {
  return (
    <div>
    

    <div className="font-[Poppins] bg-gray-50 text-gray-700">

      {/* HERO SECTION */}
      <header
        className="h-[90vh] flex items-center justify-center text-center text-white px-5 bg-cover bg-center relative "
        style={{ backgroundImage: "url('mush.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">
            PAKRI MUSHROOM
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Fresh • Organic • Naturally Grown Mushrooms
          </p>
          <div className="space-x-3">
            <a
              href="#"
              className="px-6 py-3 bg-green-700 rounded-full font-medium hover:bg-green-800 transition"
            >
              Order Now
            </a>
            <a
              href="#about"
              className="px-6 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:text-green-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-10">
          WHY PAKRI MUSHROOM?
        </h2>
        <div className="max-w-3xl mx-auto text-center leading-relaxed">
          <p>
            Pakri Mushroom is produced using organic mushroom production
            methods without harmful chemicals or synthetic fertilizers.
            This means the mushrooms are healthier, safer, and more nutritious.
            We focus on freshness, quality, and natural taste while supporting
            sustainable farming and protecting the environment. 🍄
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-16 px-6 md:px-20 bg-green-50">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-12">
          Our Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:scale-105 transition duration-300 ">
            <img
              src="oys.webp"
              alt="Oyster Mushroom"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">
              Oyster Mushroom
            </h3>
            <p className="text-gray-600">
              Fresh and nutritious, perfect for daily cooking.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:scale-105 transition duration-300">
            <img
              src="OIP.jpg"
              alt="Button Mushroom"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">
              Button Mushroom
            </h3>
            <p className="text-gray-600">
              Soft texture and rich taste for all dishes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-5 text-center hover:scale-105 transition duration-300">
            <img
              src="OIP.webp"
              alt="Milky Mushroom"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold">
              Milky Mushroom
            </h3>
            <p className="text-gray-600">
              Long-lasting, full of flavor and nutrients.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-12">
          Health Benefits
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            "🍄 High in Protein",
            "❤️ Boosts Immunity",
            "🌱 100% Natural",
            "⚡ Low Fat, High Energy",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-green-700 text-white py-8 px-4 rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      {/* <section className="bg-green-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Enjoy Fresh Mushrooms?
        </h2>
        {/* <a
          href="#"
          className="px-6 py-3 bg-white text-green-700 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </a> */}
      {/* </section>

      {/* FOOTER */}
      {/* <footer className="bg-black text-gray-400 text-center py-5 text-sm">
        © 2026 Pakri Mushroom. All Rights Reserved.
      </footer> */} 

    </div>
  





    </div>
  );
};

export default Products