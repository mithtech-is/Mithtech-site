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
import Link from "next/link";
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
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-[58%] z-30 mx-auto w-[calc(100vw-1.5rem)] max-w-[22rem] -translate-y-1/2",
        "rounded-[28px] border border-white/10 bg-black/55 px-4 py-4 shadow-2xl backdrop-blur-xl sm:w-[88%] sm:max-w-[24rem] sm:rounded-[32px] sm:p-6",
        "flex max-h-[min(62vh,34rem)] flex-col items-start gap-4 overflow-hidden sm:gap-5",
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
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5">
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
      <div className="space-y-2.5">
        <h2 className="text-[2rem] font-bold leading-[0.98] tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="text-[13px] font-medium leading-relaxed text-white/55 sm:text-sm">
          {desc}
        </p>
      </div>

      {/* Product Pills */}
      <div className="flex max-h-[26vh] flex-wrap gap-2 overflow-y-auto pt-1 pr-1">
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
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[10px] font-bold tracking-[0.14em] uppercase text-white/80 transition-[border-color,background-color] duration-150 ease-[var(--ease-out)] hover:border-white/20 hover:bg-white/10 sm:px-4 sm:py-2.5"
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
      <div className="mt-3 h-px w-full bg-white/5" />

      {/* CTA */}
      <Link
        href="/products"
        className="group mt-1 flex w-full items-center justify-between py-2 text-[10px] font-black tracking-[0.22em] uppercase text-white/45 transition-[color,transform] duration-150 ease-[var(--ease-out)] hover:text-white active:scale-[0.98]"
      >
        <span className="transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1">EXPLORE PRODUCTS</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};
