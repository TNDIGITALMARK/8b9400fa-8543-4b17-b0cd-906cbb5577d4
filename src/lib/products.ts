export type RarityLevel = 'common' | 'rare' | 'limited' | 'ultra-rare';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rarity: RarityLevel;
  description: string;
  inStock: boolean;
  stockCount?: number;
  colorVariant: string;
  dimensions: string;
  material: string;
}

export const categories = [
  { id: 'new-arrivals', name: 'New Arrivals', icon: '✨' },
  { id: 'fantasy-blobs', name: 'Fantasy Blobs', icon: '🧚' },
  { id: 'foodie-blobs', name: 'Foodie Blobs', icon: '🍰' },
  { id: 'seasonal', name: 'Seasonal', icon: '🎄' },
  { id: 'accessories', name: 'Accessories', icon: '👑' },
  { id: 'mystery-boxes', name: 'Mystery Boxes', icon: '📦' }
];

export const products: Product[] = [
  {
    id: 'rb-001',
    name: 'Cotton Candy Dreams',
    price: 24.99,
    image: '/images/products/cotton-candy-dreams.svg',
    category: 'new-arrivals',
    rarity: 'common',
    description: 'The sweetest Ronibooblie with a fluffy pink appearance reminiscent of cotton candy at the fair.',
    inStock: true,
    stockCount: 47,
    colorVariant: 'Pink',
    dimensions: '3.5" x 3" x 3"',
    material: 'Premium vinyl with matte finish'
  },
  {
    id: 'rb-002',
    name: 'Sky Bubble',
    price: 24.99,
    image: '/images/products/sky-bubble.svg',
    category: 'new-arrivals',
    rarity: 'common',
    description: 'A cheerful blue Ronibooblie that brings the joy of clear summer skies wherever it goes.',
    inStock: true,
    stockCount: 52,
    colorVariant: 'Blue',
    dimensions: '3.5" x 3" x 3"',
    material: 'Premium vinyl with matte finish'
  },
  {
    id: 'rb-003',
    name: 'Sunshine Smile',
    price: 24.99,
    image: '/images/products/sunshine-smile.svg',
    category: 'new-arrivals',
    rarity: 'common',
    description: 'This golden yellow Ronibooblie radiates warmth and happiness with its adorable little crown.',
    inStock: true,
    stockCount: 38,
    colorVariant: 'Yellow',
    dimensions: '3.5" x 3" x 3"',
    material: 'Premium vinyl with matte finish'
  },
  {
    id: 'rb-004',
    name: 'Galaxy Sparkle',
    price: 49.99,
    image: '/images/products/galaxy-sparkle.svg',
    category: 'fantasy-blobs',
    rarity: 'rare',
    description: 'A mystical purple Ronibooblie with cosmic sparkles that shimmer in the light. Limited production run.',
    inStock: true,
    stockCount: 12,
    colorVariant: 'Purple Galaxy',
    dimensions: '3.5" x 3" x 3"',
    material: 'Premium vinyl with glitter finish'
  },
  {
    id: 'rb-005',
    name: 'Mint Melody',
    price: 24.99,
    image: '/images/products/mint-melody.svg',
    category: 'new-arrivals',
    rarity: 'common',
    description: 'A refreshing mint green Ronibooblie that brings calm and serenity to your collection.',
    inStock: true,
    stockCount: 41,
    colorVariant: 'Mint',
    dimensions: '3.5" x 3" x 3"',
    material: 'Premium vinyl with matte finish'
  },
  {
    id: 'rb-006',
    name: 'Peachy Keen',
    price: 24.99,
    image: '/images/products/peachy-keen.svg',
    category: 'foodie-blobs',
    rarity: 'common',
    description: 'This peachy-orange Ronibooblie is as sweet as its fruity namesake.',
    inStock: true,
    stockCount: 35,
    colorVariant: 'Peach',
    dimensions: '3.5" x 3" x 3"',
    material: 'Premium vinyl with matte finish'
  },
  {
    id: 'rb-007',
    name: 'Cupcake Cutie',
    price: 34.99,
    image: '/images/products/cupcake-cutie.svg',
    category: 'foodie-blobs',
    rarity: 'limited',
    description: 'A special edition Ronibooblie dressed as a delicious cupcake with frosting hat. Valentine\'s exclusive!',
    inStock: true,
    stockCount: 8,
    colorVariant: 'Pink & White',
    dimensions: '4" x 3.5" x 3.5"',
    material: 'Premium vinyl with special frosting texture'
  },
  {
    id: 'rb-008',
    name: 'Holiday Winter',
    price: 34.99,
    image: '/images/products/holiday-winter.svg',
    category: 'seasonal',
    rarity: 'limited',
    description: 'Celebrate the holidays with this festive Ronibooblie wearing a cozy winter hat.',
    inStock: false,
    stockCount: 0,
    colorVariant: 'Multi',
    dimensions: '4" x 3.5" x 3.5"',
    material: 'Premium vinyl with fabric accessories'
  },
  {
    id: 'rb-009',
    name: 'Rainbow Unicorn',
    price: 79.99,
    image: '/images/products/rainbow-unicorn.svg',
    category: 'fantasy-blobs',
    rarity: 'ultra-rare',
    description: 'The crown jewel of any collection! This ultra-rare rainbow Ronibooblie features a magical unicorn horn and only 100 were ever made.',
    inStock: true,
    stockCount: 3,
    colorVariant: 'Rainbow Gradient',
    dimensions: '4.5" x 4" x 4"',
    material: 'Premium vinyl with iridescent finish and metal horn'
  },
  {
    id: 'rb-010',
    name: 'Mystery Box Series 1',
    price: 19.99,
    image: '/images/products/mystery-box.svg',
    category: 'mystery-boxes',
    rarity: 'common',
    description: 'Can\'t decide? Get a surprise! Each box contains one randomly selected Ronibooblie from our common series.',
    inStock: true,
    stockCount: 150,
    colorVariant: 'Random',
    dimensions: '4" x 4" x 4" box',
    material: 'Sealed collector box with random figure'
  }
];

export const rarityBadges: Record<RarityLevel, { color: string; label: string }> = {
  'common': { color: 'bg-gray-500', label: 'Common' },
  'rare': { color: 'bg-purple-500', label: 'Rare' },
  'limited': { color: 'bg-orange-500', label: 'Limited Edition' },
  'ultra-rare': { color: 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500', label: 'Ultra Rare' }
};

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 6);
}
