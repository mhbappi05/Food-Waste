import React from 'react';
import { Menu, Globe } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark-slate border-b border-dark-gray">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-waste-red" />
            <h1 className="text-2xl font-bold text-white">
              Food Waste Tracker
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#dashboard" className="text-gray-300 hover:text-white transition">
              Dashboard
            </a>
            <a href="#impact" className="text-gray-300 hover:text-white transition">
              Impact
            </a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition">
              Solutions
            </a>
            <a href="#education" className="text-gray-300 hover:text-white transition">
              Education
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition">
              About
            </a>
          </nav>
          
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}