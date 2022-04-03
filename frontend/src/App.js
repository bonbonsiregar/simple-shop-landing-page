import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import Products from './screens/Products'
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';


const App = () => {
  return (
  <BrowserRouter>
    <Header />
    <main className='py-3'>
      <Container>
        <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/product/:id' element={<Products/>} exact />
        <Route path='/login' element={<LoginScreen/>} exact />
        <Route path='/cart/:id' element={<CartScreen/>} />
        <Route path='/cart' element={<CartScreen/>} />
        </Routes>
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
