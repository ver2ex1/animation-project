import { motion, useMotionValue, useTransform } from 'framer-motion';

const CursorWatcher = () => {
  const motionValueX = useMotionValue(200);
  const motionValueY = useMotionValue(200);

  const rotationX = useTransform(motionValueY, [0, 400], [45, -45]);
  const rotationY = useTransform(motionValueX, [0, 400], [-45, 45]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const boundingRectangle = event.currentTarget.getBoundingClientRect();
    motionValueX.set(event.clientX - boundingRectangle.left);
    motionValueY.set(event.clientY - boundingRectangle.top);
  };

  return (
    <motion.div
      style={{
        width: 400,
        height: 400,
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        perspective: 400,
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: 'white',
          rotateX: rotationX,
          rotateY: rotationY,
        }}
      />
    </motion.div>
  );
};

export default CursorWatcher;
