// src/components/RecipeCard.tsx
import Image from 'next/image';
import { Recipe } from '../../data/models';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
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
      <div className="p-4 bg-white dark:bg-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {recipe.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {recipe.duration} min · {recipe.difficulty}
        </p>
      </div>
    </div>
  );
}