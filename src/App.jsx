import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar'
import Home from './pages/home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route  index element={ <Home/> }/>
        <Route path='about' element={ <About/> }/>
        <Route path='portfolio' element={ <Portfolio/> }/>
        <Route path='contact' element={ <Contact/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
