import React from "react";
import {
  Home,
  Products,
  About,
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

// Add favicon
const Favicon = require('./assets/img/ricoma-favicon.svg');
(() => {

  const head = document.head;
  const faviconTag = document.createElement('link');
  faviconTag.rel = 'icon';
  faviconTag.type = 'image/svg';
  faviconTag.href = `${ Favicon.default }`;
  head.appendChild(faviconTag);

})();

const App = (): React.ReactElement => (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> } />

      <Route path='/products' element={ <Products /> } />

      <Route path='/about' element={ <About /> } />
    </Routes>
    <Footer />

    <div className='absolute fixed h-screen w-full top-0 pointer-events-none overflow-y-hidden'>
      <MobileMenu />

    </div>
  </div>
);

export default App;