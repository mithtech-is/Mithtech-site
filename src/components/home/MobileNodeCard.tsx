"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  Megaphone, 
  ShoppingCart, 
  MessageSquare, 
  BarChart3, 
  Zap,
  LucideIcon
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MobileNodeCardProps {
  num: string;
  title: string;
  desc: string;
  prods: { n: string; d?: string; i?: string }[]; // Added d for description
  isVisible: boolean;
  iconKey?: string;
  iconPath?: string;
  onProductClick: (data: { clusterId: string; productName: string; productDescription: string; icon: string }) => void;
  onClusterClick: () => void;
}

const ICON_MAP: Record<string, LucideIcon> = {
  crm: Users,
  mktg: Megaphone,
  ecom: ShoppingCart,
  supp: MessageSquare,
  fin: BarChart3,
  auto: Zap,
};

export const MobileNodeCard: React.FC<MobileNodeCardProps & { clusterId: string }> = ({
  num,
  title,
  desc,
  prods,
  isVisible,
  iconKey,
  iconPath,
  onProductClick,
  onClusterClick,
  clusterId,
}) => {
  const Icon = iconKey ? ICON_MAP[iconKey] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={
        isVisible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: -40, scale: 0.95 }
      }
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-[55%] -translate-y-1/2 z-30 mx-auto w-[88%] max-w-[400px]",
        "rounded-[32px] border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl",
        "flex flex-col items-start gap-6 overflow-hidden",
        !isVisible && "pointer-events-none"
      )}
    >
      {/* Background Glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-primary/5 blur-[80px]" />

      {/* Header */}
      <div className="flex w-full items-center justify-between">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
          {num}
        </span>
        <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center p-2.5">
            {iconPath ? (
                <Image 
                    src={iconPath} 
                    alt={title} 
                    width={20} 
                    height={20} 
                    className="h-full w-full object-contain brightness-0 invert" 
                />
            ) : Icon ? (
                <Icon className="h-4 w-4 text-primary" />
            ) : (
                <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            )}
        </div>
      </div>

      {/* Title Section */}
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
        <p className="text-sm text-white/50 font-medium leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Product Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {prods.map((p, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            onClick={() => onProductClick({
                clusterId,
                productName: p.n,
                productDescription: p.d || "",
                icon: p.i || ""
            })}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[10px] font-bold tracking-wider uppercase text-white/80 transition-[border-color,background-color] duration-150 ease-[var(--ease-out)] hover:bg-white/10 hover:border-white/20"
          >
            {p.i ? (
              <Image
                src={p.i}
                alt={p.n}
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            ) : (
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            )}
            {p.n}
          </motion.button>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/5 mt-4" />

      {/* CTA */}
      <button 
        onClick={onClusterClick}
        className="group mt-2 flex w-full items-center justify-between py-2 text-[10px] font-black tracking-[0.25em] uppercase text-white/40 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-white active:scale-[0.98]"
      >
        <span className="transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1">EXPLORE PRODUCTS</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};
