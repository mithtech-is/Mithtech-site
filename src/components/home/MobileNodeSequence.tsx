"use client";

import React from "react";
import { MobileNodeCard } from "./MobileNodeCard";
import { AnimatePresence } from "framer-motion";

interface NodeDef {
    id: string;
    n: string;
    icon: string;
    desc: string;
    prods: { n: string; d?: string; i?: string }[];
}

interface MobileNodeSequenceProps {
  defs: NodeDef[];
  curCI: number;
  onProductClick: (data: { clusterId: string; productName: string; productDescription: string; icon: string }) => void;
  onClusterClick: (data: { clusterId: string; clusterName: string; clusterDescription: string; icon: string; products: { name: string; description: string }[] }) => void;
}

export const MobileNodeSequence: React.FC<MobileNodeSequenceProps> = ({
  defs,
  curCI,
  onProductClick,
  onClusterClick,
}) => {
  return (
    <div className="md:hidden">
      <AnimatePresence mode="wait">
        {defs.map((def, index) => (
          <MobileNodeCard
            key={def.id}
            num={`0${index + 1} / 06`} // Adjust if total changes
            title={def.n}
            desc={def.desc}
            prods={def.prods}
            isVisible={curCI === index}
            iconKey={def.id}
            iconPath={def.icon}
            onProductClick={onProductClick}
            onClusterClick={() => onClusterClick({
              clusterId: def.id, 
              clusterName: def.n, 
              clusterDescription: def.desc, 
              icon: def.icon || "", 
              products: def.prods.map(p => ({ name: p.n, description: p.d || "" }))
            })}
            clusterId={def.id}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
