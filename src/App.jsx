import {useState} from 'react'
import './App.css';
import { About } from './assets/components/pages/About';
import { Navbar } from './assets/components/Navbar';
import { Footer } from './assets/components/Footer'
function App() {

  return (
    <div>
    <Navbar />
    <About />
    </div>
  )
}

export default App;
