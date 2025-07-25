import {
  BarChart3,
  Users,
  Star,
  Globe,
  Zap,
  Shield,
  Award,
} from "lucide-react";

export const stats = [
  { label: "Total Volume", value: "2.4M TON", icon: BarChart3 },
  { label: "Active Users", value: "45K+", icon: Users },
  { label: "NFTs Traded", value: "180K+", icon: Star },
  { label: "Collections", value: "1.2K+", icon: Globe },
];

export const features = [
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

export const trendingCollections = [
  { name: "TON Punks", floor: "12.5 TON", volume: "450 TON", change: "+15%" },
  { name: "Crystal Cats", floor: "8.2 TON", volume: "320 TON", change: "+8%" },
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
