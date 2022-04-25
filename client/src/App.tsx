import React from "react";
import {
  Home,
  Products,
} from './pages';
import {
  Routes,
  Route
} from 'react-router-dom';
import { 
  Footer,
  MobileMenu, 
  Navbar 
} from "./components";

const App = (): React.ReactElement => (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> } />

      <Route path='/products' element={ <Products /> } />

      <Route path='' element={ null } />
    </Routes>
    <Footer />

    <div className='absolute fixed h-screen w-full top-0 pointer-events-none overflow-y-hidden'>
      <MobileMenu />

    </div>
  </div>
);

export default App;