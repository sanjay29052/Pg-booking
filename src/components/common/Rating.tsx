import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  reviews?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
}

export const Rating: React.FC<RatingProps> = ({
  rating,
  reviews,
  size = 'md',
  showCount = true
}) => {
  const starSize = size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  const textSize = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <div className="inline-flex items-center gap-1.5" id={`rating-${rating.toString().replace('.', '-')}`}>
      <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200/80 text-amber-900 font-bold px-2 py-0.5 rounded-md text-xs">
        <Star className={`${starSize} fill-amber-400 text-amber-500`} />
        <span>{rating.toFixed(1)}</span>
      </span>
      {showCount && reviews !== undefined && (
        <span className={`${textSize} text-slate-500 font-normal`}>
          ({reviews} reviews)
        </span>
      )}
    </div>
  );
};
