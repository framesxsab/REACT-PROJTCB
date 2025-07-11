# 🎓 Student Resources React App

A modern, student-focused web application to discover, contribute, and manage resources like bookstores, cafes, libraries, and study materials. Built with ⚛️ React, ⚡ Vite, 🎨 Tailwind CSS, and 🛣️ React Router.

## ✨ Features

- **🔍 Explore Resources:**
  - Search, filter by category, and sort resources.
  - View both curated and user-contributed resources.
- **➕ Contribute:**
  - Submit new resources for admin approval.
- **🛡️ Admin Dashboard:**
  - Approve or reject contributed resources.
- **📱 Responsive UI:**
  - Beautiful, mobile-friendly design using Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- 🟢 Node.js (v16+ recommended)
- 📦 npm or yarn

### Installation
```bash
npm install
```

### Running the App
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

## 🗂️ Project Structure
```
├── public/                # Static assets
├── src/
│   ├── components/        # (Reusable components)
│   ├── pages/             # Main page components (Home, Explore, ResourcePage, etc.)
│   ├── index.css          # Tailwind and global styles
│   └── App.jsx            # Main app router
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Customization
- Update curated resources in `src/pages/Explore.jsx`.
- Add new categories as needed in filter dropdowns.
- Change branding, colors, or layout via Tailwind classes.

## 🙏 Credits
- Built with [React](https://react.dev/) ⚛️, [Vite](https://vitejs.dev/) ⚡, and [Tailwind CSS](https://tailwindcss.com/) 🎨.

