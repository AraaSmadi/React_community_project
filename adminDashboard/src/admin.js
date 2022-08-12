import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';


import Saidebar from './components/sidebar';
import Header from './components/header';
import Dashboard from './components/dashboard';
import Footer from './components/footer';
import Users from './components/Users/users';
import UpdateUser from './components/Users/updateUser';

import Services from './components/services/Services';
import UpdateServices from './components/services/UpdateServices';

import Categoriese from './components/categury/categoriese';
import UpdateCategoriese from './components/categury/UpdateCategoriese';


import Books from './Books/Books';
import addBook from './Books/addBook';
import UpdateBook from './Books/updatebook';

import Posts from './components/posts/Posts';

import Chat from './chat/chat';



function Admin() {
  return (
    <>
      
        <div class="container-scroller">

          <Header />
          <div class="container-fluid page-body-wrapper">
            <Saidebar />
            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UpdateUser />} />

              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<UpdateServices />} />

              <Route path="/categoriese" element={<Categoriese />} />
              <Route path="/categoriese/:id" element={<UpdateCategoriese />} />


              <Route path="/books" element={<Books />} />
              {/* <Route path="/add-book" element={<addBook />} /> */}

              <Route path="/books/:id" element={<UpdateBook />} />

              <Route path="/posts" element={<Posts />} />

              {/* <Route path="/chat" element={<Chat />} /> */}



              {/* <Route path="/contact" element={<  />} />
        <Route path="/about" element={<About />} />
        <Route path="/categury" element={<Cat />} /> */}

            </Routes>

          </div>

          < Footer />

        </div>

      







    </>

  );
}

export default Admin;