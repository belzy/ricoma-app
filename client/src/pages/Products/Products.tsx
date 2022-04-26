import React from 'react';
import {
  ProductCard
} from '../../components';
import { useStore } from '../../store';

const ProductsBackground = require(  '../../assets/img/products-background.png' );

const Products: React.FC = () => {

  const products = useStore((state: any) => state.products);

  return (
    <>
      <section className='max-w-[1300px] mx-auto py-20 px-7'>

        <h1 className='text-primary-blue font-bold text-[2.5rem] md:text-6xl mb-5'>Dui augue lectus</h1>

        <p className='text-primary-blue font-light text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa leo<br /> nec ultrices sit risus nisi non fermentum morbi. Tristique.</p>

        <div className='flex flex-col md:flex-row justify-between mt-20'>

          { products.map((product: any, i: number) => {

            return (
              <ProductCard 
                key={ i } 
                product={ product }
                src={ product.image }
                alt={ product.model }
              />
            );
          }) }

        </div>


      </section>
      <div style={{ marginTop: '-420px', backgroundImage: `url(${ProductsBackground.default })` }} className='h-96 bg-cover bg-accent-orange'></div>
    </>
  );
};

export default Products;