
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


import About from './components/About';
import Single from './components/Single';
import Shop from './components/Shop';
import Index from './components/Index';
import Posts2 from './components/Posts2';
import Contact from './components/contact';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';
import CheckOut from './components/Checkout';
import Singlepost from './components/Singlepost';
import Booking from './components/Booking';
import Products from './components/Products';
import { createContext, useState } from 'react';
import Product from './components/Product';
import Blog from './components/Blog';
import Share from './components/Share';
export const userContext = createContext();
// import Booking from './components/Booking';
function App() {
  
  const [userData, setUserData] = useState([]);


  return (
    <Router>
       <userContext.Provider value={{ userData, setUserData }}>
      <NavBar />
    <Routes>

    <Route path="/" element={<Index />} />
    {/* <Route path="/post/:id" element={<Singlepost />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/Posts2" element={<Posts2 />} />
      <Route path="/Checkout" element={<CheckOut />} />

      <Route path="/book" element={<Booking />} />

      {/* <Route path="/book" element={<Booking />} /> */}
      {/* <Route path="/book" element={<Booking />} /> */}
      {/* <Route path="/book" element={<Booking />} /> */}
      <Route path="/catogry/:id" element={<Products />} />
      <Route path="/book/:id" element={<Booking />} />

      <Route path="/Product/:id" element={<Product />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/share" element={<Share />} />

      <Route path="/Product/:id" element={<Product />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/share" element={<Share />} />

{/* routes */}
<Route path="/about" element={<About />} />
<Route path="/post/:id" element={<Single />} />
<Route path="/shop" element={<Shop />} />

    </Routes>
    <Footer />
    </userContext.Provider>
  </Router>

  );
}

export default App;
