import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import SymptomPage from './components/SymptomPage'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
      <Header />
      <Hero />
      <SymptomPage />
      <Stats />
      <Footer />
    </div>
        
    </>
  )
}

export default App
