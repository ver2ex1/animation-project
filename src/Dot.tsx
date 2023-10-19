import anime from 'animejs';

const WaterDropGrid = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const handleDotClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -30, easing: 'easeOutSine', duration: 250 },
        { value: 0, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: Number(target.dataset.index),
      }),
    });
  };
  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className='group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600'
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className='dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white'
            data-index={index}
          />
        </div>
      );
    }
  }
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH},1fr)` }}
      className='grid w-fit'
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;
