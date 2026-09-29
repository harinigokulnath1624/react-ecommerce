# Cartora

Cartora is a React ecommerce practice project built with React, React Router, Axios and Bootstrap.

## Features

- Home page
- Product listing from DummyJSON API
- Product search
- Category filtering
- Product details page
- Add to cart
- Increase/decrease quantity
- Remove from cart
- Cart count in navbar
- Cart persistence with localStorage
- Checkout form
- Order success page
- Responsive Bootstrap layout

## Project Structure

```text
Cartora/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── Navbar.jsx
    │   └── ProductCard.jsx
    ├── context/
    │   └── CartContext.jsx
    ├── hooks/
    │   └── useProducts.js
    ├── pages/
    │   ├── Home.jsx
    │   ├── Products.jsx
    │   ├── ProductDetails.jsx
    │   ├── Cart.jsx
    │   ├── Checkout.jsx
    │   └── OrderSuccess.jsx
    └── services/
        └── productService.js
```

## Run the project

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Main Flow

Home → Products → Product Details → Cart → Checkout → Order Success

## Cartora Visual Theme

Cartora uses a warm **terracotta + saffron + charcoal + ivory** palette to give the project a different identity from the earlier purple/blue and emerald-based projects.
