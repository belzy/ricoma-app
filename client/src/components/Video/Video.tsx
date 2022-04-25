import React, { useState } from 'react';

const PlayIcon = require('../../assets/img/play-icon.svg');

type Props = {
  videoSrc: string
  width?: string
  height?: string
  thumbnailSrc: string
  thumbnailAlt: string
  thumbnailClassName?: string
}

const PlayButton: React.FC = () => {

  return (
    <button className='rounded-full bg-accent-orange w-14 h-14 relative '>
      <img style={{ paddingLeft: '21px', paddingTop: '-10px'}} src={ PlayIcon.default } alt='Play Button Icon'></img>
    </button>
  );
};

const VideoModal: React.FC<{ 
    src: string
    width: string
    height: string 
    className?: string 
    setIsOpen: (isOpen: boolean) => void
  }> = (
  { src, 
    width, 
    height,
    className,
    setIsOpen
  }) => {

  return (
    <div className='flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-black md:bg-black/50'>
      <div className='flex flex-col md:px-7' style={{ width: `${ width }px`, height: `${ height }px` }}>

      <button 
        className='video-close w-5 h-5 ml-auto mb-2.5' 
        type='button' 
        title='Close Button'
        onClick={ () => setIsOpen(false) }
      >
        <span className='hamburger-inner'></span>
      </button>

      <img 
        src={ src }
        width={ width }
        height={ height }
        className={ className }
        alt=''
      ></img>

      </div>
    </div> 
  );
};

const Video: React.FC<Props> = ({ videoSrc, width, height, thumbnailSrc, thumbnailAlt, thumbnailClassName }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width, height }}>
      <img 
        src={ thumbnailSrc } 
        alt={ thumbnailAlt }
        className={ `w-full h-full ${ thumbnailClassName }` }
      >
      </img>

      <div 
        style={{ width, height, top: `-${ height }` }}
        className='relative top-0 flex justify-center items-center cursor-pointer'
        onClick={ () => setIsOpen(true) }
      >
        <PlayButton />
      </div>
      { isOpen && <VideoModal src={ thumbnailSrc } width='1128' height='' setIsOpen={ setIsOpen } className='rounded-3xl' /> }
    </div>
  );
}

export default Video;

