
import create from 'zustand';

const ProductImageOne = require(  './assets/img/product-image-1.png' );
const ProductImageTwo = require(  './assets/img/product-image-2.png' );
const ProductImageThree = require(  './assets/img/product-image-3.png' );

export const useStore = create(set => ({
  mobileMenuIsOpen: false,
  openMobileMenu: () => set((state: any) => ({ mobileMenuIsOpen: true })),
  closeMobileMenu: () => set((state: any) => ({ mobileMenuIsOpen: false })),
  products: [{
    image: ProductImageOne.default,
    model: 'EM-1010',
    type: 'Starter Embroidery Machine',
    needleCount: '10 NEEDLE',
    size: 'SINGLE-HEAD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.',
    colors: ['#22144A', '#60C250', '#370405'],
    salePrice: '$5999',
    price: '$7500'
  }, {
    image: ProductImageTwo.default,
    model: 'TC-1501',
    type: 'Commercial Embroidery Machine',
    needleCount: '15 NEEDLE',
    size: 'SINGLE-HEAD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.',
    colors: ['#22144A', '#60C250', '#370405'],
    salePrice: '$7999',
    price: '$7500'
  }, {
    image: ProductImageThree.default,
    model: 'MT-1501',
    type: 'Commercial Embroidery Machine',
    needleCount: '10 NEEDLE',
    size: 'SINGLE-HEAD',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet volutpat nam ultrices sit cursus. Luctus diam ipsum amet sit.',
    colors: ['#22144A', '#60C250', '#370405'],
    salePrice: '$8999',
    price: '$7500'
  }],
  cart: [],
  addProductToCart: (product: unknown) => set((state: any) => ({ cart: [ ...state.cart, product ] }))
}));