import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

const Dock: React.FC = () => {
  const mouseX = useMotionValue(Infinity);

  const numbers = Array.from({ length: 8 }, (_, i) => i);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='mx-auto flex h-16 items-end gap-4 rounded-2xl bg-green-900 px-4 pb-3'
    >
      {numbers.map((i) => (
        <AppIcon mouseX={mouseX} key={i} />
      ))}
    </motion.div>
  );
};

const AppIcon: React.FC<{ mouseX: MotionValue }> = ({ mouseX }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className='aspect-square w-10 rounded-full bg-green-700'
    />
  );
};

export default Dock;
