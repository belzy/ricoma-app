import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  NavLink,
} from '../';
import { useStore } from '../../store';

const RicomaLogo = require(  '../../assets/img/ricoma-logo97x25.svg' );
const ShoppingCart = require(  '../../assets/img/shopping-cart.svg' );
const CloseIcon = require(  '../../assets/img/close-icon.svg' );


type CartMenuProps = {
  cartMenuIsOpen: boolean
  setCartMenuIsOpen: Function
};

const CartMenu: React.FC<CartMenuProps> = ({ cartMenuIsOpen, setCartMenuIsOpen }) => {

  const cartProducts = useStore((state: any) => state.cart);
  const totalPrice = cartProducts.reduce((total: number, product: any) => {
    return total + parseInt(product.price.substring(1));
  }, 0)

  return (
    <div className={ `${ !cartMenuIsOpen && 'hidden' } fixed top-0 left-0 md:left-auto h-screen w-screen md:w-[480px] md:h-[657px] md:absolute bg-white md:top-[80px] md:right-[80px] xl:right-[180px] z-10 shadow-lg p-10 flex flex-col` }>

      <div className='flex justify-between pb-3 border-b border-[#F0F0F5]'>
        <h3>Your Cart</h3>
        <button
          className='p-1'
          onClick={ () => setCartMenuIsOpen(!cartMenuIsOpen) }
          title='Close Button'
        >
          <img src={ CloseIcon.default } alt='' className='w-[15px] h-[15px]'></img>
        </button>
      </div>

      <div className='h-[410px] overflow-y-scroll px-1'>
      { cartProducts.map((product: any, i: number) => {
          return (
            <div className='flex my-6' key={ i }>

              <img width='80' className='mr-5' src={ product.image } alt=''></img>

              <div className='w-full'>

                <div className='flex justify-between'>
                  <h3 className='text-xl text-primary-blue font-extrabold'>{ product.model }</h3>
                  <h6 className=''>{ product.price }</h6>
                </div>
                <h5 className='text-sm text-[#565657]'>{ product.type }</h5>
                <h5 className='text-sm text-[#565657]'>{ product.needleCount.toLowerCase() } | { product.size.toLowerCase() }</h5>


                <div className='flex justify-between mt-3'>

                  {/* QUANTITY */}
                  <div className='flex'>
                    <button className='rounded-full bg-[#F0F0F5] text-[#6E70FF] w-[25px] h-[25px] flex justify-center items-center'>+</button>
                    <span className='mx-3'>{ product.quantity }</span>
                    <button className='rounded-full bg-[#F0F0F5] text-[#6E70FF] w-[25px] h-[25px] flex justify-center items-center'>-</button>
                  </div>

                  {/* COLORS */}
                  <div className='flex items-center'>
                    <h6 className='mr-3 font-light text-[#474747]'>Colors</h6>

                    <div className='flex rounded-full bg-[#D0D0D0] p-1'>
                      { product.colors.map((color: string, i: number) => {
                        
                          return (
                            <button title='Color Button' key={ i } className='rounded-full w-[19px] h-[19px] mx-[2px]' style={{ backgroundColor: color }}></button>
                          )
                        }) }
                    </div>
                  </div>

                </div>

              </div>
              
            </div>
          )
      }) }
      </div>

      {/* ORDER TOTAL */}
      <div className='flex justify-between pt-3 border-t border-[#F0F0F5] text-[1.375rem]'>
        <h4>Order Total</h4>
        <span>${ totalPrice }</span>
      </div>

      <button className='bg-secondary-blue w-full md:w-[216px] py-3 rounded text-white text-sm mx-auto mt-6'>Checkout</button>

    </div>
  );
};

const Navbar = (): React.ReactElement => {
  const [cartMenuIsOpen, setCartMenuIsOpen] = useState(true);

  return (
    <nav className='bg-primary-blue'>
      <div className='xl:container mx-auto px-7 flex justify-between items-center h-16'>

        {/* Logo */}
        <Link to='/'>
          <img src={ RicomaLogo.default } alt='Ricoma Logo'></img>
        </Link>

        {/* nav menu */}
        <ul className='hidden md:flex justify-between items-center w-96'>
          <li><NavLink to='/' end>HOME</NavLink></li>
          <li><NavLink to='/products'>PRODUCTS</NavLink></li>
          <li><NavLink to='/about'>ABOUT</NavLink></li>
        </ul>

        <div className='flex justify-between items-center w-32'>
          {/* shopping cart */}
          <span>
            <button
              onClick={ () => setCartMenuIsOpen(!cartMenuIsOpen) }
            >
              <img src={ ShoppingCart.default } alt='Shopping Cart Icon'></img>
            </button>

            <CartMenu 
              cartMenuIsOpen={ cartMenuIsOpen }
              setCartMenuIsOpen={ setCartMenuIsOpen }
            />
          </span>

          {/* mobile menu button */}
          <button 
            className='navbar-hamburger md:hidden' 
            type='button' 
            title='Menu Button'
            onClick={ useStore((state: any) => state.openMobileMenu) }>
            <span className='hamburger-inner'></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;