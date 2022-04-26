import React, { useState } from 'react';
import {
  NavLink,
  Link,
} from 'react-router-dom';
import { useStore } from '../../store';

const RicomaIcon = require(  '../../assets/img/ricoma-icon.svg' );

const HomeIcon = require('../../assets/img/home-icon.svg');
const HomeIconGray = require('../../assets/img/home-icon-gray.svg');

const ProductsIcon = require('../../assets/img/products-icon.svg');
const ProductsIconGray = require('../../assets/img/products-icon-gray.svg');

const AboutIcon = require('../../assets/img/about-icon.svg');
const AboutIconGray = require('../../assets/img/about-icon-gray.svg');

const MobileMenu: React.FC = () => {

  const mobileMenuIsOpen: boolean = useStore((state: any) => state.mobileMenuIsOpen);

  return (
    <div
      className={`
        pointer-events-auto flex fixed right-0 md:hidden flex-col items-start 
        bg-primary-blue w-80 h-full ${ mobileMenuIsOpen ? 'translate-x-0' : 'translate-x-full' } 
        border-l border-white transition-all duration-150 ease-in-out
      `}>

      <div className='flex items-center w-full p-6'>
        <img src={ RicomaIcon.default } alt='Ricoma Icon'></img>
        <h3 className='ml-3 text-white font-extrabold'>Distributor Portal</h3>

        {/* mobile menu button */}
        <button 
          className='menu-hamburger md:hidden ml-auto' 
          type='button' 
          title='Menu Button'
          onClick={ useStore((state: any) => state.closeMobileMenu) }
        >
          <span className='hamburger-inner'></span>
        </button>

      </div>

      <ul className='pl-2.5'>

      <li>
          <NavLink 
            to='/' 
            className={ 
              ({ isActive }) => 
                isActive 
                  ? 'flex items-center text-sm text-white px-6 py-4 rounded-md bg-primary-blue-hover w-56' 
                  : 'flex items-center text-sm text-custom-gray px-6 py-4 rounded-md hover:bg-primary-blue-hover w-56' 
            }>
              { ({ isActive }) => 
                  (<span className='flex items-center'>
                    <img src={ isActive ? HomeIcon.default : HomeIconGray.default } alt='Home Icon'></img>
                    <span className='ml-6'>Home</span>
                  </span>)
              }
          </NavLink>
        </li>

        <li>
          <NavLink 
            to='/products' 
            className={ 
              ({ isActive }) => 
                isActive 
                  ? 'flex items-center text-sm text-white px-6 py-4 rounded-md bg-primary-blue-hover w-56' 
                  : 'flex items-center text-sm text-custom-gray px-6 py-4 rounded-md hover:bg-primary-blue-hover w-56' 
            }>
              { ({ isActive }) => 
                  (<span className='flex items-center'>
                    <img src={ isActive ? ProductsIcon.default : ProductsIconGray.default } alt='Home Icon'></img>
                    <span className='ml-6'>Products</span>
                  </span>)
              }
          </NavLink>
        </li>

        <li>
          <NavLink 
            to='/about' 
            className={ 
              ({ isActive }) => 
                isActive 
                  ? 'flex items-center text-sm text-white px-6 py-4 rounded-md bg-primary-blue-hover w-56' 
                  : 'flex items-center text-sm text-custom-gray px-6 py-4 rounded-md hover:bg-primary-blue-hover w-56' 
            }>
              { ({ isActive }) => 
                  (<span className='flex items-center'>
                    <img src={ isActive ? AboutIcon.default : AboutIconGray.default } alt='Home Icon'></img>
                    <span className='ml-6'>About</span>
                  </span>)
              }
          </NavLink>
        </li>

      </ul>

      <div className='flex flex-col px-10 mt-auto mb-6 text-white'>
        <Link className='mb-2' to='#'>Terms of Service</Link>
        <Link to='#'>©2022 Ricoma International</Link>
      </div>
    </div>
  );
};

export default MobileMenu;