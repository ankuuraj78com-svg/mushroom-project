import React from 'react'

const Hero = () => {
  return (
    <div>
       <section class="py-12 bg-white">
  <h3 class="text-3xl font-bold text-center text-green-800">Our Mushrooms</h3>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8 px-6">

    
    <div class="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <img src="ill.webp" class="rounded-lg"/>
      <h4 class="text-xl font-bold mt-4">Button Mushroom</h4>
      <p class="text-gray-600">Fresh and healthy mushrooms.</p>
    </div>

    <div class="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <img src="oys.webp" class="rounded-lg"/>
      <h4 class="text-xl font-bold mt-4">Oyster Mushroom</h4>
      <p class="text-gray-600">Rich in protein and vitamins.</p>
    </div>

    <div class="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <img src="OIP.jpg" class="rounded-lg"/>
      <h4 class="text-xl font-bold mt-4">Shiitake Mushroom</h4>
      <p class="text-gray-600">Used in Chinese and Korean dishes.</p>
    </div>

  </div>
</section>
</div>
    

    
  )
}

export default Hero