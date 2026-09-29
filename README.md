# 🛍️ Cartora – React E-Commerce Application

Cartora is a responsive e-commerce web application built with **React**. It demonstrates modern React concepts such as component-based development, Context API, React Router, API integration, state management, localStorage, and reusable components.


---

## ✨ Features

* 🏠 Responsive Home page
* 🛍️ Product listing page
* 🔍 Product search
* 🗂️ Category filtering
* 📦 Product details page
* 🛒 Add products to cart
* ➕ Increase product quantity
* ➖ Decrease product quantity
* ❌ Remove products from cart
* 🧹 Clear cart
* 💾 Cart persistence using localStorage
* 💰 Automatic cart total calculation
* 👤 Checkout form
* ✅ Order success page
* 🔄 React Router navigation
* 📡 Product data fetched from DummyJSON API
* 📱 Responsive design
* 🎨 Custom warm color palette

---

## 🛠️ Technologies Used

* **React**
* **JavaScript**
* **React Router DOM**
* **Context API**
* **Axios**
* **Bootstrap**
* **Bootstrap Icons**
* **CSS**
* **Vite**
* **DummyJSON API**
* **LocalStorage**

---

## 📁 Project Structure

```text
Cartora/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── hooks/
│   │   └── useProducts.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderSuccess.jsx
│   │
│   ├── services/
│   │   └── productService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔄 Application Flow

```text
Home
  ↓
Products
  ↓
Product Details
  ↓
Add to Cart
  ↓
Cart
  ↓
Checkout
  ↓
Order Success
```

---

## 🛒 Cart Management

Cartora uses the **React Context API** to manage cart-related state across the application.

The cart supports:

* Adding products
* Removing products
* Updating quantities
* Calculating total items
* Calculating total price
* Clearing the cart

Cart data is stored in the browser's **localStorage**, allowing the cart to remain available after refreshing the page.

---

## 📡 API Integration

Product information is fetched from the **DummyJSON Products API**.

```text
https://dummyjson.com/products
```

The application retrieves product information such as:

* Product name
* Product image
* Price
* Category
* Rating
* Description
* Brand
* Stock
* Discount

---

## 🎨 Color Palette

Cartora uses a warm and modern palette:

| Color           | Purpose                        |
| --------------- | ------------------------------ |
| Terracotta      | Primary buttons and highlights |
| Dark Terracotta | Hover states                   |
| Saffron         | Accent elements                |
| Charcoal        | Main text                      |
| Warm Ivory      | Background                     |
| Warm Cream      | Cards and sections             |
| Sage Green      | Success states                 |

This palette was chosen to create a different identity from traditional blue, purple, or emerald-themed projects.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate into the project

```bash
cd Cartora
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

### Start Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📚 React Concepts Practiced

This project was created to practice and strengthen several React concepts:

* Components
* Props
* useState
* useEffect
* Context API
* Custom Hooks
* Event Handling
* Conditional Rendering
* Lists and Keys
* React Router
* API Integration
* LocalStorage
* State Management
* Reusable Components

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🔐 User authentication
* ❤️ Wishlist functionality
* 💳 Payment gateway integration
* 📦 Order history
* 👤 User profile
* ⭐ Product reviews
* 🛠️ Admin dashboard
* 🗄️ Backend integration
* 🍃 MongoDB database
* 🔒 Secure authentication
* 📧 Order confirmation emails

---

## 👩‍💻 Author

**Harini Gokulnath**

Aspiring Full Stack Developer

Currently learning and building projects with **React, JavaScript, Node.js, Express.js, MongoDB, and modern web technologies**.

---

## ⭐ Acknowledgement

This project was developed as part of my journey toward becoming a **Full Stack Developer**, with a focus on learning React concepts through practical application development.

---

## 📌 Project Status

**Completed – Frontend React E-Commerce Project**

More features and backend functionality can be added as the project evolves.
