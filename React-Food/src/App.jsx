import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { UserProgressProvider } from './store/UserProgressContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <UserProgressProvider>
        <CartContextProvider>
        {isLoggedIn && <Header />}  
          <Routes>
            
          <Route 
              path="/" 
              element={isLoggedIn ? <Meals /> : <Login onLogin={() => setIsLoggedIn(true)} />} 
              />
            <Route path="/cart" element={isLoggedIn ? <Cart /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/checkout" element={isLoggedIn ? <Checkout /> : <Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/signup" element={<SignUp />} />
            
          </Routes>
          <Cart/>
          <Checkout/>
        </CartContextProvider>
      </UserProgressProvider>
    </BrowserRouter>
  );
}

export default App;
