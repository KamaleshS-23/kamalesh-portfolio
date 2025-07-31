// File: src/components/Navbar.tsx
'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-blue-950/60 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Kamalesh</h1>
        <nav className="hidden md:flex gap-6 text-base">
          {['about', 'projects', 'certifications', 'blog', 'contact'].map(item => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-blue-300 transition-colors duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="ml-4"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
}
