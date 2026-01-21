import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-slate border-t border-dark-gray">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Food Waste Dashboard</h3>
            <p className="text-gray-400">
              Visualizing the impact of global food waste in real-time.
              Raising awareness and inspiring action.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Data Sources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Methodology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contribute</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Food Waste Reduction Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Composting Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Donation Centers
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-gray text-center text-gray-500">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-waste-red" /> to raise awareness about food waste
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Global Food Waste Dashboard</p>
        </div>
      </div>
    </footer>
  );
}