import { useState, useEffect } from "react";
import {
  Wallet,
  Menu,
  Star,
  Users,
  Shield,
  Zap,
  Globe,
  Play,
  Award,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { AnimatedBackground } from "./components/UI/AnimatedBackground";

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
    { label: "Total Volume", value: "- TON", icon: BarChart3 },
    { label: "Active Users", value: "-", icon: Users },
    { label: "NFTs Traded", value: "-", icon: Star },
    { label: "Total gifts", value: "5.2K+", icon: Globe },
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
              <img src="/logo1.png" alt="logo" className="w-10 rounded-xl" />
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
              <div className="w-full h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-2">
                <img src="/cap.jpg" alt="" />
              </div>
              <div className="h-2 bg-white/30 rounded mb-1"></div>
              <div className="h-2 bg-white/20 rounded w-2/3"></div>
            </div>
          </div>
          <div className="absolute top-40 right-16 w-20 h-28 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm transform -rotate-6 animate-float-delayed">
            <div className="p-2">
              <div className="w-full h-14 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-2">
                <img src="/pepe.png" alt="" />
              </div>
              <div className="h-1.5 bg-white/30 rounded mb-1"></div>
              <div className="h-1.5 bg-white/20 rounded w-3/4"></div>
            </div>
          </div>
          <div className="absolute top-60 left-1/4 w-16 h-22 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 backdrop-blur-sm transform rotate-45 animate-float-slow">
            <div className="p-2">
              <div className="w-full h-10 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg mb-1">
                <img src="/cigar.jpg" alt="" />
              </div>
              <div className="h-1 bg-white/30 rounded mb-1"></div>
              <div className="h-1 bg-white/20 rounded w-1/2"></div>
            </div>
          </div>
          <div className="absolute top-32 right-1/3 w-28 h-36 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl border border-orange-500/30 backdrop-blur-sm transform -rotate-12 animate-float-reverse">
            <div className="p-3">
              <div className="w-full h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg mb-2">
                <img src="/ring.jpg" alt="" />
              </div>
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
              <img src="/logo1.png" className="rounded-full" alt="" />
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
                    Byte
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Byte
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
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/50 overflow-hidden">
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

      <AnimatedBackground />

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-purple-500/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-green-500/40 transform rotate-12 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 transform rotate-45 animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Why Choose Byte?
                </span>
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              <div className="absolute -bottom-4 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-scale-x"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
              Experience the next generation of NFT marketplace with
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold">
                {" "}
                mind-bending features
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-center mb-16">
              <div className="relative w-24 h-24 md:w-48 md:h-48 transform rotate-45">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl md:rounded-3xl backdrop-blur-xl border border-cyan-400/30 animate-pulse-slow">
                  <div className="absolute inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center transform -rotate-45">
                    <img src="/logo1.png" className="rounded-3xl" />
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur opacity-30 animate-ping"></div>
              </div>
            </div>

            <div className="relative w-full h-[500px] mb-16">
              {features.map((feature, index) => {
                const angle = index * 90 - 45; // 90 degrees apart, starting at -45
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      animation: `orbit-${index} 20s linear infinite`,
                    }}
                  >
                    <div
                      className="absolute w-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                      style={{
                        height: `${radius}px`,
                        transformOrigin: "bottom center",
                        transform: `rotate(${angle + 180}deg)`,
                        bottom: "50%",
                        left: "50%",
                        marginLeft: "-1px",
                      }}
                    ></div>

                    <div className="relative w-64 h-80">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-75 transition-all duration-500 animate-gradient-x"></div>

                      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-4 group-hover:rotate-3 shadow-2xl group-hover:shadow-cyan-500/25">
                        <div className="relative mb-6">
                          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur animate-pulse"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-125">
                            <feature.icon className="w-10 h-10 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300 relative">
                          {feature.title}
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
                        </h3>

                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>

                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                          <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                          <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-500"></div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Keyframes for Orbiting Animation */}
        <style>{`
          @keyframes orbit-0 {
            from {
              transform: translate(-50%, -50%) rotate(0deg) translateX(200px)
                rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg) translateX(200px)
                rotate(-360deg);
            }
          }
          @keyframes orbit-1 {
            from {
              transform: translate(-50%, -50%) rotate(90deg) translateX(200px)
                rotate(-90deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(450deg) translateX(200px)
                rotate(-450deg);
            }
          }
          @keyframes orbit-2 {
            from {
              transform: translate(-50%, -50%) rotate(180deg) translateX(200px)
                rotate(-180deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(540deg) translateX(200px)
                rotate(-540deg);
            }
          }
          @keyframes orbit-3 {
            from {
              transform: translate(-50%, -50%) rotate(270deg) translateX(200px)
                rotate(-270deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(630deg) translateX(200px)
                rotate(-630deg);
            }
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
        `}</style>
      </section>

      {/* Trending Collections */}
      {/* <section className="py-20 bg-gray-800/20">
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
      </section> */}

      {/* CTA Section */}
      <section className="py-10 mt-10 relative">
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
    </div>
  );
}

export default App;
