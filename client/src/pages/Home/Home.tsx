import React, { startTransition } from 'react';
import { Video } from '../../components';

const HeaderBackground = require('../../assets/img/header-background.png');
const VideoThumbnail = require('../../assets/img/video-thumbnail-2.png');
const Logos = require('../../assets/img/logos.png');
const QuoteIcon = require('../../assets/img/quote-icon.svg');
const Stars = require('../../assets/img/stars.png');

const Form: React.FC = () => {

  return (

    <form className='bg-white p-7 rounded-b-[10px]'>

      <h3 className='text-primary-blue font-bold md:font-medium md:text-[1.938rem] text-2xl text-center mb-7'>Fill out the form to secure the best deal!</h3>

      <div className='flex'>

        <div className='mr-1 flex-1'>
          <label className='font-bold text-[#515152] ml-2'>First Name</label><br />

          <input 
            name='first-name-input' 
            type='text' 
            placeholder='Enter your first name' 
            className='px-5 py-3 rounded-[5px] border border-[#315787] mt-1 w-full' 
          />
        </div>

        <div className='ml-1 flex-1'>
          <label className='font-bold text-[#515152] ml-2'>Last Name</label><br />

          <input 
            name='last-name-input' 
            type='text' 
            placeholder='Enter your last name' 
            className='px-5 py-3 rounded-[5px] border border-[#315787] mt-1 w-full' 
          />
        </div>

        

      </div>

      <div className='flex mt-4'>
        <div className='mr-1 flex-1'>
          <label className='font-bold text-[#515152] ml-2'>Email Address</label><br />

          <input 
            name='email-address-input' 
            type='text' 
            placeholder='Enter your email address' 
            className='px-5 py-3 rounded-[5px] border border-[#315787] mt-1 w-full' 
          />
        </div>

        <div className='ml-1 flex-1'>
          <label className='font-bold text-[#515152] ml-2'>Phone Number</label><br />

          <input 
            name='phone-phone-input' 
            type='text' 
            placeholder='Enter your phone number' 
            className='px-5 py-3 rounded-[5px] border border-[#315787] mt-1 w-full' 
          />
        </div>
      </div>

      <div className='flex mt-4'>

        <div className='flex-1'>
          <label className='font-bold text-[#515152] ml-2'>Country</label><br />

          <input 
            name='country-input' 
            type='text' 
            placeholder='Enter your country' 
            className='px-5 py-3 rounded-[5px] border border-[#315787] mt-1 w-full' 
          />
        </div>

      </div>

      <button type='submit' className='py-3 bg-gradient-to-r from-accent-gradient-start to-accent-gradient-end w-full mt-5 font-bold text-[1.875rem] text-white rounded-[4px]'>Get a free quote</button>

      <img className='mx-auto mt-5' src={ Logos.default } alt=''></img>

      <div className='p-5 bg-[#F3F4F5] w-full mt-4'>

        <div className='flex justify-between mb-[-25px]'>
          <h5 className='font-extrabold text-sm text-black'>Louis Marshall</h5>

          <div className='bg-accent-orange w-[51px] h-[51px] relative top-[-34px] right-0 pt-[16px] pl-[11px]'><img src={ QuoteIcon.default } alt=''></img></div>
        </div>

        <p className='text-black leading-[24px] mb-4'>I love my Ri 1000. I got one a month or so ago and have printed about 1,000 shirts so far! Great product!</p>

        <img src={ Stars.default } alt=''></img>
      </div>

      <p className='text-center text-[0.625rem] text-[#515152] max-w-[415px] mx-auto mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus, faucibus sit viverra cras aliquam parturient. Interdum amet imperdiet sit feugiat donec. Proin.</p>

    </form>

  );
};

const Home = (): React.ReactElement => {
  return (
    <div>

      {/* HEADER */}
      <header className='min-h-[600px] bg-cover' style={{ backgroundImage: `url(${ HeaderBackground.default })` }}>

        <div className='max-w-[1300px] mx-auto px-7 pt-4 flex flex-col md:flex-row justify-center'>

          <div className='mb-5 flex-1 md:mr-3'>
            <h1 className='font-bold text-white text-[2.5rem] md:text-6xl mb-7'>Dui augue lectus<br />in ut at lorem</h1>

            <p className='hidden md:block text-white mb-5 font-light text-2xl leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor risus commodo. Tempus molestie morbi ultrices nunc. <span className='font-bold bg-[#FCD002] text-primary-blue'>Semper nam ridiculus duis bibendum risus, arcu arcu.</span></p>

            <p className='hidden md:block text-white font-light text-2xl leading-9 mb-5'>Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem condimentum posuere cursus quis risus. Mauris, auctor ridiculus blandit lacus. <span className='font-bold bg-[#FCD002] text-primary-blue'>Porttitor diam a amet pharetra tellus, senectus augue. Id sed a quis morbi ac odio cursus metus sit. Sapien ut non eu non egestas non mauris.</span> Elit, scelerisque mauris aenean justo. </p>

            <span className='hidden md:block'><Video videoSrc='' thumbnailSrc={ VideoThumbnail.default } width='260px' height='160px' thumbnailAlt='' /></span>
          </div>

          <div className='flex-1 md:ml-3'>
            <Form />
          </div>

          <span className='md:hidden block flex justify-center mt-6 mb-6'><Video videoSrc='' thumbnailSrc={ VideoThumbnail.default } width='259px' height='160px' thumbnailAlt='' /></span>

          <p className='md:hidden block text-white mb-5 font-light text-2xl leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate bibendum et in mattis nec duis nec, magna. Nunc, mattis purus dolor risus commodo. Tempus molestie morbi ultrices nunc. <span className='font-bold bg-[#FCD002] text-primary-blue'>Semper nam ridiculus duis bibendum risus, arcu arcu.</span></p>

          <p className='md:hidden block text-white font-light text-2xl leading-9 mb-5'>Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem condimentum posuere cursus quis risus. Mauris, auctor ridiculus blandit lacus. <span className='font-bold bg-[#FCD002] text-primary-blue'>Porttitor diam a amet pharetra tellus, senectus augue. Id sed a quis morbi ac odio cursus metus sit. Sapien ut non eu non egestas non mauris.</span> Elit, scelerisque mauris aenean justo. </p>
        </div>


      </header>

    </div>
  );
};

export default Home;