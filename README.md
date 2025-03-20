# Medicine Management System - Frontend 🚀 [PHARMA](https://pharma-client-07.vercel.app/)

## Project Overview
The **Medicine Management System** frontend is a modern **Next.js** and **TypeScript** application that enables users to add, manage, and browse medicines efficiently. It features authentication, form validation, and smooth API integration.

## 🔗 Live Demo
- **Live Application**: [Visit Here](https://pharma-client-07.vercel.app/)
- **Backend Repository**: [GitHub URL](https://github.com/dear-mahmud-bd/pharma-store-server)

## 📌 Features
- 🔑 **Authentication & Authorization** (JWT-based login & role-based access)
- 📋 **Medicine Entry Form** (Validation using React Hook Form & Zod)
- 🔍 **Search & Filtering** (By name, category, expiry date, etc.)
- 📊 **Admin Dashboard** (Manage medicines, users, and orders)
- 🎨 **Responsive UI** (Built with ShadCN, Tailwind CSS)
- ⚡ **State Management** (Redux Toolkit for efficient state handling)
- 📢 **User Notifications** (React sooner)
- 🚀 **Optimized Performance** (Server-side rendering with Next.js)

## 🛠️ Tech Stack
- **Next.js** – React framework for SSR & routing
- **TypeScript** – Static typing for maintainability
- **ShadCN & Tailwind CSS** – Modern UI components and styling
- **Redux Toolkit** – State management with persistence
- **React Hook Form & Zod** – Form handling & validation
- **Axios** – API requests handling
- **Sooner** – User notifications & modals
- **JWT Decode** – Token decoding for authentication

## Installation & Setup 🚀
### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn installed

### Clone the Repository
```bash
git clone https://github.com/dear-mahmud-bd/pharma-store-client.git
cd pharma-store-client
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Setup Environment Variables
Create a `.env` file and configure:

```
NEXT_PUBLIC_BASE_API=YOUR_BACKEND_API
NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY=YOUR_GOOGLE_RECAPTCHA_CLIENT_KEY
NEXT_PUBLIC_RECAPTCHA_SERVER_KEY=YOUR_GOOGLE_RECAPTCHA_SERVER_KEY
```

### Run the Development Server
```bash
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:3000/`.

## Scripts 📜
| Command         | Description                                      |
|----------------|--------------------------------------------------|
| `npm run dev`  | Start the development server                    |
| `npm run build`| Build the project for production                |
