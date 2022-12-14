import * as React from "react";
import Footer from "./Footer/Footer";
import LoginFrom from "./Login/LoginPage";
import NavbarScroller from "./Navbar/Nav";
import Home from './home/home';
import About from './page/about'
import Contact from './page/contact/contact'
import Rules from './rules/rules'
import SplitScreen from './Login/LoginPage'

// import Register from "./Register/Register";
// import { Register } from "./Register/Register";
import Register from "./Register/Register";
import ProtectedRoute from "./Login/ProtectedRouter";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buildinginfo from "./Building/Building";
import Simple from "./Navbar/Nav";
import Dashbord from "./dashbord/main";



const navigation = {
  brand: { name: 'Rentar', to: '/' },
  links: [
    { name: 'Login', to: '/' },
    { name: 'Building', to: '/Building' },
    { name: 'Tenant', to: '/tenant' }
  ]
};
function App() {
  const { brand, links } = navigation;
  return (
    <>
   
    {/* <NavbarScroller ={brand} links={links} /> */}
    
    < Simple />
    
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashbord" element={<Dashbord/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/login"    element={<SplitScreen/>}/>
        <Route path="/Building" element={<Buildinginfo/>}/>
        <Route path="/page" element={<About/>}/>
        <Route path="/page/contact" element={<Contact/>}/>
        <Route path="/rules" element={<Rules/>}/>
        {/* <Route el ement={<ProtectedRoute />}/> */}
          
       </Routes>
      </BrowserRouter>
      <Footer/>
      
    </>
  );
}

export default App;