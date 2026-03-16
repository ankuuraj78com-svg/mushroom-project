import React from 'react'
import Hero from './Hero'
import './Home.css'

const Home = () => {
  return (
    <>
    <section class="bg-green-100 py-16">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
    
    
    <div class="md:w-1/2">
      <h2 class="text-4xl font-bold text-green-900">
        Fresh Organic Mushrooms
      </h2>
      <p class="mt-4 text-gray-700">
        We grow healthy, organic and chemical-free mushrooms for you.
      </p>
      <button class="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600">
        Explore Products
      </button>
    </div>

    
    <img src="mush.jpg" class="md:w-1/2 mt-8 md:mt-0 rounded-xl shadow-lg"/>
  </div>
</section>

 <Hero/>



 </>
  )
}

export default Home