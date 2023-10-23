import React, { useRef, useState, useEffect } from 'react';

interface EllipsisTextProps {
  text: string;
  className?: string;
}

const EllipsisText: React.FC<EllipsisTextProps> = ({ text, className }) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    if (isTruncated) {
      setIsTooltipVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      setIsTruncated(element.offsetWidth < element.scrollWidth);
    }
  }, [text]);

  return (
    <div
      className='relative inline-block'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={textRef}
        className={`whitespace-nowrap overflow-hidden overflow-ellipsis block ${className}`}
      >
        {text}
      </span>
      {isTruncated && (
        <div
          className={`absolute top-full left-1/2 transform -translate-x-1/2 z-10 text-center`}
        >
          <div
            className={`flex justify-center items-center w-16 h-8 rounded-full opacity-0 ${
              isTooltipVisible ? 'animate-anime' : 'animate-fadeOut'
            } bg-gray-100 shadow-inner`}
          >
            <div
              className={`${
                isTooltipVisible ? 'animate-longFadeIn' : ''
              } opacity-0 w-[200px]`}
            >
              {text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EllipsisText;
