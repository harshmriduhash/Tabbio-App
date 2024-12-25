// StarRating.tsx

import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';

interface StarRatingProps {
  initialRating: number;
  onRatingChange: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({onRatingChange, initialRating }) => {
  const totalStars = 5;
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div className='flex gap-2.5 mb-6'>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`flex gap-3 cursor-pointer text-2xl ${
            index < rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onClick={() => handleStarClick(index + 1)}
        >
          <BsStarFill />
        </span>
      ))}
    </div>
  );
};

export const Ratings: React.FC<{rating:number, size?: "sm" | "md"}> = ({rating, size="sm" }) => {
    const totalStars = 5;
  
    return (
      <div className='flex gap-1.5'>
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            className={`flex gap-3 cursor-pointer ${size === "sm" ? 'text-sm': 'text-lg'} ${
              index < rating ? 'text-yellow-500' : 'text-zinc-300'
            }`}
          >
            <BsStarFill />
          </span>
        ))}
      </div>
    );
  };

export default StarRating;