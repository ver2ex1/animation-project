import React, { useEffect, useState } from 'react';
import WaterDropGrid from './Dot';
import { useScroll, useTransform, motion } from 'framer-motion';
import Dock from './Bubble';
import CursorWatcher from './Motion';
import EllipsisText from './EllipsisText';
import Card from './Card';

const cardData = [
  {
    title: 'Modern Architecture',
    description: 'Contemporary design concepts.',
    imageUrl:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Modern Building',
  },
  {
    title: 'Digital Art & Design',
    description: 'Boundaries in digital design.',
    imageUrl:
      'https://images.unsplash.com/photo-1498075702571-ecb018f3752d?auto=format&fit=crop&q=80&w=2956&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Digital Design',
  },
  {
    title: 'Nature’s Beauty',
    description: 'Breathtaking sceneries captured.',
    imageUrl:
      'https://images.unsplash.com/photo-1685370296018-653b7d8716b3?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Beautiful Landscape',
  },
  {
    title: 'Exploring Urban Life',
    description: 'Bustling cities journey.',
    imageUrl:
      'https://images.unsplash.com/photo-1568624439818-1536c5f96ba7?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'City Life',
  },
];

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  useEffect(() => {
    const checkIfVisible = () => {
      const cardBlock = document.getElementById('cardBlock');
      if (!cardBlock) return;
      const rect = cardBlock.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', checkIfVisible);
    checkIfVisible(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkIfVisible);
    };
  }, []);
  return (
    <div>
      <div className='relative h-screen flex items-center justify-center px-16 font-roboto'>
        <WaterDropGrid />
        <h1 className='absolute z-10 text-off-white text-8xl font-semibold text-center'>
          Animation project by <br /> Darly Solutions dev
        </h1>
      </div>
      <div className='h-screen bg-red-500 flex flex-col gap-12 items-center justify-center'>
        <h3 className='text-5xl text-off-white font-semibold'>
          Magnification effect
        </h3>
        <Dock />
      </div>
      <div className='h-screen flex items-center justify-center gap-12 flex-col'>
        <h3 className='text-5xl text-off-white font-semibold'>
          Cursor Watcher
        </h3>
        <CursorWatcher />
      </div>
      <div
        className='h-screen bg-white flex items-center justify-center py-3'
        id='cardBlock'
      >
        <motion.div
          className='flex flex-wrap justify-center gap-[20px] w-full max-w-4xl'
          initial='hidden'
          animate={isVisible ? 'visible' : 'hidden'}
          variants={cardVariants}
        >
          {cardData.map((card, idx) => (
            <div key={idx} className='w-[calc(50%-10px)] flex justify-center'>
              <Card
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                altText={card.altText}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
