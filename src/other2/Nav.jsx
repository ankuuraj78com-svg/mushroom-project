import React from 'react'

const Nav = () => {
  return (
    <div>
      <header className="bg-green-900 text-white py-4 shadow-lg">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
    
    
    <h1 className="text-2xl font-bold">🍄 Pkari Mushroom</h1>

    
    <nav className="space-x-6 hidden md:block">
      <a href="/" className="hover:text-green-300">Home</a>
       {/* <a href="/Space" class="hover:text-green-300">Space</a>  */}
      <a href="/Products" className="hover:text-green-300">Products</a>
      <a href="/Contact" className="hover:text-green-300">Contact</a>
      <a href="/Shopnow" className="bg-green-600 px-4 py-2 rounded-full hover:bg-green-500" >Shopnow</a>
    
    
    
     
    </nav>

    
    
  </div>
</header>
    </div>
  )
}

export default Nav