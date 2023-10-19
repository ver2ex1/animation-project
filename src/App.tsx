import React from 'react';
import WaterDropGrid from './Dot';
import { useScroll, useTransform, motion } from 'framer-motion';
import Dock from './Bubble';
import CursorWatcher from './Motion';

function App() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
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
    </div>
  );
}

export default App;
