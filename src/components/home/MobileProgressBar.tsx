"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Megaphone, 
  ShoppingCart, 
  MessageSquare, 
  BarChart3, 
  Zap,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = [
  { id: 'crm', icon: Users },
  { id: 'mktg', icon: Megaphone },
  { id: 'ecom', icon: ShoppingCart },
  { id: 'supp', icon: MessageSquare },
  { id: 'fin', icon: BarChart3 },
  { id: 'auto', icon: Zap },
];

interface MobileProgressBarProps {
  curCI: number;
  isVisible: boolean;
}

export const MobileProgressBar: React.FC<MobileProgressBarProps> = ({
  curCI,
  isVisible,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      className="fixed top-20 inset-x-0 z-40 mx-auto w-[90%] px-4 md:hidden"
    >
      <div className="relative flex items-center justify-between">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-white/10" />
        
        {/* Progress Line */}
        <motion.div 
            className="absolute left-0 top-1/2 h-[1px] -translate-y-1/2 bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${(curCI / (ICONS.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {ICONS.map((item, index) => {
          const Icon = item.icon;
          const isActive = index <= curCI;
          const isCurrent = index === curCI;

          return (
            <div key={item.id} className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{
                  scale: isCurrent ? 1.2 : 1,
                  backgroundColor: isCurrent ? "rgba(255, 255, 255, 1)" : isActive ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: isCurrent ? "0 0 15px rgba(255, 255, 255, 0.5)" : "none",
                }}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border transition-colors",
                  isActive ? "border-white" : "border-white/10"
                )}
              >
                <Icon className={cn(
                    "h-3.5 w-3.5 transition-colors",
                    isCurrent ? "text-black" : isActive ? "text-black" : "text-white/20"
                )} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
