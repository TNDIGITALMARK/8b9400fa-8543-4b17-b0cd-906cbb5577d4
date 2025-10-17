import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="brand-font text-5xl font-bold mb-6">About Ronibooblies</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We&apos;re on a mission to bring joy and cuteness into every home through our
          adorable collectible figurines. Each Ronibooblie is crafted with love and
          designed to make you smile.
        </p>
      </div>

      {/* Story */}
      <section className="mb-16">
        <Card>
          <CardContent className="p-12">
            <h2 className="brand-font text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Ronibooblies was born from a simple idea: to create collectible figurines
                that capture the essence of joy, cuteness, and personality. Inspired by the
                charm of vinyl collectibles like Labubu, we set out to design our own unique
                characters that would resonate with collectors worldwide.
              </p>
              <p>
                Each Ronibooblie starts as a carefully crafted design, brought to life with
                attention to every detail. From their expressive faces to their unique
                accessories, every element is designed to tell a story and create an
                emotional connection with collectors.
              </p>
              <p>
                Today, Ronibooblies has grown into a beloved brand with thousands of
                collectors worldwide. We&apos;re constantly innovating with new designs, limited
                editions, and special collaborations to keep our community excited and engaged.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="brand-font text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Made with Love</h3>
              <p className="text-sm text-muted-foreground">
                Every Ronibooblie is designed and produced with exceptional care and attention
                to detail.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Unique Designs</h3>
              <p className="text-sm text-muted-foreground">
                Original characters and limited editions that you won&apos;t find anywhere else.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Community First</h3>
              <p className="text-sm text-muted-foreground">
                Building a vibrant community of collectors who share their passion and collections.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-3">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                High-quality vinyl materials and finishes that collectors can treasure forever.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <Card className="bg-gradient-to-r from-primary/10 via-secondary to-accent/10 border-primary/20">
        <CardContent className="p-12 text-center">
          <h2 className="brand-font text-3xl font-bold mb-4">
            Join Our Collector Community
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of a passionate community of Ronibooblie collectors. Share your collection,
            get early access to limited drops, and connect with fellow enthusiasts!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
