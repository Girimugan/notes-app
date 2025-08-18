import React, { useState } from 'react';
import Reacttemp from './core-concepts/Reacttemp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

// import './MyForm.css';
import Demostate from './Demostate';
import Element from './Element';
import Usetable from './Usetable';
import Welcome from './Welcome';
import UserContext from './UserContext';
import { ThemeContext } from './ThemeContext';
import Dashboard from './Dashboard';
import { StyleContext } from './StyleContext';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import TodoReducer from './TodoReducer';
import GlobalContext from './GlobalContext';
import ContactForm from './ContactForm';
import FormData from './FormData';
import Navbar from './Route project000/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import Contact from './Pages/Contact';

import Products from './Products';
// import DemoProfile from './DemoProfile';
// import Setting from './Setting';

function App() {

  // const style = {
  //   color: "red",
  //   border: "2px solid blue",
  //   backgroundColor: "Yellow",
  //   padding: "10px",
  //   margin: "10px",
  // };

  // const [style, setStyle] = useState({

  //   color: " #FF6F61",
  //   backgroundColor: " #F7CAC9",
  //   border: "2px solid: #92A8D1",
  //   padding: "10px",
  //   margin: "10px",
  // });

  const [style, setStyle] = useState();


  return (
    <>
      <BrowserRouter>
        <header className="header">
          <div className="left-title">Route</div>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/user">User</Link>
            <Link to="/contact">Contact</Link>
            <button className="nav-btn">Click Me</button>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="products" element={<Products />}>
            {/* <Route path="profile" element={<DemoProfile />} /> */}
            {/* <Route path="setting" element={<Setting />} /> */}
          </Route>
        </Routes>


      </BrowserRouter>





      {/* <Demoslide/> */}





      {/* <Reacttemp /> */}
      {/* <Element /> */}
      {/* <Demostate /> */}
      {/* <Usetable /> */}
      {/* <Welcome /> */}
      {/* 
      <UserContext.Provider value={"Giri"}>
        <ThemeContext.Provider value={"red"}>
          <Dashboard />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* <StyleContext.Provider value={{ style, setStyle }}>
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
      </StyleContext.Provider> */}

      {/* <GlobalContext.Provider value={{ style, setStyle }}>
        <TodoReducer />
      </GlobalContext.Provider> */}

      {/* <ContactForm /> */}
      {/* <FormData /> */}



    </>
  );

}

export default App;
