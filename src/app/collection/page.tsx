import Image from 'next/image';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/products';
import { Star, Users, Heart, Trophy } from 'lucide-react';

export default function CollectionPage() {
  const customerPhotos = [
    { id: 1, name: 'Sarah M.', photo: '👩', collection: 5 },
    { id: 2, name: 'Mike T.', photo: '👨', collection: 12 },
    { id: 3, name: 'Emma L.', photo: '👧', collection: 8 },
    { id: 4, name: 'James K.', photo: '🧑', collection: 15 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="brand-font text-4xl md:text-5xl font-bold mb-4">
          The Ronibooblie Collection
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our complete gallery of adorable collectibles and join our community of passionate collectors
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{products.length}</p>
            <p className="text-sm text-muted-foreground">Total Designs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">2,847</p>
            <p className="text-sm text-muted-foreground">Collectors</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">12,453</p>
            <p className="text-sm text-muted-foreground">Items Sold</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">4.9</p>
            <p className="text-sm text-muted-foreground">Avg Rating</p>
          </CardContent>
        </Card>
      </div>

      {/* Complete Collection Grid */}
      <section className="mb-16">
        <h2 className="brand-font text-3xl font-bold mb-8">Complete Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Community Showcase */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="brand-font text-3xl font-bold mb-4">Community Showcase</h2>
          <p className="text-muted-foreground">
            See how collectors around the world display their Ronibooblies!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerPhotos.map((customer) => (
            <Card key={customer.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {/* Customer Photo Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{customer.photo}</div>
                      <p className="font-semibold text-lg">{customer.name}</p>
                      <Badge className="mt-2">
                        {customer.collection} Ronibooblies
                      </Badge>
                    </div>
                  </div>
                </div>
                {/* Caption */}
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    &quot;Love my collection! They bring so much joy every day.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Share Your Collection CTA */}
      <Card className="bg-gradient-to-r from-primary/10 via-secondary to-accent/10 border-primary/20">
        <CardContent className="p-12 text-center">
          <h2 className="brand-font text-3xl font-bold mb-4">
            Share Your Collection!
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our community of collectors! Share photos of your Ronibooblie display
            and get featured on our gallery. Tag us #MyRonibooblies on social media!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge className="bg-primary text-white text-sm px-4 py-2">
              📷 Instagram: @ronibooblies
            </Badge>
            <Badge className="bg-primary text-white text-sm px-4 py-2">
              🐦 Twitter: @ronibooblies
            </Badge>
            <Badge className="bg-primary text-white text-sm px-4 py-2">
              📱 TikTok: @ronibooblies
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
