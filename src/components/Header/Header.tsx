import React from "react";
import { Menu } from "lucide-react";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              trace
            </span>
          </div>

          <SearchBar />

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Explore
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium flex items-center"
              >
                Create
                <span className="ml-2 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-xs rounded-full font-semibold">
                  New
                </span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                Stats
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">💎 $2.99</span>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Connect Wallet
              </button>
              <button className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
