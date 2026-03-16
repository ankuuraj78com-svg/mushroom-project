
// import './App.css'


import Nav from "./other2/Nav"
// import Hero from "./other2/Hero"
import Footer from "./other2/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./other2/Home"
import Products from"./other2/Products"
import Contact from"./other2/Contact"
import Shopnow from "./other2/Shopnow"
function App() {
 

  return (
    <>

   <BrowserRouter>
      <Nav/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        {/* <Route path="/Space" element={<Space/>}/> */}
        <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Shopnow" element={<Shopnow/>}/>
        
        
      </Routes>
     

      
      <Footer/>
      </BrowserRouter> 
  
    </>
  )
}

export default App
