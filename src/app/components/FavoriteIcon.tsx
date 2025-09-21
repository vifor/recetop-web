'use client';


import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

interface FavoriteIconProps {
  isFavorite: boolean;
 onClick: (e: React.MouseEvent) => void; 
}

export default function FavoriteIcon({ isFavorite, onClick }: FavoriteIconProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      className="transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
    >

      {isFavorite ? (
        <HeartIconSolid className="h-7 w-7 text-red-500" />
      ) : (
        <HeartIconOutline className="h-7 w-7 text-gray-400 hover:text-gray-600" />
      )}
    </button>
  );
}



           


