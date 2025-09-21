'use client';

import Image from 'next/image';
import { Recipe } from '@/data/models';
import FavoriteIcon from './FavoriteIcon';
import { useAuth } from '@/context/AuthContext';
import { useFavorites } from '@/context/FavoritesContext';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { user } = useAuth();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const isCurrentlyFavorite = user ? isFavorite(recipe.id) : false;

  const handleFavoriteClick = () => {
    if (!user) {
      alert('Necesitas iniciar sesión para añadir favoritos.');
      return;
    }

    if (isCurrentlyFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-40">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 relative">
        <div className="pr-10">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-2">
            {recipe.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {recipe.duration} min · {recipe.difficulty}
          </p>
        </div>

        <div className="absolute bottom-4 right-4">
          <FavoriteIcon
            isFavorite={isCurrentlyFavorite}
            onClick={handleFavoriteClick}
          />
        </div>
      </div>
    </div>
  );
}