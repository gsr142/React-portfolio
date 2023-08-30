
import './App.css';
import {Outlet} from 'react-router-dom';
import './assets/components/Navbar'
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
