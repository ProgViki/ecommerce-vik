import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Products from './components/Products'
import Banner from './components/Banner'
import { Toaster } from 'react-hot-toast'
import Cart from './components/Cart'
import { useState } from 'react'

function App() {
  const [openCart, setOpenCart] = useState(false);


  return (
    <div>
      <Navbar setOpenCart={setOpenCart}/>
      {openCart && <Cart setOpenCart={setOpenCart}/>}
      <Home />
      <Services />
      <Products />
      <Banner />
      <Toaster position='bottom-center' reverseOrder={false} />
    </div>
  )
}

export default App
