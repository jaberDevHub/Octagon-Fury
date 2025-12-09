# 🎮 Octagon Fury - MMA Gaming Website

## 🚀 Modern Tech Stack

```bash
Vite + React + TypeScript + shadcn/ui + Tailwind CSS
```

## 💻 Key Technologies

**Core Framework**
```javascript
// Fast, modern frontend
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)
```

**UI Components** (shadcn/ui + Radix)
```javascript
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
```

**Animations & Effects**
```javascript
// Smooth animations with Framer Motion
import { motion } from "framer-motion"

// Gradient text effects
.text-gradient-red {
  background: linear-gradient(45deg, #ff0000, #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🎨 Cool Features

✨ **Animated Hero Section**
```javascript
// Smooth entrance animations
<div className="opacity-0 animate-slide-up delay-100">
  <h1 className="text-8xl font-display">
    <span className="text-gradient-red">OCTAGON FURY</span>
  </h1>
</div>
```

🎮 **Game Stats**
```javascript
const gameStats = {
  fighters: "80+",
  weightClasses: 12,
  moves: "200+",
  platforms: ["PC", "PS", "XB"]
}
```

📱 **Responsive Design**
```javascript
// Mobile-first approach
<nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl">
  {/* Hamburger menu for mobile */}
  <button onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X /> : <Menu />}
  </button>
</nav>
```

## 🔥 Performance Optimized

⚡ **Vite-powered** - Instant HMR & fast builds
📦 **Code splitting** - Efficient loading
🎯 **Tree shaking** - Minimal bundle size
🖼️ **Lazy loading** - Optimized assets

## 🌐 Cross-Platform

Works on **Desktop, Mobile, Tablet** with:
- Touch-friendly navigation
- Adaptive layouts
- Smooth animations

**Master the octagon. Coming 2025.** 🥊
