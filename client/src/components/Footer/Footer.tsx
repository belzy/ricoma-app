import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Video
} from '../../components';

const RicomaLogo = require(  '../../assets/img/ricoma-logo97x25.svg' );
const FacebookIcon = require(  '../../assets/img/facebook-icon.svg' );
const TwitterIcon = require(  '../../assets/img/twitter-icon.svg' );
const InstagramIcon = require(  '../../assets/img/instagram-icon.svg' );
const YouTubeIcon = require(  '../../assets/img/youtube-icon.svg' );
const PinterestIcon = require(  '../../assets/img/pinterest-icon.svg' );
const videoThumbnail = require('../../assets/img/video-thumbnail-1.png');
const PlusIcon = require('../../assets/img/plus-icon.svg');

const CompanyInfo: React.FC = () => {

  return (
    <div className='w-60'>

      <Link to='/'>
        <img className='hidden md:block' width='260' height='65' src={ RicomaLogo.default } alt='Ricoma Logo'></img>
        <img className='block md:hidden' width='185' height='48' src={ RicomaLogo.default } alt='Ricoma Logo'></img>
      </Link>
      <ul className='flex justify-between items-center mt-12 pb-10 md:pb-0'>

        <li><a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/RiCOMA.us'><img src={ FacebookIcon.default } alt='Ricoma Facebook'></img></a></li>

        <li><a target="_blank" rel="noopener noreferrer" href='https://t.sidekickopen79.com/s1t/c/5/f18dQhb0S7lM8dDMPbW2n0x6l2B9nMJN7t5XWPfhMynW4WzxTF63RLnvW56dKwV3W1q5F102?te=W3R5hFj4cm2zwW4fQ47l4fGCmnW3Fbt5S30CGSJf3_R2g504&si=8000000001868541&pi=294cd622-4258-4f6f-8a3a-cc0b17224ca7'>
          <img src={ TwitterIcon.default } alt='Ricoma Twitter'></img></a>
        </li>

        <li><a target="_blank" rel="noopener noreferrer" href='https://t.sidekickopen79.com/s1t/c/5/f18dQhb0S7lM8dDMPbW2n0x6l2B9nMJN7t5XWPfhMynW4WzxTF63RLnvW56dKwV3W1q5F102?te=W3R5hFj4cm2zwW4mKLS-3T1lc2W3zb2N33_qTryW3_rjd93Fbt6N4mMgd1&si=8000000001868541&pi=294cd622-4258-4f6f-8a3a-cc0b17224ca7'>
          <img src={ InstagramIcon.default } alt='Ricoma Instagram'></img></a>
        </li>

        <li><a target="_blank" rel="noopener noreferrer" href='https://t.sidekickopen79.com/s1t/c/5/f18dQhb0S7lM8dDMPbW2n0x6l2B9nMJN7t5XWPfhMynW4WzxTF63RLnvW56dKwV3W1q5F102?te=W3R5hFj4cm2zwW4mKLS-4rCvX6W4hCVj23Fbt5SW4hLZp01Lm-RmW2Wtk3h3SXXwc0&si=8000000001868541&pi=294cd622-4258-4f6f-8a3a-cc0b17224ca7'>
          <img src={ YouTubeIcon.default } alt='Ricoma YouTube'></img></a>
        </li>

        <li><a target="_blank" rel="noopener noreferrer" href='https://t.sidekickopen79.com/s1t/c/5/f18dQhb0S7lM8dDMPbW2n0x6l2B9nMJN7t5XWPfhMynW4WzxTF63RLnvW56dKwV3W1q5F102?te=W3R5hFj4cm2zwW4mKLS-45Q3XvW3K8PTr4fdHZSW3_rjd93Fbt6N4mMgd1&si=8000000001868541&pi=294cd622-4258-4f6f-8a3a-cc0b17224ca7'>
          <img src={ PinterestIcon.default } alt='Ricoma Pinterest'></img></a>
        </li>

      </ul>

    </div>
  );
};

const ProductsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full md:w-40 mt-10 md:mt-0'>
      <h6 
        className='text-base text-white pb-5 font-semibold flex justify-between cursor-pointer md:cursor-default'
        onClick={ () => setIsOpen(!isOpen) }
      >
        Products
        <img className='md:hidden' width='12' height='12' style={{ width: '12px', height: '12px' }} src={ PlusIcon.default } alt=''></img>
      </h6>

      <ul className={ `${ isOpen ? 'h-auto' : 'h-0 md:h-auto' } overflow-hidden` }>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/embroidery'>Embroidery</Link></li>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/printing'>Printing</Link></li>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/heat-press-machines'>Heat Press Machines</Link></li>
      </ul>

      <div className='md:hidden bg-white h-0.5'></div>

    </div>
  );
};

const ContactMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full md:w-40 mt-10 md:mt-0'>
      <h6 
        className='text-base text-white pb-5 font-semibold flex justify-between cursor-pointer md:cursor-default'
        onClick={ () => setIsOpen(!isOpen) }
      >
        Contact
        <img className='md:hidden' width='12' height='12' style={{ width: '12px', height: '12px' }} src={ PlusIcon.default } alt=''></img>
      </h6>

      <ul className={ `${ isOpen ? 'h-auto' : 'h-0 md:h-auto' } overflow-hidden` }>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/contact'>Get In Touch</Link></li>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/virtual-demo'>Virtual Demo</Link></li>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/support'>Contact Support</Link></li>
      </ul>

      <div className='md:hidden bg-white h-0.5'></div>

    </div>
  );
};

const CompanyMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full md:w-40 mt-10 md:mt-0'>
      <h6 
        className='text-base text-white pb-5 font-semibold flex justify-between cursor-pointer md:cursor-default'
        onClick={ () => setIsOpen(!isOpen) }
      >
        Company
        <img className='md:hidden' width='12' height='12' style={{ width: '12px', height: '12px' }} src={ PlusIcon.default } alt=''></img>
      </h6>

      <ul className={ `${ isOpen ? 'h-auto' : 'h-0 md:h-auto' } overflow-hidden` }>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/about'>About</Link></li>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/press'>Press</Link></li>
        <li className='mb-4'><Link className='text-custom-gray text-sm hover:text-accent-orange' to='/warranty'>Warranty</Link></li>
      </ul>

      <div className='md:hidden bg-white h-0.5'></div>

    </div>
  );
};

const FooterBottom: React.FC = () => {

  return (
    <div className='bg-primary-dark md:bg-primary-blue py-6 md:py-10'>
      <div className='flex flex-col md:flex-row justify-between items-center mx-auto px-7'>

      <div className='flex justify-between w-64 md:w-72 mb-6 md:mb-0'>
        <Link to='#' className='text-custom-gray md:text-white font-size-xs hover:text-accent-orange'>Terms of Service</Link>
        <Link to='#' className='text-custom-gray md:text-white font-size-xs text-right hover:text-accent-orange'>Privacy Policy</Link>
      </div>

      <p className='text-custom-gray md:text-white font-size-xs'>©2022 Ricoma International.</p>

      </div>
    </div>
  );
};

const Footer: React.FC = () => {

  return (
    <footer>

      {/* Large Footer */}
      <div className='hidden md:block bg-primary-blue py-20'>
        <div className='mx-auto px-7 flex justify-between max-w-[1300px]'>
          <CompanyInfo />

          <ProductsMenu />

          <CompanyMenu />

          <ContactMenu />

          <Video 
            videoSrc='' 
            thumbnailSrc={ videoThumbnail.default }
            thumbnailAlt='Company Video Thumbnail'
            width='268px'
            height='159px'
            thumbnailClassName='rounded-md'
          />
        </div>
      </div>

      {/* Mobile Footer */}
      <div className='block md:hidden bg-primary-blue py-10'>
        <div className='xl:container mx-auto px-7 flex flex-col items-center justify-between'>
          <CompanyInfo />

          <Video 
            videoSrc='' 
            thumbnailSrc={ videoThumbnail.default }
            thumbnailAlt='Company Video Thumbnail'
            width='268px'
            height='159px'
            thumbnailClassName='rounded-md'
          />

          <ProductsMenu />

          <ContactMenu />

          <CompanyMenu />
        </div>
      </div>

      <FooterBottom />


    </footer>
  );
};

export default Footer;