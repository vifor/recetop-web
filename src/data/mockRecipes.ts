// src/data/mockRecipes.ts
import { Recipe } from './models';

export const mockRecipes: Recipe[] = [
  {
    id: 1,
  title: 'Bavaroise de banana y durazno',
  imageUrl: '/images/bavaroisedebananaydurazno.jpg',
  category: 'Postres',
    duration: 30,
    difficulty: 'Media',
  },
  {
    id: 2,
  title: 'Bizcochitos de dos ingredientes',
  imageUrl: '/images/bizcochitosdedosingredientes.jpg',
  category: 'Postres',
    duration: 60,
    difficulty: 'Fácil',
  },
  {
    id: 3,
  title: 'Flan con leche condensada',
  imageUrl: '/images/flanconlechecondensada.jpg',
  category: 'Postres',
    duration: 25,
    difficulty: 'Fácil',
  },
  {
    id: 4,
  title: 'Tarta Quiche de espinaca',
  imageUrl: '/images/tartadeespinaca.jpg',
  category: 'Platos Principales',
    duration: 90,
    difficulty: 'Media',
  },
];