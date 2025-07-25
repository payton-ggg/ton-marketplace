import { useState, useEffect } from "react";
import {
  Search,
  Wallet,
  Menu,
  ExternalLink,
  MessageCircle,
  Github,
  Twitter,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  ChevronRight,
  Play,
  Award,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { label: "Total Volume", value: "2.4M TON", icon: BarChart3 },
    { label: "Active Users", value: "45K+", icon: Users },
    { label: "NFTs Traded", value: "180K+", icon: Star },
    { label: "Collections", value: "1.2K+", icon: Globe },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built on TON blockchain for instant transactions and minimal fees",
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Advanced security protocols protect your digital assets",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Join thousands of creators and collectors in our vibrant ecosystem",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Curated collections from verified artists and creators",
    },
  ];

  const trendingCollections = [
    { name: "TON Punks", floor: "12.5 TON", volume: "450 TON", change: "+15%" },
    {
      name: "Crystal Cats",
      floor: "8.2 TON",
      volume: "320 TON",
      change: "+8%",
    },
    {
      name: "Space Warriors",
      floor: "15.0 TON",
      volume: "280 TON",
      change: "+22%",
    },
    {
      name: "Digital Dreams",
      floor: "6.8 TON",
      volume: "190 TON",
      change: "+5%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
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

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Search collections, NFTs, or creators..."
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70"
                />
              </div>
            </div>

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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Floating NFT Cards Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-24 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm transform rotate-12 animate-float">
            <div className="p-3">
              <div className="w-full h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-2"></div>
              <div className="h-2 bg-white/30 rounded mb-1"></div>
              <div className="h-2 bg-white/20 rounded w-2/3"></div>
            </div>
          </div>
          <div className="absolute top-40 right-16 w-20 h-28 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm transform -rotate-6 animate-float-delayed">
            <div className="p-2">
              <div className="w-full h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-2"></div>
              <div className="h-1.5 bg-white/30 rounded mb-1"></div>
              <div className="h-1.5 bg-white/20 rounded w-3/4"></div>
            </div>
          </div>
          <div className="absolute top-60 left-1/4 w-16 h-22 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 backdrop-blur-sm transform rotate-45 animate-float-slow">
            <div className="p-2">
              <div className="w-full h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg mb-1"></div>
              <div className="h-1 bg-white/30 rounded mb-1"></div>
              <div className="h-1 bg-white/20 rounded w-1/2"></div>
            </div>
          </div>
          <div className="absolute top-32 right-1/3 w-28 h-36 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30 backdrop-blur-sm transform -rotate-12 animate-float-reverse">
            <div className="p-3">
              <div className="w-full h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg mb-2"></div>
              <div className="h-2 bg-white/30 rounded mb-1"></div>
              <div className="h-2 bg-white/20 rounded w-4/5"></div>
            </div>
          </div>
        </div>

        {/* Interactive Blockchain Visualization */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative w-96 h-96">
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-slow">
              <span className="text-white font-bold text-xl">T</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 animate-ping"></div>
            </div>

            {/* Orbiting Nodes */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-0"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            {/* Animated Text Reveal */}
            <div className="mb-8">
              <div className="inline-block">
                <h1 className="text-6xl md:text-8xl font-black mb-4 relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x">
                    TRACE
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    TRACE
                  </span>
                </h1>
                <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transform scale-x-0 animate-scale-x origin-left"></div>
              </div>
            </div>

            {/* Typewriter Effect Subtitle */}
            <div className="mb-8 h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-300 typewriter">
                <span className="typing-text">
                  Where Digital Art Meets Blockchain Innovation
                </span>
                <span className="cursor animate-blink">|</span>
              </h2>
            </div>

            {/* Glitch Effect Description */}
            <div className="relative mb-8">
              <p
                className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed glitch-text"
                data-text="Experience the most advanced NFT marketplace on TON blockchain. Trade, collect, and create with zero compromises."
              >
                Experience the most advanced NFT marketplace on TON blockchain.
                Trade, collect, and create with zero compromises.
              </p>
            </div>

            {/* Interactive Holographic Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative flex items-center">
                  <span className="mr-3">🚀</span>
                  Launch Explorer
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow"></div>
              </button>

              <button className="group relative border-2 border-gray-600 hover:border-cyan-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:bg-cyan-400/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center">
                  <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  Watch Magic
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Floating Stats with Neon Effect */}
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
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(-6deg);
          }
          50% {
            transform: translateY(-15px) rotate(-6deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(-10px) rotate(-12deg);
          }
          50% {
            transform: translateY(10px) rotate(-12deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes scale-x {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        @keyframes border-glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8),
              0 0 30px rgba(147, 51, 234, 0.5);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-scale-x {
          animation: scale-x 2s ease-out 0.5s forwards;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }

        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 4s steps(40, end) 1s forwards,
            blink-caret 1s step-end infinite;
        }

        .glitch-text {
          position: relative;
        }

        .glitch-text:hover::before,
        .glitch-text:hover::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text:hover::before {
          animation: glitch-anim-1 0.3s infinite linear alternate-reverse;
          color: #ff00ff;
          z-index: -1;
        }

        .glitch-text:hover::after {
          animation: glitch-anim-2 0.3s infinite linear alternate-reverse;
          color: #00ffff;
          z-index: -2;
        }

        @keyframes glitch-anim-1 {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.85deg);
          }
          5% {
            clip: rect(12px, 9999px, 59px, 0);
            transform: skew(0.94deg);
          }
          10% {
            clip: rect(48px, 9999px, 29px, 0);
            transform: skew(0.81deg);
          }
          15% {
            clip: rect(42px, 9999px, 73px, 0);
            transform: skew(0.84deg);
          }
          20% {
            clip: rect(63px, 9999px, 27px, 0);
            transform: skew(0.83deg);
          }
          25% {
            clip: rect(34px, 9999px, 55px, 0);
            transform: skew(0.88deg);
          }
          30% {
            clip: rect(86px, 9999px, 73px, 0);
            transform: skew(0.74deg);
          }
          35% {
            clip: rect(20px, 9999px, 20px, 0);
            transform: skew(0.65deg);
          }
          40% {
            clip: rect(26px, 9999px, 60px, 0);
            transform: skew(0.98deg);
          }
          45% {
            clip: rect(25px, 9999px, 42px, 0);
            transform: skew(0.7deg);
          }
          50% {
            clip: rect(69px, 9999px, 99px, 0);
            transform: skew(0.96deg);
          }
          55% {
            clip: rect(72px, 9999px, 65px, 0);
            transform: skew(0.74deg);
          }
          60% {
            clip: rect(54px, 9999px, 54px, 0);
            transform: skew(0.75deg);
          }
          65% {
            clip: rect(38px, 9999px, 34px, 0);
            transform: skew(0.88deg);
          }
          70% {
            clip: rect(98px, 9999px, 71px, 0);
            transform: skew(0.52deg);
          }
          75% {
            clip: rect(78px, 9999px, 77px, 0);
            transform: skew(0.87deg);
          }
          80% {
            clip: rect(65px, 9999px, 59px, 0);
            transform: skew(0.99deg);
          }
          85% {
            clip: rect(29px, 9999px, 10px, 0);
            transform: skew(0.69deg);
          }
          90% {
            clip: rect(98px, 9999px, 85px, 0);
            transform: skew(0.47deg);
          }
          95% {
            clip: rect(16px, 9999px, 97px, 0);
            transform: skew(0.61deg);
          }
          100% {
            clip: rect(54px, 9999px, 75px, 0);
            transform: skew(0.54deg);
          }
        }

        @keyframes glitch-anim-2 {
          6% {
            clip: rect(30px, 9999px, 36px, 0);
            transform: skew(0.41deg);
          }
          10% {
            clip: rect(70px, 9999px, 14px, 0);
            transform: skew(0.56deg);
          }
          14% {
            clip: rect(91px, 9999px, 81px, 0);
            transform: skew(0.69deg);
          }
          18% {
            clip: rect(63px, 9999px, 92px, 0);
            transform: skew(0.74deg);
          }
          22% {
            clip: rect(41px, 9999px, 50px, 0);
            transform: skew(0.46deg);
          }
          26% {
            clip: rect(89px, 9999px, 46px, 0);
            transform: skew(0.86deg);
          }
          30% {
            clip: rect(1px, 9999px, 46px, 0);
            transform: skew(0.95deg);
          }
          34% {
            clip: rect(60px, 9999px, 23px, 0);
            transform: skew(0.48deg);
          }
          38% {
            clip: rect(10px, 9999px, 85px, 0);
            transform: skew(0.27deg);
          }
          42% {
            clip: rect(87px, 9999px, 72px, 0);
            transform: skew(0.38deg);
          }
          46% {
            clip: rect(63px, 9999px, 28px, 0);
            transform: skew(0.96deg);
          }
          50% {
            clip: rect(26px, 9999px, 60px, 0);
            transform: skew(0.74deg);
          }
          54% {
            clip: rect(15px, 9999px, 52px, 0);
            transform: skew(0.62deg);
          }
          58% {
            clip: rect(38px, 9999px, 91px, 0);
            transform: skew(0.29deg);
          }
          62% {
            clip: rect(69px, 9999px, 61px, 0);
            transform: skew(0.73deg);
          }
          66% {
            clip: rect(34px, 9999px, 14px, 0);
            transform: skew(0.41deg);
          }
          70% {
            clip: rect(85px, 9999px, 56px, 0);
            transform: skew(0.99deg);
          }
          74% {
            clip: rect(97px, 9999px, 47px, 0);
            transform: skew(0.46deg);
          }
          78% {
            clip: rect(87px, 9999px, 99px, 0);
            transform: skew(0.42deg);
          }
          82% {
            clip: rect(87px, 9999px, 1px, 0);
            transform: skew(0.77deg);
          }
          86% {
            clip: rect(40px, 9999px, 86px, 0);
            transform: skew(0.89deg);
          }
          90% {
            clip: rect(97px, 9999px, 35px, 0);
            transform: skew(0.59deg);
          }
          94% {
            clip: rect(2px, 9999px, 79px, 0);
            transform: skew(0.57deg);
          }
          98% {
            clip: rect(82px, 9999px, 52px, 0);
            transform: skew(0.96deg);
          }
          100% {
            clip: rect(44px, 9999px, 49px, 0);
            transform: skew(0.3deg);
          }
        }
      `}</style>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose Trace?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the next generation of NFT marketplace with
              cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:bg-gray-800/70 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Collections */}
      <section className="py-20 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Trending Collections
              </h2>
              <p className="text-gray-400 text-lg">
                Discover the hottest NFT collections on TON
              </p>
            </div>
            <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center transition-colors">
              View All
              <ChevronRight className="ml-1 w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCollections.map((collection, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/70 transform hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      collection.change.startsWith("+")
                        ? "text-green-400 bg-green-400/10"
                        : "text-red-400 bg-red-400/10"
                    }`}
                  >
                    {collection.change}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {collection.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Floor Price</span>
                    <span className="text-white font-semibold">
                      {collection.floor}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume</span>
                    <span className="text-white font-semibold">
                      {collection.volume}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About TON & NFT Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About TON & NFT
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know to get started in the TON NFT
              ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                What is Trace?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Trace is a premium NFT marketplace built on The Open Network
                blockchain. Experience lightning-fast transactions with minimal
                fees.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center transition-colors group-hover:translate-x-1"
              >
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                What is TON?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                TON is a revolutionary blockchain ecosystem designed for mass
                adoption. Fast, secure, and environmentally friendly.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center transition-colors group-hover:translate-x-1"
              >
                Explore TON <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🖼️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                What is an NFT?
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Non-Fungible Tokens are unique digital assets that represent
                ownership of digital or physical items on the blockchain.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center transition-colors group-hover:translate-x-1"
              >
                NFT Guide <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👛</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Crypto Wallets
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Secure digital wallets to store your NFTs and Toncoin. Connect
                seamlessly with popular TON wallets.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center transition-colors group-hover:translate-x-1"
              >
                Setup Wallet <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/50 hover:border-gray-600/50 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Buy Toncoin
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Purchase Toncoin easily with credit cards through trusted
                payment providers integrated into our platform.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center transition-colors group-hover:translate-x-1"
              >
                Buy Now <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and collectors in the most advanced NFT
            marketplace on TON
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center">
              <Wallet className="mr-2 w-5 h-5" />
              Connect Wallet
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-gray-800/50 backdrop-blur-sm">
              Browse Collections
            </button>
          </div>
          <div className="flex items-center justify-center space-x-8 mt-12 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Secure & Trusted
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Low Fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Fast Transactions
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  trace
                </span>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Welcome to the most advanced NFT marketplace on The Open
                Network. Discover, create, and trade extraordinary digital
                assets with the community.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Telegram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Marketplace */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Marketplace
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Create NFT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Rankings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Activity
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Bug Bounty
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">Built on</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">💎</span>
                </div>
                <span className="text-white font-semibold">TON</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Trace. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
