export interface RecipeIngredient {
  productId: string;
  name: string;
  amount: string;
  notes?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  image: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  benefits: string[];
  difficulty: 'easy' | 'medium' | 'advanced';
  cuisine: string;
}

export const recipes: Recipe[] = [
  {
    id: 'golden-milk-latte',
    title: 'Golden Milk Latte',
    description: 'A warm, nourishing Ayurvedic drink perfect for evening relaxation or morning wellness.',
    prepTime: '5 min',
    cookTime: '5 min',
    servings: 2,
    image: '/images/recipe-golden-milk.jpg',
    ingredients: [
      {
        productId: 'golden-milk-blend',
        name: 'Golden Milk Blend',
        amount: '1 tsp',
      },
      {
        productId: '',
        name: 'Whole Milk or Plant-Based Alternative',
        amount: '2 cups',
      },
      {
        productId: '',
        name: 'Raw Honey',
        amount: '1-2 tbsp',
      },
      {
        productId: '',
        name: 'Ghee or Coconut Oil',
        amount: '1 tsp',
      },
    ],
    instructions: [
      'Heat milk gently in a small saucepan over medium heat.',
      'Add golden milk blend and ghee, stirring continuously.',
      'Simmer for 3-4 minutes, allowing flavors to infuse.',
      'Pour into cups and sweeten with honey to taste.',
      'Enjoy warm, ideally before bed or in the morning.',
    ],
    benefits: [
      'Supports natural sleep cycles',
      'Reduces inflammation',
      'Boosts immunity',
      'Aids digestion',
    ],
    difficulty: 'easy',
    cuisine: 'Ayurvedic',
  },
  {
    id: 'spiced-cardamom-chai',
    title: 'Spiced Cardamom Chai',
    description: 'A warming, aromatic chai that celebrates the spices of Ceylon.',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: 2,
    image: '/images/recipe-chai.jpg',
    ingredients: [
      {
        productId: 'cardamom-green-whole',
        name: 'Green Cardamom Pods',
        amount: '4 pods',
        notes: 'Lightly crushed',
      },
      {
        productId: 'ceylon-cinnamon-premium',
        name: 'Ceylon Cinnamon Quill',
        amount: '1 stick',
        notes: 'Broken into pieces',
      },
      {
        productId: 'black-tea-assam',
        name: 'Ceylon Black Tea',
        amount: '2 tsp',
      },
      {
        productId: '',
        name: 'Water',
        amount: '2 cups',
      },
      {
        productId: '',
        name: 'Milk',
        amount: '1 cup',
      },
    ],
    instructions: [
      'Bring water to a boil in a saucepan.',
      'Add crushed cardamom pods and cinnamon pieces.',
      'Simmer for 3 minutes to infuse spices.',
      'Add Ceylon black tea and steep for 3-4 minutes.',
      'Add milk and heat through without boiling.',
      'Strain into cups and sweeten with honey or sugar.',
      'Serve immediately.',
    ],
    benefits: [
      'Warming and energizing',
      'Digestive support',
      'Respiratory health',
      'Natural flavor complexity',
    ],
    difficulty: 'easy',
    cuisine: 'Sri Lankan',
  },
  {
    id: 'cinnamon-roasted-vegetables',
    title: 'Ceylon Cinnamon Roasted Vegetables',
    description: 'An elegant side dish that brings warmth and sophistication to any meal.',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: 4,
    image: '/images/recipe-roasted-veg.jpg',
    ingredients: [
      {
        productId: 'ceylon-cinnamon-premium',
        name: 'Ceylon Cinnamon',
        amount: '1 tsp',
        notes: 'Ground',
      },
      {
        productId: '',
        name: 'Mixed Root Vegetables',
        amount: '1.5 lbs',
        notes: 'Carrots, parsnips, beets, cut into chunks',
      },
      {
        productId: '',
        name: 'Olive Oil',
        amount: '3 tbsp',
      },
      {
        productId: '',
        name: 'Sea Salt & Black Pepper',
        amount: 'To taste',
      },
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Toss vegetables with olive oil, cinnamon, salt, and pepper.',
      'Spread on a roasting pan in a single layer.',
      'Roast for 25-30 minutes, stirring halfway through.',
      'Vegetables should be caramelized and tender.',
      'Serve warm as a side dish.',
    ],
    benefits: [
      'Nutrient-rich root vegetables',
      'Blood sugar regulation',
      'Aromatic dining experience',
      'Vegetarian and vegan-friendly',
    ],
    difficulty: 'easy',
    cuisine: 'Contemporary',
  },
  {
    id: 'white-tea-poached-pears',
    title: 'White Tea Poached Pears',
    description: 'An elegant, delicate dessert that showcases the subtle sophistication of silver needle tea.',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 4,
    image: '/images/recipe-pears.jpg',
    ingredients: [
      {
        productId: 'white-tea-silver',
        name: 'Silver Needle White Tea',
        amount: '2 tsp',
      },
      {
        productId: '',
        name: 'Water',
        amount: '2 cups',
      },
      {
        productId: 'ceylon-cinnamon-premium',
        name: 'Ceylon Cinnamon Stick',
        amount: '1',
      },
      {
        productId: '',
        name: 'Honey',
        amount: '3 tbsp',
      },
      {
        productId: '',
        name: 'Pears',
        amount: '4',
        notes: 'Firm pears, peeled',
      },
    ],
    instructions: [
      'Brew white tea in water with cinnamon stick for 3 minutes.',
      'Add honey to the tea and stir until dissolved.',
      'Add peeled pears to the tea liquid.',
      'Simmer gently for 15-18 minutes until pears are tender.',
      'Remove from heat and allow to cool slightly.',
      'Serve warm or chilled with the poaching liquid.',
      'Garnish with a cinnamon stick.',
    ],
    benefits: [
      'Light and elegant dessert',
      'Antioxidant-rich preparation',
      'Aids digestion naturally',
      'Sophisticated flavor profile',
    ],
    difficulty: 'medium',
    cuisine: 'French-Inspired',
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(r => r.id === id);
}

export function getRecipesByIngredient(productId: string): Recipe[] {
  return recipes.filter(r =>
    r.ingredients.some(i => i.productId === productId)
  );
}
