import { useState } from 'react'
import './App.css'
import Navbar from './Componenets/Navbar'
import Hero from './Componenets/Hero'
import Companies from './Componenets/Companies'
import Categories from './Componenets/Categories'
import Stats from './Componenets/States'
import Footer from './Componenets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Navbar/>
      <main className="container">
        <Hero />
        <Companies/>
        <Categories/>
        <Stats/>      
        </main>
        <Footer/>
    </div>
    </>
  )
}

export default App
