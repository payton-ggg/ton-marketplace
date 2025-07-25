import React from "react";
import { stats } from "../../data/constants";

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                <stat.icon className="w-8 h-8 text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              </div>
            </div>
            <div className="text-3xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              {stat.label}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
