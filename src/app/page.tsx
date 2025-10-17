import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getFeaturedProducts, categories } from '@/lib/products';
import { Sparkles, ShieldCheck, Truck, Star } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="brand-font text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Discover Your Next
                <br />
                <span className="text-primary">Best Friend!</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Collect the cutest Ronibooblie figurines! Limited editions, exclusive drops, and endless cuteness await.
              </p>
              <Link href="/shop">
                <Button size="lg" className="rounded-full px-8 text-lg">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore Collection
                </Button>
              </Link>
            </div>

            {/* Hero Images */}
            <div className="flex-1 relative">
              <div className="flex justify-center items-end gap-4">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/images/products/sky-bubble.svg"
                    alt="Sky Bubble"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 -mt-8">
                  <Image
                    src="/images/products/cupcake-cutie.svg"
                    alt="Cupcake Cutie"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/images/products/sunshine-smile.svg"
                    alt="Sunshine Smile"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Sidebar & Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="md:w-64 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/shop?category=${category.id}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{category.icon}</span>
                          <span className="text-sm">{category.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold mb-1">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">on orders over $50!</p>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Featured Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="brand-font text-3xl font-bold">Featured Collection</h2>
                <Link href="/shop">
                  <Button variant="outline" className="rounded-full">
                    View All
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="brand-font text-3xl font-bold text-center mb-12">
            Customer Reviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Review 1 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">👩</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">Stephanie Ashik</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This place bakes up super-cute Ronibooblies! The quality is amazing and shipping was so fast. Highly recommend!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">👨</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">Steinhous Oxbi</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      My entire family is totally loving our set of Ronibooblies! They&apos;re even cuter in person. Perfect gift!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Secure Checkout</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Truck className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Fast Shipping</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">5-Star Rated</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <p className="text-sm font-medium">Limited Editions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
