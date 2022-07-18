import React from 'react';
import logo from './logo.svg';
import { Fragment, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import AppNavbar from './components/AppNavbar';
import Register from './pages/Register';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductView from './components/ProductView'
import MyOrders from './pages/MyOrders';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NewProduct from './pages/NewProduct';
import AdminProducts from './pages/AdminProducts';
import AdminProductView from './components/AdminProductView'
import AllOrders from './pages/AllOrders';
import AdminDashboard from './pages/AdminDashboard';
import NumberOfOrders from './components/NumberOfOrders'
import './App.css';
import { UserProvider } from './UserContext';

function App() {
  // State hook for the user state that's defined for a global scope
  const [user, setUser] = useState({
    // email: localStorage.getItem('email')
    id: null,
    isAdmin: null
  })

  // Function for clearing local sorage on logout
  const unsetUser = () => {
    localStorage.clear();
  }

  // Used to check if the user info is properly stored during login and localStorage info is cleared upon logout
  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
          <AppNavbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductView />} />
              <Route path="/register" element={<Register />} />
              <Route path="/myorders" element={<MyOrders />} />
              <Route path="/login" element={<Login />} />           
              <Route path="/logout" element={<Logout />} />
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="/adminproducts" element={<AdminProducts />} />
              <Route path="/adminproducts/:productId" element={<AdminProductView />} />
              <Route path="/allorders" element={<AllOrders />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              {/*<Route path="*" element={<Error />} />*/}
            </Routes>
          </Container>
      </Router>
    </UserProvider> 
  );
}

export default App;
