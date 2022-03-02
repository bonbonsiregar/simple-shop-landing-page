import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import Products from './screens/Products'


const App = () => {
  return (
  <BrowserRouter>
    <Header />
    <main className='py-3'>
      <Container>
        <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/product/:id' element={<Products/>} exact />
        {/* <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={Products} exact /> */}
        </Routes>
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
