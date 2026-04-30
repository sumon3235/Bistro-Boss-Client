# 🍽️ Bistro Boss Restaurant

A **frontend-focused** full-stack restaurant web application.
Built with React on the frontend, with a supporting Node.js/Express backend.

**Live Site Frontend:** [bistrobossretaurent.web.app](https://bistrobossretaurent.web.app)  
**Server:** [https://bistro-boss-server-gamma-five.vercel.app](https://bistro-boss-server-pi-mocha.vercel.app)


---

## ✨ Features

### Customer Features
- 🔐 Email/Password & Google authentication with Firebase
- 🛡️ reCAPTCHA v2 protection on registration
- 🍕 Browse menu by category with tab navigation
- 🛒 Add to cart with real-time cart count in navbar
- 💳 Secure payment with Stripe
- 📜 Payment history dashboard
- 📬 Contact form with EmailJS integration
- 🎨 Light/Dark theme support

### Admin Features
- 📊 Admin dashboard with revenue, user, product & order stats
- ➕ Add new menu items with image upload (ImgBB)
- ✏️ Update & delete menu items
- 👥 Manage all users & assign admin role
- 🔒 Role-based route protection

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| React Router v7 | Client-side routing |
| Tailwind CSS v3 | Styling |
| DaisyUI | UI Components |
| TanStack Query | Server state management |
| Axios | HTTP requests |
| Firebase | Authentication |
| Stripe.js | Payment UI |
| React Hot Toast | Notifications |
| Swiper.js | Sliders |
| React Helmet Async | SEO |
| EmailJS | Contact form emails |
| React reCAPTCHA | Bot protection |

### Backend
| Technology | Purpose |
|---|---|
| Node.js | Runtime |
| Express.js | Server framework |
| MongoDB | Database |
| JWT | Authentication tokens |
| Stripe | Payment processing |
| ImgBB API | Image hosting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Firebase project
- Stripe account

### Client Setup

```bash
git clone https://github.com/yourusername/bistro-boss-client.git
cd bistro-boss-client
npm install
```

Create `.env` file:
```
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_APIURL=http://localhost:5000
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
VITE_IMAGE_HOISTING_KEY=your_imgbb_api_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

```bash
npm run dev
```

### Server Setup

```bash
git clone https://github.com/yourusername/bistro-boss-server.git
cd bistro-boss-server
npm install
```

Create `.env` file:
```
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
```

```bash
nodemon index.js
```

---

## 🌟 Key Implementations

- **JWT Authentication** — Secure token-based auth stored in localStorage
- **Role-based Access** — Separate admin and user dashboards with protected routes
- **Real-time Cart** — Cart count updates instantly in navbar
- **Stripe Integration** — Full payment flow with transaction history
- **Parallax Effect** — Responsive parallax sections disabled on mobile
- **Infinite Scroll Tabs** — Category-based menu with smooth tab navigation
- **Custom Toast** — Beautiful confirmation dialogs for destructive actions

---

## 📸 Screenshots

### Home Page
![Home Page](./Screenshot/home.png)

### Menu Page
![Menu Page](./Screenshot/menu.png)

### Dashboard
![Dashboard](./Screenshot/dashboard.png)

### Payment
![Payment](./Screenshot/payment.png)

## 👨‍💻 Developer

**Md Rifat Bin Sumon**  
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/sumon3235)

---

*Built with ❤️ using React & Node.js*