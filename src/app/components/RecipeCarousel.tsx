'use client';

import { Recipe } from '@/data/models';
import RecipeCard from './RecipeCard';

interface RecipeCarouselProps {
  title: string;
  recipes: Recipe[];
  onCardClick: (recipe: Recipe) => void;
}

export default function RecipeCarousel({ title, recipes, onCardClick }: RecipeCarouselProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="flex-shrink-0 w-64">
            {/* Ahora 'onCardClick' existe y se puede pasar correctamente */}
            <RecipeCard recipe={recipe} onCardClick={onCardClick} />
          </div>
        ))}
      </div>
    </section>
  );
}