"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  Star,
  Zap,
  CalendarDays,
  Phone,
  MapPin,
  Mail,
  Briefcase,
  Users,
  BookOpen,
} from "lucide-react";

// Variants for Framer Motion animations
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const iconPop = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } },
};

export default function Home() {
  const company = {
    name: "Kancelaria Adwokacka Nowak",
    city: "Poznań",
    phone: "600 111 222",