export const PRODUCT_CATEGORIES = [
  'All Products',
  'Baby care',
  'CAP Ceylon',
  'Cosmetics',
  'Dessert',
  'Dried vegetables',
  'Drinks',
  'Dry Fish',
  'Frozen food',
  'Fruits',
  'Grocery',
  'Health',
  'Kolakanda',
  'Meat',
  'Spices',
  'Sweets and snacks',
  'Tea',
  'Vegetables'
];

export type Collection = typeof PRODUCT_CATEGORIES[number] | 'blends' | 'wellness';

export interface FlavorProfile {
  spice: number;
  sweetness: number;
  earthiness: number;
  fruitiness: number;
  florality: number;
}

export interface SourceInfo {
  region: string;
  elevation: string;
  harvest: string;
  coordinates: { lat: number; lng: number };
  story: string;
}

export interface HealthBenefit {
  name: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  collection: Collection;
  price: number;
  image: string;
  description: string;
  longDescription: string;
  flavorProfile: FlavorProfile;
  source: SourceInfo;
  healthBenefits: HealthBenefit[];
  tastingNotes: string[];
  servingSize: string;
  shelfLife: string;
  origin: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 'ceylon-cinnamon-premium',
    name: 'Ceylon Cinnamon Premium',
    collection: 'spices',
    price: 28,
    image: '/images/cinnamon.jpg',
    description: 'Delicate, warm cinnamon from the highlands of Ceylon',
    longDescription: 'Sourced from century-old cinnamon gardens in the misty highlands of Sri Lanka\'s Matara district. Each quill is hand-rolled and sun-dried over three weeks to develop its distinctive sweetness. This is true cinnamon—not cassia—with subtle floral notes and a gentle warmth that defines authentic Ceylon flavors.',
    flavorProfile: {
      spice: 6,
      sweetness: 8,
      earthiness: 4,
      fruitiness: 5,
      florality: 7,
    },
    source: {
      region: 'Matara, Sri Lanka',
      elevation: '600-800m',
      harvest: 'Year-round',
      coordinates: { lat: 5.7489, lng: 80.5632 },
      story: 'Our cinnamon comes from a cooperative of 200+ small farmers who have been cultivating Ceylon cinnamon for generations. Each garden is managed organically, and the bark is hand-peeled and sun-dried using traditional methods passed down through families.',
    },
    healthBenefits: [
      {
        name: 'Blood Sugar Balance',
        description: 'May help regulate glucose levels',
        icon: '💚',
      },
      {
        name: 'Antioxidant Rich',
        description: 'Loaded with polyphenols and antioxidants',
        icon: '⚡',
      },
      {
        name: 'Digestive Support',
        description: 'Supports healthy digestion naturally',
        icon: '🌿',
      },
    ],
    tastingNotes: ['Sweet', 'Warm', 'Floral', 'Delicate'],
    servingSize: '1-2 tsp per cup',
    shelfLife: '2-3 years',
    origin: 'Matara, Sri Lanka',
  },
  {
    id: 'cardamom-green-whole',
    name: 'Green Cardamom Whole Pods',
    collection: 'spices',
    price: 32,
    image: '/images/cardamom.jpg',
    description: 'Vibrant green cardamom with intense aromatic oil content',
    longDescription: 'Hand-harvested green cardamom pods from the lush evergreen forests of Kerala. The pods are picked at perfect ripeness and sun-dried for 8-10 days to develop their distinctive aromatic quality. Each pod contains small black seeds packed with essential oils.',
    flavorProfile: {
      spice: 7,
      sweetness: 6,
      earthiness: 5,
      fruitiness: 4,
      florality: 8,
    },
    source: {
      region: 'Kerala Region, Sri Lanka',
      elevation: '800-1200m',
      harvest: 'June-September',
      coordinates: { lat: 6.9271, lng: 80.7789 },
      story: 'Cardamom thrives in the cool, misty climate of Sri Lanka\'s western highlands. We partner with farmers who practice shade-grown cultivation, preserving the forest ecosystem while producing cardamom of extraordinary quality and aroma.',
    },
    healthBenefits: [
      {
        name: 'Respiratory Health',
        description: 'Supports clear breathing and lung function',
        icon: '💨',
      },
      {
        name: 'Digestion',
        description: 'Traditional digestive aid',
        icon: '🌿',
      },
      {
        name: 'Fresh Breath',
        description: 'Naturally freshens breath',
        icon: '✨',
      },
    ],
    tastingNotes: ['Aromatic', 'Citrusy', 'Minty', 'Sweet Spice'],
    servingSize: '3-5 pods per cup',
    shelfLife: '18-24 months',
    origin: 'Kerala Region, Sri Lanka',
  },
  {
    id: 'black-tea-assam',
    name: 'Ceylon Black Tea',
    collection: 'teas',
    price: 22,
    image: '/images/black-tea.jpg',
    description: 'Bold, bright Ceylon black tea with citrus undertones',
    longDescription: 'From the famous tea gardens of Nuwara Eliya, this Ceylon black tea is crafted using traditional methods. The leaves are hand-plucked and naturally fermented in open vats, developing a complex flavor profile with notes of citrus and dried fruit.',
    flavorProfile: {
      spice: 3,
      sweetness: 5,
      earthiness: 6,
      fruitiness: 7,
      florality: 4,
    },
    source: {
      region: 'Nuwara Eliya, Sri Lanka',
      elevation: '1800-2200m',
      harvest: 'Year-round',
      coordinates: { lat: 6.9271, lng: 80.7789 },
      story: 'The cool mountain air of Nuwara Eliya has made it Sri Lanka\'s premier tea-growing region for over 150 years. Our partner estates use sustainable harvesting practices and process each batch by hand to ensure maximum flavor and quality.',
    },
    healthBenefits: [
      {
        name: 'Energy & Focus',
        description: 'Natural caffeine for sustained energy',
        icon: '⚡',
      },
      {
        name: 'Heart Health',
        description: 'Rich in heart-supporting flavonoids',
        icon: '❤️',
      },
      {
        name: 'Antioxidants',
        description: 'Powerful natural antioxidants',
        icon: '💪',
      },
    ],
    tastingNotes: ['Citrus', 'Brisk', 'Malty', 'Honey Notes'],
    servingSize: '1 tsp per 8 oz water, 3-4 min steep',
    shelfLife: '1-2 years',
    origin: 'Nuwara Eliya, Sri Lanka',
  },
  {
    id: 'white-tea-silver',
    name: 'Silver Needle White Tea',
    collection: 'teas',
    price: 26,
    image: '/images/white-tea.jpg',
    description: 'Delicate white tea with subtle floral and honey notes',
    longDescription: 'The rarest of Sri Lankan teas, silver needle white tea is made from the youngest buds picked only twice per year. These silvery tips are dried gently to preserve their delicate flavor and maximum antioxidant content.',
    flavorProfile: {
      spice: 1,
      sweetness: 7,
      earthiness: 2,
      fruitiness: 6,
      florality: 8,
    },
    source: {
      region: 'Kandy District, Sri Lanka',
      elevation: '1000-1500m',
      harvest: 'Spring & Autumn',
      coordinates: { lat: 7.2906, lng: 80.6337 },
      story: 'Only the youngest buds of the tea plant are selected for silver needle white tea. Our farmers hand-pick each bud in early morning and dry them with pure mountain air. This meticulous process creates one of the world\'s most refined teas.',
    },
    healthBenefits: [
      {
        name: 'Antioxidant Supreme',
        description: 'Highest antioxidant content of all teas',
        icon: '✨',
      },
      {
        name: 'Gentle Hydration',
        description: 'Light caffeine, perfect for all day',
        icon: '💧',
      },
      {
        name: 'Skin Radiance',
        description: 'Natural beauty from within',
        icon: '🌸',
      },
    ],
    tastingNotes: ['Floral', 'Honey', 'Subtle Sweetness', 'Delicate'],
    servingSize: '1 tsp per 8 oz water, 4-5 min steep',
    shelfLife: '2-3 years',
    origin: 'Kandy District, Sri Lanka',
  },
  {
    id: 'golden-milk-blend',
    name: 'Golden Milk Wellness Blend',
    collection: 'blends',
    price: 24,
    image: '/images/golden-milk.jpg',
    description: 'Ancient Ayurvedic blend with turmeric, ginger, and cardamom',
    longDescription: 'A traditional Ayurvedic formula designed to support overall wellness. Turmeric, ginger, cinnamon, cardamom, and black pepper are blended to create a warming, nourishing drink. Perfect heated with milk or as a meditation ritual.',
    flavorProfile: {
      spice: 7,
      sweetness: 5,
      earthiness: 7,
      fruitiness: 2,
      florality: 4,
    },
    source: {
      region: 'Multi-region Sri Lanka',
      elevation: '500-2000m',
      harvest: 'Year-round',
      coordinates: { lat: 7.1, lng: 80.6 },
      story: 'Each ingredient in this blend is sourced from our network of organic farmers across Sri Lanka. The turmeric comes from the lowlands, while spices like cinnamon and cardamom are grown in the highlands, creating a perfectly balanced blend.',
    },
    healthBenefits: [
      {
        name: 'Anti-Inflammatory',
        description: 'Turmeric\'s powerful natural properties',
        icon: '🔥',
      },
      {
        name: 'Immune Support',
        description: 'Warming spices to boost immunity',
        icon: '💪',
      },
      {
        name: 'Relaxation',
        description: 'Promotes calm and wellness',
        icon: '🧘',
      },
    ],
    tastingNotes: ['Warm', 'Spiced', 'Creamy', 'Comforting'],
    servingSize: '1 tsp per 8 oz warm milk',
    shelfLife: '18-24 months',
    origin: 'Sri Lanka',
  },
  {
    id: 'clove-whole-premium',
    name: 'Whole Cloves Premium',
    collection: 'spices',
    price: 30,
    image: '/images/clove.jpg',
    description: 'Intensely aromatic whole cloves from Ceylon highlands',
    longDescription: 'Hand-picked cloves at peak ripeness and sun-dried to perfection. These premium cloves offer a strong aromatic presence with warm, slightly sweet notes. Perfect for both sweet and savory applications.',
    flavorProfile: {
      spice: 9,
      sweetness: 5,
      earthiness: 6,
      fruitiness: 3,
      florality: 5,
    },
    source: {
      region: 'Matara, Sri Lanka',
      elevation: '500-700m',
      harvest: 'August-September',
      coordinates: { lat: 5.7489, lng: 80.5632 },
      story: 'Cloves have been grown in Sri Lanka for centuries. Our farmers harvest only the unopened flower buds at their peak and dry them slowly to concentrate the aromatic oils.',
    },
    healthBenefits: [
      {
        name: 'Pain Relief',
        description: 'Eugenol provides natural pain management',
        icon: '🔥',
      },
      {
        name: 'Oral Health',
        description: 'Traditionally used for dental wellness',
        icon: '😁',
      },
      {
        name: 'Circulation',
        description: 'Supports healthy blood flow',
        icon: '❤️',
      },
    ],
    tastingNotes: ['Aromatic', 'Warm', 'Slightly Sweet', 'Intense'],
    servingSize: '3-5 cloves per cup',
    shelfLife: '2-3 years',
    origin: 'Matara, Sri Lanka',
  },
  {
    id: 'nutmeg-whole-ground',
    name: 'Whole Nutmeg',
    collection: 'spices',
    price: 26,
    image: '/images/nutmeg.jpg',
    description: 'Warming whole nutmeg with rich, complex flavor',
    longDescription: 'Sourced from the spice gardens of Sri Lanka, these whole nutmegs are carefully selected for their size and aroma. The subtle warm notes and hint of sweetness make them perfect for both sweet and savory cooking.',
    flavorProfile: {
      spice: 5,
      sweetness: 7,
      earthiness: 6,
      fruitiness: 4,
      florality: 3,
    },
    source: {
      region: 'Colombo District, Sri Lanka',
      elevation: '200-400m',
      harvest: 'Year-round',
      coordinates: { lat: 6.9271, lng: 79.8612 },
      story: 'Our nutmegs are grown on small family farms that have been cultivating nutmeg for generations. Each seed is hand-selected and aged to develop its full aromatic potential.',
    },
    healthBenefits: [
      {
        name: 'Sleep Support',
        description: 'Traditionally aids restful sleep',
        icon: '😴',
      },
      {
        name: 'Digestive Health',
        description: 'Supports healthy digestion',
        icon: '🌿',
      },
      {
        name: 'Mental Clarity',
        description: 'Promotes focus and alertness',
        icon: '🧠',
      },
    ],
    tastingNotes: ['Warm', 'Sweet', 'Nutty', 'Slightly Woody'],
    servingSize: '¼ tsp grated per serving',
    shelfLife: '2-3 years',
    origin: 'Colombo District, Sri Lanka',
  },
  {
    id: 'turmeric-powder-organic',
    name: 'Organic Turmeric Powder',
    collection: 'spices',
    price: 20,
    image: '/images/turmeric.jpg',
    description: 'Vibrant organic turmeric powder with high curcumin content',
    longDescription: 'Harvested from organic farms in Sri Lanka\'s lowlands, this turmeric powder is ground fresh to preserve its golden color and potent curcumin content. A staple of Ayurvedic medicine for thousands of years.',
    flavorProfile: {
      spice: 4,
      sweetness: 2,
      earthiness: 8,
      fruitiness: 1,
      florality: 1,
    },
    source: {
      region: 'Kurunegala District, Sri Lanka',
      elevation: '300-600m',
      harvest: 'October-December',
      coordinates: { lat: 7.4731, lng: 80.3685 },
      story: 'Our turmeric is grown using regenerative organic farming practices that heal the soil and support local biodiversity. Each batch is tested for curcumin content to ensure maximum potency.',
    },
    healthBenefits: [
      {
        name: 'Anti-Inflammatory',
        description: 'Curcumin\'s powerful healing properties',
        icon: '🔥',
      },
      {
        name: 'Joint Support',
        description: 'Supports healthy joint function',
        icon: '💪',
      },
      {
        name: 'Cellular Health',
        description: 'Protects cells from oxidative stress',
        icon: '✨',
      },
    ],
    tastingNotes: ['Earthy', 'Warm', 'Slightly Bitter', 'Peppery'],
    servingSize: '½ tsp per serving',
    shelfLife: '2-3 years',
    origin: 'Kurunegala District, Sri Lanka',
  },
  {
    id: 'ginger-dried-organic',
    name: 'Dried Ginger Organic',
    collection: 'spices',
    price: 18,
    image: '/images/ginger.jpg',
    description: 'Warming dried ginger with potent flavor and aroma',
    longDescription: 'Hand-harvested ginger from organic farms is slow-dried to preserve its warming properties and natural spiciness. Perfect for teas, cooking, or wellness shots. A warming staple in Ayurvedic tradition.',
    flavorProfile: {
      spice: 8,
      sweetness: 3,
      earthiness: 5,
      fruitiness: 2,
      florality: 2,
    },
    source: {
      region: 'Kegalle District, Sri Lanka',
      elevation: '600-1000m',
      harvest: 'November-February',
      coordinates: { lat: 7.2535, lng: 80.9042 },
      story: 'Our ginger is grown on steep hillside farms using agroforestry techniques that protect the soil and support wildlife. Farmers harvest ginger at peak maturity and dry it using sun and wind.',
    },
    healthBenefits: [
      {
        name: 'Nausea Relief',
        description: 'Traditionally eases digestive discomfort',
        icon: '🌊',
      },
      {
        name: 'Warming Heat',
        description: 'Increases circulation and warmth',
        icon: '🔥',
      },
      {
        name: 'Anti-Inflammatory',
        description: 'Gingerols support inflammation response',
        icon: '💪',
      },
    ],
    tastingNotes: ['Spicy', 'Warm', 'Sharp', 'Peppery'],
    servingSize: '½ tsp per cup',
    shelfLife: '2-3 years',
    origin: 'Kegalle District, Sri Lanka',
  },
  {
    id: 'green-tea-oolong',
    name: 'Ceylon Green Tea',
    collection: 'teas',
    price: 24,
    image: '/images/green-tea.jpg',
    description: 'Fresh, bright Ceylon green tea with grassy notes',
    longDescription: 'Unoxidized green tea from Sri Lanka\'s cool highlands. The leaves are gently pan-fired immediately after harvest to preserve their vibrant color and delicate, grassy flavor profile with subtle vegetal notes.',
    flavorProfile: {
      spice: 1,
      sweetness: 4,
      earthiness: 6,
      fruitiness: 4,
      florality: 5,
    },
    source: {
      region: 'Badulla District, Sri Lanka',
      elevation: '1200-1800m',
      harvest: 'Year-round',
      coordinates: { lat: 6.9940, lng: 81.2667 },
      story: 'Our green tea is produced using traditional methods on small farms that have been growing tea for generations. Each leaf is hand-processed to maintain freshness and delicate flavor.',
    },
    healthBenefits: [
      {
        name: 'Antioxidants',
        description: 'Rich in EGCG polyphenols',
        icon: '✨',
      },
      {
        name: 'Metabolism',
        description: 'Supports healthy metabolism naturally',
        icon: '⚡',
      },
      {
        name: 'Brain Function',
        description: 'Gentle caffeine for mental clarity',
        icon: '🧠',
      },
    ],
    tastingNotes: ['Grassy', 'Fresh', 'Vegetal', 'Subtle Sweetness'],
    servingSize: '1 tsp per 8 oz water, 3-4 min steep',
    shelfLife: '1-2 years',
    origin: 'Badulla District, Sri Lanka',
  },
  {
    id: 'oolong-tea-premium',
    name: 'Ceylon Oolong Tea',
    collection: 'teas',
    price: 28,
    image: '/images/oolong-tea.jpg',
    description: 'Semi-oxidized oolong with fruity and floral notes',
    longDescription: 'A masterpiece of tea craftsmanship, our oolong is partially oxidized to develop complex fruity and floral character. The rolled leaves unfurl to reveal a sophisticated flavor that evolves with each steep.',
    flavorProfile: {
      spice: 2,
      sweetness: 7,
      earthiness: 4,
      fruitiness: 8,
      florality: 7,
    },
    source: {
      region: 'Matara District, Sri Lanka',
      elevation: '1000-1500m',
      harvest: 'May-October',
      coordinates: { lat: 5.7489, lng: 80.5632 },
      story: 'Our oolong is produced by master tea makers who have spent decades perfecting the oxidation timing. This precision creates an extraordinary balance of fruit, floral, and subtle spice notes.',
    },
    healthBenefits: [
      {
        name: 'Heart Health',
        description: 'Supports cardiovascular wellness',
        icon: '❤️',
      },
      {
        name: 'Weight Balance',
        description: 'Supports healthy metabolism',
        icon: '⚖️',
      },
      {
        name: 'Antioxidants',
        description: 'Powerful free radical fighters',
        icon: '💪',
      },
    ],
    tastingNotes: ['Fruity', 'Floral', 'Honey', 'Orchid'],
    servingSize: '1 tsp per 8 oz water, 4-5 min steep',
    shelfLife: '2-3 years',
    origin: 'Matara District, Sri Lanka',
  },
  {
    id: 'immunity-chai-blend',
    name: 'Immunity Chai Blend',
    collection: 'blends',
    price: 26,
    image: '/images/immunity-chai.jpg',
    description: 'Warming chai blend to support immunity and vitality',
    longDescription: 'A carefully crafted blend of cinnamon, ginger, cardamom, clove, and black pepper designed to boost immunity and support overall wellness. Perfect for cozy mornings or evening meditation.',
    flavorProfile: {
      spice: 8,
      sweetness: 4,
      earthiness: 6,
      fruitiness: 1,
      florality: 3,
    },
    source: {
      region: 'Multi-region Sri Lanka',
      elevation: '400-2000m',
      harvest: 'Year-round',
      coordinates: { lat: 7.1, lng: 80.6 },
      story: 'Each ingredient in this immunity blend is sourced from certified organic farms across Sri Lanka. We work directly with farmers to ensure the highest quality and freshness for maximum health benefits.',
    },
    healthBenefits: [
      {
        name: 'Immune Boost',
        description: 'Combines 5 immune-supporting spices',
        icon: '💪',
      },
      {
        name: 'Respiratory Health',
        description: 'Supports clear breathing',
        icon: '💨',
      },
      {
        name: 'Warming Energy',
        description: 'Increases circulation naturally',
        icon: '🔥',
      },
    ],
    tastingNotes: ['Warming', 'Spiced', 'Peppery', 'Comforting'],
    servingSize: '1 tsp per 8 oz warm milk or water',
    shelfLife: '18-24 months',
    origin: 'Sri Lanka',
  },
  {
    id: 'sleep-wellness-blend',
    name: 'Sleep Wellness Blend',
    collection: 'wellness',
    price: 24,
    image: '/images/sleep-blend.jpg',
    description: 'Calming herbal blend to support restful sleep',
    longDescription: 'A gentle blend of passionflower, lemongrass, chamomile, and lavender designed to promote relaxation and support deep, restful sleep. Perfect as an evening ritual before bed.',
    flavorProfile: {
      spice: 1,
      sweetness: 5,
      earthiness: 4,
      fruitiness: 3,
      florality: 9,
    },
    source: {
      region: 'Kandy District, Sri Lanka',
      elevation: '800-1200m',
      harvest: 'Year-round',
      coordinates: { lat: 7.2906, lng: 80.6337 },
      story: 'This sleep blend is made from herbs grown on sustainable farms using traditional methods. We partner with herbalists who understand the traditional uses of each plant for optimal wellness.',
    },
    healthBenefits: [
      {
        name: 'Sleep Support',
        description: 'Promotes deep, restful sleep naturally',
        icon: '😴',
      },
      {
        name: 'Relaxation',
        description: 'Calms the mind and nervous system',
        icon: '🧘',
      },
      {
        name: 'Stress Relief',
        description: 'Eases tension and worry',
        icon: '💆',
      },
    ],
    tastingNotes: ['Floral', 'Herbal', 'Calming', 'Gentle'],
    servingSize: '1 tsp per 8 oz hot water, 5-7 min steep',
    shelfLife: '18-24 months',
    origin: 'Kandy District, Sri Lanka',
  },
  {
    id: 'digestive-wellness-blend',
    name: 'Digestive Wellness Blend',
    collection: 'wellness',
    price: 22,
    image: '/images/digestive-blend.jpg',
    description: 'Soothing blend to support healthy digestion',
    longDescription: 'A traditional Ayurvedic formula combining ginger, fennel, fenugreek, and cumin to support digestion and comfort. Perfect after meals or as a daily wellness ritual.',
    flavorProfile: {
      spice: 6,
      sweetness: 3,
      earthiness: 7,
      fruitiness: 1,
      florality: 2,
    },
    source: {
      region: 'Multi-region Sri Lanka',
      elevation: '400-1200m',
      harvest: 'Year-round',
      coordinates: { lat: 7.1, lng: 80.6 },
      story: 'This digestive blend honors thousands of years of Ayurvedic wisdom. Each ingredient is selected for its traditional role in supporting healthy digestion and comfort.',
    },
    healthBenefits: [
      {
        name: 'Digestive Support',
        description: 'Aids healthy digestion naturally',
        icon: '🌿',
      },
      {
        name: 'Comfort',
        description: 'Soothes digestive discomfort',
        icon: '💚',
      },
      {
        name: 'Nutrient Absorption',
        description: 'Supports optimal nutrient uptake',
        icon: '✨',
      },
    ],
    tastingNotes: ['Warm', 'Spiced', 'Sweet Seed', 'Herbal'],
    servingSize: '1 tsp per 8 oz warm water after meals',
    shelfLife: '18-24 months',
    origin: 'Sri Lanka',
  },
  {
    id: 'kolakanda-spice-blend',
    name: 'Kolakanda Spice Blend',
    collection: 'blends',
    price: 28,
    image: '/images/kolakanda.jpg',
    description: 'Traditional Sri Lankan spice blend for festive cooking',
    longDescription: 'An authentic blend of the spices that define Sri Lankan cuisine. Kolakanda combines cinnamon, clove, cardamom, nutmeg, and traditional ingredients to add depth and tradition to any dish. A staple for celebrations and festive meals.',
    flavorProfile: {
      spice: 8,
      sweetness: 6,
      earthiness: 7,
      fruitiness: 3,
      florality: 5,
    },
    source: {
      region: 'Multi-region Sri Lanka',
      elevation: '500-2000m',
      harvest: 'Year-round',
      coordinates: { lat: 7.1, lng: 80.6 },
      story: 'This traditional blend is made using a recipe passed down through generations of Sri Lankan families. Each ingredient is sourced from our network of heritage spice farmers.',
    },
    healthBenefits: [
      {
        name: 'Digestive Support',
        description: 'Supports healthy digestion naturally',
        icon: '🌿',
      },
      {
        name: 'Circulation',
        description: 'Promotes healthy blood flow',
        icon: '❤️',
      },
      {
        name: 'Heritage Wellness',
        description: 'Traditional wellness wisdom',
        icon: '🧘',
      },
    ],
    tastingNotes: ['Warm', 'Complex', 'Sweet-Spicy', 'Festive'],
    servingSize: '1-2 tsp per dish',
    shelfLife: '24-36 months',
    origin: 'Sri Lanka',
  },
  {
    id: 'organic-baby-cereal',
    name: 'Organic Rice Baby Cereal',
    collection: 'Baby care',
    price: 15,
    image: '/images/baby-cereal.jpg',
    description: 'Gentle, easy-to-digest organic rice cereal for babies',
    longDescription: 'Sourced from the finest organic rice paddies, this baby cereal is specially formulated for your little one\'s first solid-food experience. Fortified with essential vitamins and minimally processed.',
    flavorProfile: { spice: 0, sweetness: 2, earthiness: 3, fruitiness: 0, florality: 0 },
    source: {
      region: 'Kurunegala, Sri Lanka',
      elevation: '200m',
      harvest: 'Seasonal',
      coordinates: { lat: 7.4818, lng: 80.3609 },
      story: 'Cultivated in pure, organic soil away from modern pollutants to ensure safety for infants.'
    },
    healthBenefits: [
      { name: 'Gentle Digestion', description: 'Perfect for little tummies', icon: '👶' }
    ],
    tastingNotes: ['Mild', 'Creamy', 'Subtle Rice'],
    servingSize: '2 tbsp',
    shelfLife: '12 months',
    origin: 'Sri Lanka',
    featured: true
  },
  {
    id: 'kithul-treacle',
    name: 'Pure Kithul Treacle',
    collection: 'Dessert',
    price: 25,
    image: '/images/kithul.jpg',
    description: '100% pure kithul palm syrup, perfect for desserts',
    longDescription: 'Traditionally tapped from the Kithul palm, this dark, rich syrup has a unique woody sweetness. Used in classic Sri Lankan desserts like curd and treacle.',
    flavorProfile: { spice: 1, sweetness: 9, earthiness: 6, fruitiness: 3, florality: 2 },
    source: {
      region: 'Kegalle, Sri Lanka',
      elevation: '400m',
      harvest: 'Year-round',
      coordinates: { lat: 7.252, lng: 80.346 },
      story: 'Harvested by skilled traditional tappers who inherit the ancient art of Kithul tapping.'
    },
    healthBenefits: [
      { name: 'Low GI Alternative', description: 'Better alternative to refined sugar', icon: '🍯' }
    ],
    tastingNotes: ['Woody', 'Caramel', 'Smoky', 'Rich'],
    servingSize: '1 tbsp',
    shelfLife: '18 months',
    origin: 'Sri Lanka',
    featured: true
  },
  {
    id: 'dried-sprats-premium',
    name: 'Premium Dried Sprats',
    collection: 'Dry Fish',
    price: 18,
    image: '/images/sprats.jpg',
    description: 'Sun-dried premium sprats, essential for local curries',
    longDescription: 'Freshly caught and sun-dried to perfection. These sprats add an authentic umami flavor to Sri Lankan dishes, especially the beloved tempered sprats (halmesso theldala).',
    flavorProfile: { spice: 0, sweetness: 0, earthiness: 4, fruitiness: 0, florality: 0 },
    source: {
      region: 'Negombo, Sri Lanka',
      elevation: 'Sea level',
      harvest: 'Year-round',
      coordinates: { lat: 7.2008, lng: 79.8737 },
      story: 'Sourced from the historic fishing village of Negombo and dried under the pure tropical sun.'
    },
    healthBenefits: [
      { name: 'High Protein', description: 'Excellent source of marine protein', icon: '🐟' }
    ],
    tastingNotes: ['Salty', 'Umami', 'Crispy'],
    servingSize: '50g',
    shelfLife: '6 months',
    origin: 'Negombo, Sri Lanka',
    featured: true
  },
  {
    id: 'frozen-cassava',
    name: 'Frozen Cassava (Manioc)',
    collection: 'Frozen food',
    price: 12,
    image: '/images/cassava.jpg',
    description: 'Peeled and frozen cassava root, ready to boil',
    longDescription: 'Premium grade manioc, peeled, washed, and flash-frozen to retain its starchy goodness. Enjoy boiled with grated coconut and lunu miris.',
    flavorProfile: { spice: 0, sweetness: 1, earthiness: 7, fruitiness: 0, florality: 0 },
    source: {
      region: 'Gampaha, Sri Lanka',
      elevation: '50m',
      harvest: 'Seasonal',
      coordinates: { lat: 7.0873, lng: 79.9995 },
      story: 'Grown by local farmers and frozen within hours of harvest to preserve freshness.'
    },
    healthBenefits: [
      { name: 'Energy Source', description: 'Rich in complex carbohydrates', icon: '🍠' }
    ],
    tastingNotes: ['Starchy', 'Earthy', 'Mild'],
    servingSize: '100g',
    shelfLife: '12 months',
    origin: 'Sri Lanka',
    featured: true
  },
  {
    id: 'fresh-rambutan',
    name: 'Fresh Rambutan',
    collection: 'Fruits',
    price: 22,
    image: '/images/rambutan.jpg',
    description: 'Sweet, juicy, and freshly picked Rambutan',
    longDescription: 'Direct from Malwana, the Rambutan capital of Sri Lanka. These fruits have a brilliantly red, hairy exterior with juicy, translucent, sweet flesh inside.',
    flavorProfile: { spice: 0, sweetness: 8, earthiness: 1, fruitiness: 9, florality: 4 },
    source: {
      region: 'Malwana, Sri Lanka',
      elevation: '100m',
      harvest: 'July-August',
      coordinates: { lat: 6.953, lng: 80.007 },
      story: 'Famous Malwana rambutans are known country-wide for their exceptional sweetness and quality.'
    },
    healthBenefits: [
      { name: 'Vitamin C', description: 'High in natural antioxidants', icon: '🍒' }
    ],
    tastingNotes: ['Sweet', 'Juicy', 'Tropical'],
    servingSize: '5 fruits',
    shelfLife: '1 week',
    origin: 'Malwana, Sri Lanka',
    featured: true
  },
  {
    id: 'red-raw-rice',
    name: 'Red Raw Rice (Kekulu)',
    collection: 'Grocery',
    price: 10,
    image: '/images/red-rice.jpg',
    description: 'Nutrient-rich unpolished red rice',
    longDescription: 'Traditional Sri Lankan red rice, unpolished to retain its bran. It has a nutty flavor, slightly chewy texture, and is highly nutritious compared to white rice.',
    flavorProfile: { spice: 0, sweetness: 1, earthiness: 8, fruitiness: 0, florality: 0 },
    source: {
      region: 'Anuradhapura, Sri Lanka',
      elevation: '90m',
      harvest: 'Maha Season',
      coordinates: { lat: 8.3114, lng: 80.4037 },
      story: 'Grown in the ancient cultural triangle using irrigation systems built by kings centuries ago.'
    },
    healthBenefits: [
      { name: 'High Fiber', description: 'Great for digestive health', icon: '🌾' }
    ],
    tastingNotes: ['Nutty', 'Earthy', 'Wholesome'],
    servingSize: '1/2 cup cooked',
    shelfLife: '12 months',
    origin: 'Sri Lanka',
    featured: true
  },
  {
    id: 'samahan-tea',
    name: 'Samahan Herbal Drink',
    collection: 'Health',
    price: 14,
    image: '/images/samahan.jpg',
    description: '100% natural authentic herbal Ayurvedic drink',
    longDescription: 'A trusted remedy in Sri Lanka for centuries. Formulated with 14 selected Ayurvedic herbs, it provides quick relief from cold, cough, and body aches.',
    flavorProfile: { spice: 7, sweetness: 3, earthiness: 6, fruitiness: 1, florality: 2 },
    source: {
      region: 'Multi-region Sri Lanka',
      elevation: 'Various',
      harvest: 'Year-round',
      coordinates: { lat: 7.0, lng: 80.0 },
      story: 'A perfectly balanced traditional formulation, manufactured to world-class standards.'
    },
    healthBenefits: [
      { name: 'Cold Relief', description: 'Soothes throat and relieves cold', icon: '☕' }
    ],
    tastingNotes: ['Spicy', 'Warming', 'Herbal', 'Sweet finish'],
    servingSize: '1 sachet',
    shelfLife: '24 months',
    origin: 'Sri Lanka',
    featured: true
  },
  {
    id: 'king-coconut-water',
    name: 'King Coconut Water',
    collection: 'Drinks',
    price: 18,
    image: '/images/king-coconut.jpg',
    description: '100% pure organic King Coconut water',
    longDescription: 'Bottled fresh from the golden orange King Coconuts, native only to Sri Lanka. Sweeter than standard green coconut water with naturally balanced electrolytes.',
    flavorProfile: { spice: 0, sweetness: 6, earthiness: 2, fruitiness: 5, florality: 1 },
    source: {
      region: 'Kurunegala, Sri Lanka',
      elevation: '150m',
      harvest: 'Year-round',
      coordinates: { lat: 7.481, lng: 80.36 },
      story: 'The King Coconut is deeply intertwined with Sri Lankan culture as the ultimate natural refresher.'
    },
    healthBenefits: [
      { name: 'Hydration', description: 'Rich in natural electrolytes', icon: '🥥' }
    ],
    tastingNotes: ['Sweet', 'Refreshing', 'Nutty'],
    servingSize: '250ml',
    shelfLife: '12 months',
    origin: 'Sri Lanka',
    featured: true
  },
  {
    id: 'dried-bitter-gourd',
    name: 'Dried Bitter Gourd (Karawila)',
    collection: 'Dried vegetables',
    price: 16,
    image: '/images/karawila.jpg',
    description: 'Sun-dried bitter gourd slices for healthy dishes',
    longDescription: 'Thinly sliced and sun-dried to preserve its potent health properties. Excellent for deep frying and mixing into a healthy sambol or curry.',
    flavorProfile: { spice: 0, sweetness: 0, earthiness: 6, fruitiness: 0, florality: 0 },
    source: {
      region: 'Dambulla, Sri Lanka',
      elevation: '150m',
      harvest: 'Year-round',
      coordinates: { lat: 7.859, lng: 80.654 },
      story: 'Carefully prepared by village women cooperatives to maintain the perfect crispiness.'
    },
    healthBenefits: [
      { name: 'Blood Sugar Control', description: 'Known to help manage glucose levels', icon: '🌱' }
    ],
    tastingNotes: ['Bitter', 'Crisp', 'Earthy'],
    servingSize: '30g',
    shelfLife: '9 months',
    origin: 'Sri Lanka',
    featured: true
  },
  {
    id: 'ayurvedic-hair-oil',
    name: 'Neelayadi Hair Oil',
    collection: 'Cosmetics',
    price: 22,
    image: '/images/neelayadi.jpg',
    description: 'Traditional Ayurvedic cooling hair oil',
    longDescription: 'A deeply nourishing hair oil formulated from authentic Ayurvedic recipes. Known for its cooling properties to relax the mind while promoting healthy hair growth.',
    flavorProfile: { spice: 2, sweetness: 1, earthiness: 8, fruitiness: 0, florality: 5 },
    source: {
      region: 'Colombo, Sri Lanka',
      elevation: 'Sea level',
      harvest: 'Year-round',
      coordinates: { lat: 6.9, lng: 79.8 },
      story: 'Manufactured using ancient methods of slowly infusing herbs in pure coconut oil over mild heat.'
    },
    healthBenefits: [
      { name: 'Scalp Health', description: 'Nourishes and cools the scalp', icon: '💆' }
    ],
    tastingNotes: ['Herbal', 'Coconut', 'Aromatic'],
    servingSize: 'Few drops',
    shelfLife: '24 months',
    origin: 'Sri Lanka',
    featured: true
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter(p => p.collection === collection);
}
