import './App.css';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from  './components/Home'
import About from  './components/About'
import Store from  './components/Store'
import ShoppingCartProvider from './context/ShoppingCartContext'
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/store' element={<Store />} />
          <Route path='about' element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
