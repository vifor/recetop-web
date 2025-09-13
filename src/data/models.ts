export interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
  category: 'Postres' | 'Platos Principales' | 'Ensaladas' | 'Sopas';
  duration: number; 
  difficulty: 'Fácil' | 'Media' | 'Difícil';
}