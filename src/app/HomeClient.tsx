"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { CustomCanvas } from '@/components/home/CustomCanvas';
import { Hero } from '@/components/home/Hero';
import { InfoPanel } from '@/components/home/InfoPanel';
import { CTA } from '@/components/home/CTA';
import { HomepageSEOContent } from '@/components/home/HomepageSEOContent';
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { MobileNodeSequence } from '@/components/home/MobileNodeSequence';
import { MobileProgressBar } from '@/components/home/MobileProgressBar';
import { DEFS, SCENES, getSceneScrollProgress, resolveScene } from '@/data/hubs';
import type { HubCluster } from '@/data/hubs';
import { cn } from "@/lib/utils";

// The height of the scrollable spacer driving the canvas animation
const SPACER_VH = 480;
const SCENE_SCROLL_DURATION_MS = 460;
const SCENE_SCROLL_COOLDOWN_MS = 560;
const WHEEL_GESTURE_RESET_MS = 180;
const WHEEL_TRIGGER_THRESHOLD = 4;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function HomeClient() {
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const [scrollProg, setScrollProg] = useState(0);
  const [curScene, setCurScene] = useState('hero');
  const [curCI, setCurCI] = useState(-1);
  const [selectedProduct, setSelectedProduct] = useState<{
    type: "product" | "cluster";
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    category: string;
    features: string[];
    slug?: string;
  } | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    return () => {
      root.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  const productAliases: Record<string, string> = {
    "polygin store": "polygin-wastore", "polygin": "polygin",
    "perfex crm": "perfex", "socialpuffin": "socialpuff", "socialpuff": "socialpuff",
    "qu6": "qu6", "n8n": "n8n", "mautic": "mautic", "shoilms": "shoilms",
    "schedulr": "schedulr", "medusa js": "medusa-js", "medusa b2b": "medusa-b2b",
    "marketplace": "marketplace", "pos billing": "pos-billing",
    "erpnext (finance)": "erpnext-finance", "erpnext (crm)": "erpnext-finance",
    "frappe books": "frappe-books", "bi dashboard": "bi-dashboard",
    "loan management": "loan-management", "listmonk": "listmonk", "postiz": "postiz",
    "frappe crm": "frappe-crm", "smartflo": "smartflo", "chatwoot": "chatwoot",
    "ding": "ding", "frappe helpdesk": "frappe-helpdesk", "botpress": "botpress",
    "mattermost": "mattermost", "focalboard": "focalboard", "documenso": "documenso",
    "cloudpanel": "cloudpanel", "mail-in-a-box": "mailinabox", "mailinabox": "mailinabox",
  };

  // Scroll controller: 1 wheel tick -> 1 section
  useEffect(() => {
    let lastScrollTime = 0;
    let isSceneAnimating = false;
    let wheelDeltaAccumulator = 0;
    let wheelGestureResetTimer: ReturnType<typeof window.setTimeout> | null = null;
    const lastSceneEnd = SCENES[SCENES.length - 1]?.r[1] ?? 1;

    const getCanvasBounds = () => {
      const el = canvasWrapRef.current;
      if (!el) return { top: 0, height: 0 };
      return { top: el.offsetTop, height: el.offsetHeight };
    };

    const getSceneSnapProgress = (sceneIndex: number) => {
      const scene = SCENES[sceneIndex];
      if (!scene) return 0;
      if (scene.id === 'hero') return 0.04;
      return (scene.r[0] + scene.r[1]) / 2;
    };

    const animateScrollTo = (targetY: number) => {
      const { top, height } = getCanvasBounds();
      const maxScroll = Math.max(height - window.innerHeight, 0);
      if (maxScroll <= 0) return;

      const startY = window.scrollY;
      const distance = targetY - startY;
      if (Math.abs(distance) < 1) return;

      if (scrollAnimationRef.current !== null) {
        window.cancelAnimationFrame(scrollAnimationRef.current);
      }

      isSceneAnimating = true;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = Math.min((now - startTime) / SCENE_SCROLL_DURATION_MS, 1);
        const eased = easeInOutCubic(elapsed);
        window.scrollTo({ top: startY + distance * eased, behavior: 'auto' });

        if (elapsed < 1) {
          scrollAnimationRef.current = window.requestAnimationFrame(step);
          return;
        }

        window.scrollTo({ top: targetY, behavior: 'auto' });
        scrollAnimationRef.current = null;
        isSceneAnimating = false;
        lastScrollTime = Date.now();
      };

      scrollAnimationRef.current = window.requestAnimationFrame(step);
    };

    const animateToScene = (targetProgress: number) => {
      const { top, height } = getCanvasBounds();
      const maxScroll = Math.max(height - window.innerHeight, 0);
      if (maxScroll <= 0) return;
      animateScrollTo(top + targetProgress * maxScroll);
    };

    const handleScroll = () => {
      const { top, height } = getCanvasBounds();
      const maxScroll = Math.max(height - window.innerHeight, 0);
      if (maxScroll <= 0) return;
      const relY = window.scrollY - top;
      const prog = Math.max(0, Math.min(lastSceneEnd, relY / maxScroll));
      setScrollProg(prog);
      const activeScene = resolveScene(prog, SCENES);
      if (activeScene) {
        setCurScene(activeScene.id);
        setCurCI(activeScene.ci);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (selectedProduct) return;
      const { top, height } = getCanvasBounds();
      const maxScroll = Math.max(height - window.innerHeight, 0);
      const scrollY = window.scrollY;

      const inCanvasZone = scrollY >= top && scrollY < top + maxScroll - 1;
      if (!inCanvasZone) return;

      const now = Date.now();
      if (isSceneAnimating || now - lastScrollTime < SCENE_SCROLL_COOLDOWN_MS) {
        e.preventDefault();
        return;
      }

      wheelDeltaAccumulator += e.deltaY;
      if (wheelGestureResetTimer !== null) {
        window.clearTimeout(wheelGestureResetTimer);
      }
      wheelGestureResetTimer = window.setTimeout(() => {
        wheelDeltaAccumulator = 0;
        wheelGestureResetTimer = null;
      }, WHEEL_GESTURE_RESET_MS);

      if (Math.abs(wheelDeltaAccumulator) < WHEEL_TRIGGER_THRESHOLD) {
        e.preventDefault();
        return;
      }

      const prog = Math.min(lastSceneEnd, Math.max(0, scrollY - top) / (maxScroll || 1));
      const activeScene = resolveScene(prog, SCENES);
      const currentIndex = SCENES.findIndex(s => s.id === activeScene?.id);
      if (currentIndex === -1) return;
      const isLastScene = currentIndex === SCENES.length - 1;

      if (wheelDeltaAccumulator > 0 && isLastScene) {
        e.preventDefault();
        wheelDeltaAccumulator = 0;
        if (wheelGestureResetTimer !== null) {
          window.clearTimeout(wheelGestureResetTimer);
          wheelGestureResetTimer = null;
        }
        animateScrollTo(top + maxScroll + 2);
        return;
      }

      let targetIndex = currentIndex;
      if (wheelDeltaAccumulator > 0) targetIndex = Math.min(currentIndex + 1, SCENES.length - 1);
      else targetIndex = Math.max(currentIndex - 1, 0);

      if (targetIndex !== currentIndex) {
        e.preventDefault();
        wheelDeltaAccumulator = 0;
        if (wheelGestureResetTimer !== null) {
          window.clearTimeout(wheelGestureResetTimer);
          wheelGestureResetTimer = null;
        }
        animateToScene(getSceneSnapProgress(targetIndex));
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };

    const handleTouchMove = (e: TouchEvent) => {
      if (selectedProduct) return;
      const { top, height } = getCanvasBounds();
      const maxScroll = Math.max(height - window.innerHeight, 0);
      const scrollY = window.scrollY;
      const inCanvasZone = scrollY >= top && scrollY < top + maxScroll - 1;
      if (!inCanvasZone) return;
      const now = Date.now();
      if (isSceneAnimating || now - lastScrollTime < SCENE_SCROLL_COOLDOWN_MS) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if (Math.abs(deltaY) < 18) return;

      const prog = Math.min(lastSceneEnd, Math.max(0, scrollY - top) / (maxScroll || 1));
      const activeScene = resolveScene(prog, SCENES);
      const currentIndex = SCENES.findIndex(s => s.id === activeScene?.id);
      if (currentIndex === -1) return;
      const isLastScene = currentIndex === SCENES.length - 1;

      if (deltaY > 0 && isLastScene) {
        e.preventDefault();
        animateScrollTo(top + maxScroll + 2);
        touchStartY = touchEndY;
        return;
      }

      let targetIndex = currentIndex;
      if (deltaY > 0) targetIndex = Math.min(currentIndex + 1, SCENES.length - 1);
      else targetIndex = Math.max(currentIndex - 1, 0);

      if (targetIndex !== currentIndex) {
        e.preventDefault();
        animateToScene(getSceneSnapProgress(targetIndex));
        touchStartY = touchEndY;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      if (scrollAnimationRef.current !== null) {
        window.cancelAnimationFrame(scrollAnimationRef.current);
        scrollAnimationRef.current = null;
      }
      if (wheelGestureResetTimer !== null) {
        window.clearTimeout(wheelGestureResetTimer);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [selectedProduct]);

  useEffect(() => {
    if (!selectedProduct) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedProduct(null); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [selectedProduct]);

  const handleProductSelect = ({ productName, productDescription, icon: canvasIcon }: {
    clusterId: string; productName: string; productDescription: string; icon: string;
  }) => {
    const slug = productAliases[productName.trim().toLowerCase()];
    const matched = slug ? products.find(p => p.slug === slug) : undefined;
    if (matched) {
      setSelectedProduct({ type: 'product', title: matched.title, description: matched.description, longDescription: matched.longDescription, icon: canvasIcon || matched.icon, category: matched.category, features: matched.features.slice(0, 3), slug: matched.slug });
    } else {
      setSelectedProduct({ type: 'product', title: productName, description: productDescription, longDescription: productDescription, icon: canvasIcon || '/assets/mithtech-white-logo.png', category: 'Mithtech Product', features: ['Tailored implementation', 'Deployment support', 'Workflow customization'] });
    }
  };

  const handleClusterSelect = ({ clusterId, clusterName, clusterDescription, icon: canvasIcon, products: cp }: {
    clusterId: string; clusterName: string; clusterDescription: string; icon: string; products: { name: string; description: string }[];
  }) => {
    const def: HubCluster | undefined = DEFS.find(d => d.id === clusterId);
    setSelectedProduct({ type: 'cluster', title: clusterName, description: clusterDescription, longDescription: def?.longDesc || `${clusterName} brings together ${cp.length} connected tools.`, icon: canvasIcon, category: 'Ecosystem Cluster', features: def?.chips || cp.map(p => `${p.name}: ${p.description}`) });
  };

  const infoData = curCI !== -1 ? { num: `0${curCI + 1} / 06`, title: DEFS[curCI].n, desc: DEFS[curCI].desc, prods: DEFS[curCI].prods } : null;

  return (
    <div className="relative w-full overflow-x-hidden">

      {/* ════════════════════════════════════════════════
          CANVAS ZONE
          - canvasWrapRef measures the height for scrollProg
          - Canvas is fixed so it fills the viewport at all times
          - Spacer creates the scroll room for the animation
      ════════════════════════════════════════════════ */}
      <div
        ref={canvasWrapRef}
        className="relative w-full bg-[#080808]"
        // height = spacer + 1 viewport so the last scene has a full screen
        style={{ height: `${SPACER_VH + 100}vh` }}
      >
        {/* Fixed canvas — always full-screen while inside this wrapper */}
        <div className="fixed inset-0 z-0 pointer-events-none md:pointer-events-auto">
          <CustomCanvas
            scrollProg={scrollProg}
            curScene={curScene}
            curCI={curCI}
            onProductSelect={handleProductSelect}
            onClusterSelect={handleClusterSelect}
            className="fixed inset-0 h-screen w-screen"
          />
        </div>

        {/* Fixed UI overlays (Hero text, InfoPanel, dots nav…) */}
        <div className={cn("fixed inset-0 z-10 pointer-events-none", selectedProduct && "blur-[2px] transition-all duration-300")}>
          <MobileProgressBar curCI={curCI} isVisible={curCI !== -1} />

          <div className="pointer-events-auto">
            <Hero isVisible={curScene === 'hero'} />
          </div>

          <div className="hidden md:block pointer-events-auto">
            <InfoPanel isVisible={curCI !== -1} data={infoData} />
          </div>

          <MobileNodeSequence
            defs={DEFS}
            curCI={curCI}
            onProductClick={handleProductSelect}
            onClusterClick={handleClusterSelect}
          />

          {/* Scroll hint */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-all duration-500 sm:bottom-12 ${curScene === 'hero' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">Scroll to explore</div>
            <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
          </div>

          {/* Scene label + progress */}
          <div className="absolute bottom-8 left-4 z-20 hidden sm:bottom-12 sm:left-6 lg:block xl:left-12 pointer-events-auto">
            <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/20 mb-3">
              {SCENES.find(s => s.id === curScene)?.name}
            </div>
            <div className="w-20 h-[1px] bg-white/5 overflow-hidden">
              <div className="h-full bg-white/50 transition-all duration-300" style={{ width: `${getSceneScrollProgress(scrollProg, curScene, SCENES) * 100}%` }} />
            </div>
          </div>

          {/* Dot nav */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden flex-col gap-3 md:right-6 md:flex lg:right-10 lg:gap-4 pointer-events-auto">
            {SCENES.map((sc, i) => (
              <button
                key={i}
                className={`w-[4px] h-[4px] rounded-full transition-all duration-500 ${sc.id === curScene ? 'scale-[2.5] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/20 hover:bg-white/40'}`}
                title={sc.name}
                onClick={() => {
                  const el = canvasWrapRef.current;
                  if (!el) return;
                  const top = el.offsetTop;
                  const maxScroll = Math.max(el.offsetHeight - window.innerHeight, 0);
                  window.scrollTo({ top: top + ((sc.r[0] + sc.r[1]) / 2) * maxScroll, behavior: 'auto' });
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* END CANVAS ZONE ──────────────────────────────── */}


      {/* ════════════════════════════════════════════════
          SEO + CTA SECTION
          Completely separate from the canvas wrapper.
          Solid bg-[#080808] covers the fixed canvas below.
          No overlap possible.
      ════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full bg-[#080808]">
        <HomepageSEOContent />
        <CTA />
      </div>


      {/* ════════════════════════════════════════════════
          PRODUCT MODAL
      ════════════════════════════════════════════════ */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-md"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative flex max-h-[min(84vh,46rem)] w-full max-w-2xl touch-pan-y flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] p-5 text-white shadow-2xl sm:p-8"
            onClick={e => e.stopPropagation()}
          >
            <button type="button" aria-label="Close" className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white" onClick={() => setSelectedProduct(null)}>
              <X className="h-4 w-4" />
            </button>

            <div className="min-h-0 pr-1 sm:pr-2">
              <div className="mb-4 flex items-start gap-3 pr-12 sm:mb-6 sm:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2.5 sm:h-20 sm:w-20 sm:p-3">
                  <Image src={selectedProduct.icon} alt={selectedProduct.title} width={56} height={56} className="h-auto w-auto max-h-12 object-contain sm:max-h-14" />
                </div>
                <div className="min-w-0">
                  <div className="mb-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">{selectedProduct.category}</div>
                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl">{selectedProduct.title}</h2>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/55 sm:mt-2 sm:text-base">{selectedProduct.description}</p>
                </div>
              </div>

              <div className="max-h-[18vh] overflow-y-auto overscroll-contain pr-1" onWheel={e => e.stopPropagation()}>
                <p className="text-[13px] leading-6 text-white/70 sm:text-[15px] sm:leading-6">{selectedProduct.longDescription}</p>
              </div>

              <div className={`mt-4 grid gap-2 ${selectedProduct.type === 'cluster' ? 'sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
                {selectedProduct.features.map(f => (
                  <div key={f} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-[13px] text-white/75">{f}</div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Button asChild className="h-12 min-h-[48px] w-full rounded-full border border-black bg-white text-black hover:bg-white/90 sm:w-auto">
                  <Link href="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                {selectedProduct.type === 'product' && selectedProduct.slug && (
                  <Button asChild variant="secondary" className="h-12 min-h-[48px] w-full rounded-full bg-white/10 text-white hover:bg-white/20 sm:w-auto">
                    <Link href={`/products/${selectedProduct.slug}`}>View Details <ExternalLink className="ml-2 h-4 w-4" /></Link>
                  </Button>
                )}
                <Button type="button" variant="outline" className="h-12 min-h-[48px] w-full rounded-full border-white/15 bg-transparent text-white hover:bg-white/5 hover:text-white sm:w-auto" onClick={() => setSelectedProduct(null)}>
                  Continue Exploring
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
