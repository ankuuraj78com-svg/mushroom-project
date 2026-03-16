import React from 'react'
 
const Footer = () => {
  return (
    <>
    <footer class="bg-green-900 text-white py-10">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

    
    <div>
      <h4 class="text-xl font-bold">🍄 Planet Mushroom</h4>
      <p class="mt-2 text-gray-300">Organic mushroom farming & supply.</p>
    </div>

    
    <div>
      <h4 class="font-bold">Quick Links</h4>
      <ul class="mt-2 space-y-2 text-gray-300">
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </div>


    <div>
      <h4 class="font-bold">Contact</h4>
      <p class="text-gray-300">📞 +91 98765 43210</p>
      <p class="text-gray-300">📧 info@mushroom.com</p>
    </div>

  </div>

  <p class="text-center text-gray-400 mt-6">© 2026 Planet Mushroom</p>
</footer>

    </>
  
  )
}

export default Footer