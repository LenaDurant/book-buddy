import Products from './components/Products.jsx';
import LoginForm from './components/Login.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
const [bookList, setBookList] = useState([])
const [token, setToken] = useState("");
  
return (
  <Router>
    <nav className="navigate">
      <a href="/">Homepage</a>
      <a href="/account">My Account</a>
      <a href="/login">Login</a>
    </nav>
      <main>
     <h1>Books for Buddies</h1>
     
        <Routes>
          <Route path="/login" element={ <LoginForm /> } />
          <Route path="/" element={ <Products /> } />
          <Route path="/products/:productId" element={ <ProductDetails /> } />
        </Routes>
     </main>
    
  </Router>
  )
}
export default App;
