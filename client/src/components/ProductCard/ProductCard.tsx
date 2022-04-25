import React, { useState } from 'react';
import { useStore } from '../../store';

type Props = {
  product: any
  src: string
  alt: string
}

const ProductCard: React.FC<Props> = ({ product, src, alt }) => {

  const [selectedColor] = useState(0);
  const addProductToCart = useStore((state: any) => state.addProductToCart)
  const cartProducts = useStore((state: any) => state.cart);

  return (
    <div className='rounded-2xl w-full md:w-96 md:mx-1 mb-9'>

      <div className='bg-custom-gray h-56 w-full rounded-t-2xl flex justify-center' >
        <img className='relative' width='220' style={{ top: '16px' }} src={ src } alt={ alt }></img>
      </div>

      <div className='py-6 px-5 bg-white rounded-b-2xl'>
        <h3 className='font-bold text-2xl text-primary-blue'>{ product.model }</h3>
        <h6 className='font-semibold text-sm text-primary-blue'>{ product.type }</h6>

        <div className='flex font-semibold text-sm text-accent-blue mt-1 mb-3'>
          <h6 className='mr-7'>{ product.needleCount }</h6>
          <h6>{ product.size }</h6>
        </div>

        <p className='text-custom-gray-2'>{ product.description }</p>

        <div className='flex mt-2'>
          { product.colors.map((color: string, i: number) => {

            return (
              <button key={ i } className='w-8 h-8 rounded-full mr-4' style={{ backgroundColor: color }}>{}</button>
            );

          }) }
        </div>


          {/* card bottom */}
          <div className='flex items-center mt-7'>
            <h5 className='mr-4 text-primary-blue font-semibold text-[1.75rem]'>{ product.salePrice }</h5>
            <h6 className='text-xl text-accent-orange line-through'>{ product.price }</h6>

            <button 
              className='ml-auto py-3 px-7 bg-accent-orange font-bold text-sm text-white tracking-widest rounded'
              onClick={ () => {

                addProductToCart({ 
                  image: src, 
                  model: product.model, 
                  type: product.type, 
                  needleCount: product.needleCount, 
                  size: product.size,
                  colors: product.colors,
                  selectedColor,
                  price: product.salePrice,
                });

              }}
            >ORDER
            </button>
          </div>

      </div>
    </div>
  );
};

export default ProductCard;