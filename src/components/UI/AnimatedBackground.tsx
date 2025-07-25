import React from "react";

export const AnimatedBackground: React.FC = () => {
  return (
    <style>{`
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
  );
};
