# Ronibooblies - Collectible Figurine E-commerce

A beautiful, modern e-commerce website for selling adorable Ronibooblie collectible figurines. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

### 🎨 Beautiful Design
- Soft pastel color palette with pink, mint, and cream tones
- Rounded, friendly UI elements inspired by collectible toy aesthetics
- Responsive design that works perfectly on mobile and desktop
- Custom fonts (Fredoka & Quicksand) for a playful, approachable feel

### 🛍️ Complete E-commerce Experience
- **Homepage**: Hero section with featured products and category navigation
- **Shop**: Full product catalog with filtering by category and rarity
- **Product Details**: Detailed product pages with specifications, images, and purchase options
- **Shopping Cart**: Full cart management with quantity controls and order summary
- **Collection Gallery**: Showcase of all products with community features

### 🎯 Key Pages
1. **Home** (`/`) - Hero section, featured products, reviews, trust badges
2. **Shop** (`/shop`) - Complete product catalog with filters
3. **Product Detail** (`/product/[id]`) - Individual product pages with full details
4. **Collection** (`/collection`) - Gallery view with community showcase
5. **Cart** (`/cart`) - Shopping cart with checkout flow
6. **About** (`/about`) - Brand story and values
7. **Contact** (`/contact`) - Contact form and information

### 🎁 Product Features
- 10 unique Ronibooblie designs with custom SVG illustrations
- Rarity system (Common, Rare, Limited Edition, Ultra Rare)
- Stock tracking and low-stock indicators
- Product variants with different colors and accessories
- Detailed specifications (dimensions, materials, etc.)

### 🛒 Shopping Experience
- Persistent cart storage with localStorage
- Real-time cart updates
- Free shipping threshold ($50+)
- Quantity management
- Wishlist functionality (heart icons)
- Product recommendations

### 🎨 Design System
- **Primary Color**: Soft Pink (#FFB6D9)
- **Secondary Color**: Cream/Beige (#FFF8DC)
- **Accent Color**: Mint Green (#B5E7A0)
- **Typography**: Fredoka for headings, Quicksand for body
- **Components**: Built with shadcn/ui for consistency

## Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **State Management**: React Context API for cart
- **Font Loading**: Next.js Font Optimization

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cart/              # Shopping cart
│   ├── collection/        # Collection gallery
│   ├── contact/           # Contact page
│   ├── product/[id]/      # Dynamic product pages
│   ├── shop/              # Shop/catalog page
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles & design system
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   ├── header.tsx         # Site header with nav
│   ├── footer.tsx         # Site footer
│   └── product-card.tsx   # Product card component
├── contexts/              # React contexts
│   └── cart-context.tsx   # Shopping cart state
├── lib/                   # Utility functions
│   ├── products.ts        # Product data & helpers
│   └── utils.ts           # Helper functions
└── hooks/                 # Custom React hooks

public/
└── images/
    └── products/          # Product SVG images
        ├── cotton-candy-dreams.svg
        ├── sky-bubble.svg
        ├── sunshine-smile.svg
        └── ... (10 total products)
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:4006](http://localhost:4006) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Product Data

All product data is stored in `src/lib/products.ts` including:
- Product information (name, price, description)
- Categories and rarity levels
- Stock information
- Product specifications
- Helper functions for filtering and retrieval

## Cart System

The shopping cart uses React Context API with localStorage persistence:
- Add/remove items
- Update quantities
- Calculate totals
- Persistent across page reloads
- Free shipping calculation

## Design Philosophy

The design follows these principles:
1. **Cute & Friendly**: Rounded corners, soft colors, playful typography
2. **Trust & Credibility**: Clear pricing, security badges, customer reviews
3. **Mobile-First**: Responsive design that works beautifully on all devices
4. **Performance**: Optimized images, lazy loading, efficient rendering
5. **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: 351 100% 86%;        /* Soft Pink */
  --secondary: 45 100% 93%;       /* Cream */
  --accent: 140 40% 85%;          /* Mint */
}
```

### Products
Add/edit products in `src/lib/products.ts` and corresponding images in `public/images/products/`

### Fonts
Fonts are loaded via Google Fonts in `src/app/globals.css`. Change the import URL to use different fonts.

## Future Enhancements

Potential features to add:
- User authentication and accounts
- Order history and tracking
- Payment integration (Stripe, PayPal)
- Product search functionality
- Advanced filtering (price range, sorting)
- Wishlist persistence
- Product reviews and ratings
- Email notifications
- Admin dashboard for product management
- Multi-language support
- Dark mode

## License

This project is created for demonstration purposes.

## Credits

- Design inspired by collectible toy e-commerce sites
- Icons by Lucide React
- UI components by shadcn/ui
- Built with Next.js and React
