'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/lib/products';
import { Filter, X } from 'lucide-react';

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (selectedRarity !== 'all' && product.rarity !== selectedRarity) {
      return false;
    }
    return true;
  });

  const rarityOptions = [
    { value: 'all', label: 'All Rarities' },
    { value: 'common', label: 'Common' },
    { value: 'rare', label: 'Rare' },
    { value: 'limited', label: 'Limited Edition' },
    { value: 'ultra-rare', label: 'Ultra Rare' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="brand-font text-4xl md:text-5xl font-bold mb-4">Shop All Ronibooblies</h1>
        <p className="text-muted-foreground text-lg">
          Browse our complete collection of adorable collectible figurines
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block lg:w-64 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                  className="w-full justify-start rounded-full"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Products
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'ghost'}
                    className="w-full justify-start rounded-full"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Rarity</h3>
              <div className="space-y-2">
                {rarityOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={selectedRarity === option.value ? 'default' : 'ghost'}
                    className="w-full justify-start rounded-full"
                    onClick={() => setSelectedRarity(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Mobile Filter Button */}
        <div className="lg:hidden">
          <Button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            variant="outline"
            className="w-full rounded-full mb-4"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {(selectedCategory !== 'all' || selectedRarity !== 'all') && (
              <Badge className="ml-2">Active</Badge>
            )}
          </Button>

          {/* Mobile Filters */}
          {showMobileFilters && (
            <Card className="mb-6">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowMobileFilters(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    <Button
                      variant={selectedCategory === 'all' ? 'default' : 'ghost'}
                      className="w-full justify-start rounded-full"
                      onClick={() => setSelectedCategory('all')}
                    >
                      All Products
                    </Button>
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? 'default' : 'ghost'}
                        className="w-full justify-start rounded-full"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Rarity</h4>
                  <div className="space-y-2">
                    {rarityOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={selectedRarity === option.value ? 'default' : 'ghost'}
                        className="w-full justify-start rounded-full"
                        onClick={() => setSelectedRarity(option.value)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            {(selectedCategory !== 'all' || selectedRarity !== 'all') && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedRarity('all');
                }}
                className="rounded-full"
              >
                Clear Filters
              </Button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground mb-4">
                  No products found matching your filters.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedRarity('all');
                  }}
                  className="rounded-full"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
