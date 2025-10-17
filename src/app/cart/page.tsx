'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card>
          <CardContent className="p-12 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="brand-font text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Start adding some adorable Ronibooblies to your collection!
            </p>
            <Link href="/shop">
              <Button size="lg" className="rounded-full">
                Browse Collection
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="brand-font text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-6">
                <div className="flex gap-6">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 bg-secondary rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.colorVariant}
                    </p>
                    <p className="text-lg font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    <div className="flex items-center border rounded-full">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="rounded-full h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-10 text-center font-semibold text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.stockCount ? item.quantity >= item.stockCount : false}
                        className="rounded-full h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Item Total */}
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Item Total</span>
                  <span className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6 space-y-4">
              <h2 className="font-semibold text-xl mb-4">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-500">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                {subtotal > 0 && subtotal < 50 && (
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      Add <span className="font-bold text-primary">${(50 - subtotal).toFixed(2)}</span> more for free shipping!
                    </p>
                  </div>
                )}

                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="font-bold text-2xl text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button size="lg" className="w-full rounded-full text-lg mt-6">
                Proceed to Checkout
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>

              <div className="text-center pt-4">
                <Link href="/shop">
                  <Button variant="ghost" className="text-sm">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="border-t pt-4 space-y-2 text-xs text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Secure checkout with SSL encryption
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  30-day money-back guarantee
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Authentic Ronibooblies guaranteed
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
