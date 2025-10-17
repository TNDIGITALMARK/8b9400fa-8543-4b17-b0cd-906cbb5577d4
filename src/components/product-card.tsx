'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product, rarityBadges } from '@/lib/products';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/cart-context';
import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const rarityInfo = rarityBadges[product.rarity];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
        <CardContent className="p-4">
          {/* Product Image */}
          <div className="relative aspect-square mb-4 bg-secondary rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
            />

            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                // Wishlist functionality can be added later
              }}
              className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            >
              <Heart className="h-4 w-4 text-primary" />
            </button>

            {/* Rarity Badge */}
            <div className="absolute top-3 left-3">
              <Badge className={`${rarityInfo.color} text-white border-0`}>
                {rarityInfo.label}
              </Badge>
            </div>

            {/* Out of Stock Overlay */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-white text-foreground px-4 py-2 rounded-full font-semibold">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.inStock && product.stockCount && product.stockCount < 10 && (
                <span className="text-xs text-orange-500 font-medium">
                  Only {product.stockCount} left!
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              className="w-full rounded-full group-hover:shadow-lg transition-shadow"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isAdding ? 'Added!' : product.inStock ? 'Add to Cart' : 'Sold Out'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
