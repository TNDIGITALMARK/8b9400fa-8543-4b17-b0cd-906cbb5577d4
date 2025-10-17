'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, rarityBadges, products } from '@/lib/products';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product-card';
import {
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  Package,
  Minus,
  Plus,
  Star,
  ArrowLeft,
} from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/shop">
          <Button>Return to Shop</Button>
        </Link>
      </div>
    );
  }

  const rarityInfo = rarityBadges[product.rarity];
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity);
    setTimeout(() => setIsAdding(false), 800);
  };

  const incrementQuantity = () => {
    if (product.stockCount && quantity < product.stockCount) {
      setQuantity(quantity + 1);
    } else if (!product.stockCount) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div>
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="relative aspect-square bg-secondary rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
                {/* Rarity Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${rarityInfo.color} text-white border-0 text-sm px-3 py-1`}>
                    {rarityInfo.label}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="brand-font text-4xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>
            <p className="text-3xl font-bold text-primary mb-4">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Specifications */}
          <Card>
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span className="text-sm text-muted-foreground">Color</span>
                <span className="text-sm font-medium">{product.colorVariant}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-sm text-muted-foreground">Dimensions</span>
                <span className="text-sm font-medium">{product.dimensions}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-sm text-muted-foreground">Material</span>
                <span className="text-sm font-medium">{product.material}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm text-muted-foreground">Stock</span>
                <span className="text-sm font-medium">
                  {product.inStock ? (
                    product.stockCount && product.stockCount < 10 ? (
                      <span className="text-orange-500">Only {product.stockCount} left!</span>
                    ) : (
                      <span className="text-green-500">In Stock</span>
                    )
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Quantity Selector */}
          {product.inStock && (
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-full">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="rounded-full"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={incrementQuantity}
                  disabled={product.stockCount ? quantity >= product.stockCount : false}
                  className="rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              size="lg"
              className="flex-1 rounded-full text-lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {isAdding ? 'Added to Cart!' : 'Add to Cart'}
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t">
            <div className="text-center">
              <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-xs font-medium">Fast Shipping</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-xs font-medium">Secure Payment</p>
            </div>
            <div className="text-center">
              <Package className="h-6 w-6 text-primary mx-auto mb-2" />
              <p className="text-xs font-medium">Gift Packaging</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="brand-font text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
