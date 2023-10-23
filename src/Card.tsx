import React from 'react';
import EllipsisText from './EllipsisText';
import './cardStyles.css';

interface CardProps {
  imageUrl: string;
  altText?: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  altText = '',
  title,
  description,
}) => {
  return (
    <div className='w-[300px] max-h-[410px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <span>
        <img
          className='rounded-t-lg w-full h-[200px] object-cover'
          src={imageUrl}
          alt={altText}
        />
      </span>
      <div className='p-5'>
        <EllipsisText
          className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-[150px] cursor-pointer'
          text={title}
        />
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 mt-3'>
          {description}
        </p>
        <button>
          Show More
          <svg
            className='w-3.5 h-3.5 ml-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
