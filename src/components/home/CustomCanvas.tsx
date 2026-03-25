"use client";

import React, { useEffect, useRef, useState } from 'react';

interface ProductSelection {
  clusterId: string;
  productName: string;
  productDescription: string;
  icon: string;
}

interface CustomCanvasProps {
  onProductSelect?: (selection: ProductSelection) => void;
  onClusterSelect?: (selection: {
    clusterId: string;
    clusterName: string;
    clusterDescription: string;
    icon: string;
    products: { name: string; description: string }[];
  }) => void;
}

// Data Definitions
const DEFS = [
  {
    id: 'crm', n: 'CRM & Sales', icon: 'crm',
    desc: 'Customer Management & Sales Growth',
    prods: [
      { n: 'Frappe CRM', d: 'Flexible CRM', i: '/assets/FrappeCRM_logo.png' },
      { n: 'ERPNext (CRM)', d: 'Integrated CRM', i: '/assets/erpnext-logo.png' },
      { n: 'Smartflo', d: 'Cloud Telephony', i: '/assets/Smartflo-logo.png' },
      { n: 'Chatwoot', d: 'Customer Support', i: '/assets/chatwoot.png' },
      { n: 'Ding', d: 'Notifications System', i: '/assets/Ding_logo_(2025).png' }
    ]
  },
  {
    id: 'mktg', n: 'Marketing', icon: 'mktg',
    desc: 'Campaigns, Automation & Growth',
    prods: [
      { n: 'Mautic', d: 'Marketing Automation', i: '/assets/mautic-logo.png' },
      { n: 'Listmonk', d: 'Email Marketing', i: '/assets/listmonk-logo.png' },
      { n: 'Postiz', d: 'Content Scheduling', i: '/assets/postiz-logo.png' },
      { n: 'Polygin', d: 'Custom Storefront', i: '/assets/polyg.png' }
    ]
  },
  {
    id: 'ecom', n: 'eCommerce', icon: 'ecom',
    desc: 'High-Performance Commerce Ecosystem',
    prods: [
      { n: 'Polygin Store', d: 'Custom Storefront', i: '/assets/polyg.png' },
      { n: 'Medusa JS', d: 'Headless Commerce Engine', i: '/assets/medusa-logo.png' },
      { n: 'Medusa B2B', d: 'B2B Commerce System', i: '/assets/medusa-logo.png' },
      { n: 'Marketplace', d: 'Multi-Vendor Platform', i: '/assets/marketplace-logo.jpg' },
      { n: 'POS Billing', d: 'Retail Billing System', i: '/assets/medusa-logo.png' }
    ]
  },
  {
    id: 'supp', n: 'Support & Chat', icon: 'supp',
    desc: 'Omnichannel Support & Communication',
    prods: [
      { n: 'Chatwoot', d: 'Omnichannel Messaging', i: '/assets/chatwoot.png' },
      { n: 'Frappe Helpdesk', d: 'Ticket Management', i: '/assets/frappehelpdesk_logo.png' },
      { n: 'Botpress', d: 'AI Chatbot Builder', i: '/assets/botpress-logo.png' },
      { n: 'Mattermost', d: 'Team Messaging', i: '/assets/mattermost-logo.png' }
    ]
  },
  {
    id: 'fin', n: 'Finance & BI', icon: 'fin',
    desc: 'Financial Intelligence & Business Insights',
    prods: [
      { n: 'ERPNext (Finance)', d: 'ERP Finance Suite', i: '/assets/erpnext-logo.png' },
      { n: 'Frappe Books', d: 'Lightweight Accounting', i: '/assets/erpnext-logo.png' },
      { n: 'Frappe Insights', d: 'Business Intelligence', i: '/assets/frappe insights-logo.png' },
      { n: 'Frappe Lending', d: 'Loan & Credit System', i: '/assets/frappelending-logo.png' }
    ]
  },
  {
    id: 'auto', n: 'Automation & AI', icon: 'auto',
    desc: 'Automation & Intelligent Systems',
    prods: [
      { n: 'n8n', d: 'Workflow Automation', i: '/assets/n8n-logo.png' },
      { n: 'Documenso', d: 'Digital Signatures', i: '/assets/documenso-icon-logo.png' },
      { n: 'CloudPanel', d: 'Server Management', i: '/assets/cloudpanel-icon.png' },
      { n: 'Mail-in-a-Box', d: 'Email Infrastructure', i: '/assets/Mail-in-a-Box-logo.png' }
    ]
  },
];

const CL_ANGS = [210, 150, 90, 330, 270, 30];
const CLR = 620, PR_DIST = 270, PR_STEP = 72;
const NW = 210, NH = 54, ICON_W = 50;
const PW = 168, PH = 46, PICON_W = 44;
const HUB_R = 25, PORT_R = 5;


// Shared Helper functions from Original script
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

export const CustomCanvas: React.FC<CustomCanvasProps> = ({ onProductSelect, onClusterSelect }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProg, setScrollProg] = useState(0);
  const [curScene, setCurScene] = useState('hero');
  const [curCI, setCurCI] = useState(-1);
  const worldRef = useRef<{ WN: any[], WE: any[] }>({ WN: [], WE: [] });
  const camRef = useRef({ wx: 0, wy: 0, zoom: 0.8, twx: 0, twy: 0, tz: 0.8 });
  const mouseRef = useRef({ x: 0, y: 0, vx: 0, vy: 0, px: 0, py: 0, ringX: 0, ringY: 0 });
  const trailRef = useRef<any[]>([]);
  const draggingRef = useRef<any>(null);
  const hoveredRef = useRef<any>(null);
  const animTRef = useRef(0);
  const lastTRef = useRef(0);
  const particlesRef = useRef<any[]>([]);
  const faviconRef = useRef<HTMLImageElement | null>(null);
  const logosRef = useRef<Map<string, HTMLImageElement>>(new Map());

  // Cubic Bezier interpolation
  const getBezierPoint = (t: number, p0: any, p1: any, p2: any, p3: any) => {
    const cx = 3 * (p1.x - p0.x);
    const bx = 3 * (p2.x - p1.x) - cx;
    const ax = p3.x - p0.x - cx - bx;
    const cy = 3 * (p1.y - p0.y);
    const by = 3 * (p2.y - p1.y) - cy;
    const ay = p3.y - p0.y - cy - by;
    const x = ((ax * t + bx) * t + cx) * t + p0.x;
    const y = ((ay * t + by) * t + cy) * t + p0.y;
    return { x, y };
  };

  // Keyframes and Scenes (from original)
  const KF = (() => {
    const r: any[] = [];
    r.push([0, 0, 0, 0.8], [0.09, 0, 0, 0.86]);
    for (let i = 0; i < 6; i++) {
      const t = 0.13 + i * 0.13;
      const ang = CL_ANGS[i] * Math.PI / 180;
      const cx = Math.cos(ang) * CLR;
      const cy = -Math.sin(ang) * CLR;
      const ox = Math.cos(ang) * 90, oy = -Math.sin(ang) * 90;
      r.push([t, cx + ox, cy + oy, 1.6], [t + 0.1, cx + ox, cy + oy, 1.6]);
    }
    r.push([0.93, 0, 0, 0.5], [1.0, 0, 0, 0.5]);
    return r;
  })();

  const SCENES = (() => {
    const s = [{ r: [0, 0.13], id: 'hero', name: 'Ecosystem', ci: -1 }];
    DEFS.forEach((d, i) => s.push({ r: [0.13 + i * 0.13, 0.13 + i * 0.13 + 0.1], id: d.id, name: d.n, ci: i }));
    s.push({ r: [0.93, 1.01], id: 'cta', name: 'Full Ecosystem', ci: -1 });
    return s;
  })();

  const camTarget = (s: number) => {
    if (s <= KF[0][0]) return [KF[0][1], KF[0][2], KF[0][3]];
    const last = KF[KF.length - 1];
    if (s >= last[0]) return [last[1], last[2], last[3]];
    for (let i = 0; i < KF.length - 1; i++) {
      if (s >= KF[i][0] && s < KF[i + 1][0]) {
        const t = ease((s - KF[i][0]) / (KF[i + 1][0] - KF[i][0]));
        return [lerp(KF[i][1], KF[i + 1][1], t), lerp(KF[i][2], KF[i + 1][2], t), lerp(KF[i][3], KF[i + 1][3], t)];
      }
    }
    return [0, 0, 0.8];
  };

  const buildWorld = () => {
    const WN: any[] = [];
    const WE: any[] = [];

    // Responsive scaling
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const scale = isMobile ? 0.6 : isTablet ? 0.8 : 1.0;

    const responsiveCLR = CLR * scale;
    const responsivePR_DIST = PR_DIST * scale;
    const responsivePR_STEP = Math.max(196 * scale, PW * scale + 28);

    WN.push({ id: 'hub', wx: 0, wy: 0, type: 'hub', dragX: 0, dragY: 0, velX: 0, velY: 0, hoverT: 0, pinned: true });
    DEFS.forEach((def, ci) => {
      const ang = CL_ANGS[ci] * Math.PI / 180;
      const ouX = Math.cos(ang), ouY = -Math.sin(ang);
      const cwx = ouX * responsiveCLR, cwy = ouY * responsiveCLR;
      const perX = -ouY, perY = ouX;
      WN.push({ id: 'cl' + ci, wx: cwx, wy: cwy, ox: cwx, oy: cwy, type: 'cluster', ci, ouX, ouY, ang: CL_ANGS[ci], dragX: 0, dragY: 0, velX: 0, velY: 0, hoverT: 0 });
      WE.push({ from: 'hub', to: 'cl' + ci, ci });
      const n = def.prods.length;
      def.prods.forEach((pr, pi) => {
        let pwx: number;
        let pwy: number;

        if (def.id === 'crm' || def.id === 'mktg' || def.id === 'supp') {
          const clusterRadius = responsivePR_DIST * 0.92;
          const startAngle = ang - Math.PI * 0.55;
          const endAngle = ang + Math.PI * 0.55;
          const productAngle = n === 1
            ? ang
            : startAngle + ((endAngle - startAngle) * pi) / (n - 1);

          pwx = cwx + Math.cos(productAngle) * clusterRadius;
          pwy = cwy - Math.sin(productAngle) * clusterRadius;
        } else {
          const off = (pi - (n - 1) / 2) * responsivePR_STEP;
          pwx = cwx + ouX * responsivePR_DIST + perX * off;
          pwy = cwy + ouY * responsivePR_DIST + perY * off;
        }

        WN.push({ id: `p${ci}_${pi}`, wx: pwx, wy: pwy, ox: pwx, oy: pwy, type: 'product', ci, pi, dragX: 0, dragY: 0, velX: 0, velY: 0, hoverT: 0 });
        WE.push({ from: 'cl' + ci, to: `p${ci}_${pi}`, ci });
      });
    });
    worldRef.current = { WN, WE };

    // Initialize particles
    const particles: any[] = [];
    WE.forEach((e, idx) => {
      // 1-2 particles per edge
      const num = Math.random() > 0.5 ? 2 : 1;
      for (let i = 0; i < num; i++) {
        particles.push({
          idx, t: Math.random(), speed: 0.003 + Math.random() * 0.005, size: 1.2 + Math.random() * 1.5,
          delay: Math.random() * 200
        });
      }
    });
    particlesRef.current = particles;
  };

  const portPos = (n: any, tWx: number, tWy: number, cam: any, W: number, H: number) => {
    const s = {
      x: (n.wx - cam.wx) * cam.zoom + W / 2,
      y: (n.wy - cam.wy) * cam.zoom + H / 2
    };
    const ts = {
      x: (tWx - cam.wx) * cam.zoom + W / 2,
      y: (tWy - cam.wy) * cam.zoom + H / 2
    };
    const ang = Math.atan2(ts.y - s.y, ts.x - s.x);
    if (n.type === 'hub') {
      const r = (HUB_R + PORT_R + 1) * cam.zoom;
      return { x: s.x + Math.cos(ang) * r, y: s.y + Math.sin(ang) * r, ax: Math.cos(ang), ay: Math.sin(ang) };
    }
    const hw = (n.type === 'product' ? PW : NW) / 2 * cam.zoom;
    const hh = (n.type === 'product' ? PH : NH) / 2 * cam.zoom;
    const cos = Math.cos(ang), sin = Math.sin(ang);
    const tx = cos !== 0 ? hw / Math.abs(cos) : 1e9;
    const ty = sin !== 0 ? hh / Math.abs(sin) : 1e9;
    const t2 = Math.min(tx, ty);
    return { x: s.x + cos * t2, y: s.y + sin * t2, ax: cos, ay: sin };
  };

  const rrect = (g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
    g.beginPath();
    g.moveTo(x + r, y); g.lineTo(x + w - r, y); g.quadraticCurveTo(x + w, y, x + w, y + r);
    g.lineTo(x + w, y + h - r); g.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    g.lineTo(x + r, y + h); g.quadraticCurveTo(x, y + h, x, y + h - r);
    g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y);
    g.closePath();
  };

  const iconPanelPath = (g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
    g.beginPath();
    g.moveTo(x + r, y); g.lineTo(x + w, y); g.lineTo(x + w, y + h); g.lineTo(x + r, y + h);
    g.quadraticCurveTo(x, y + h, x, y + h - r); g.lineTo(x, y + r); g.quadraticCurveTo(x, y, x + r, y);
    g.closePath();
  };

  const drawIcon = (g: CanvasRenderingContext2D, type: string, ix: number, iy: number, sz: number, ci = -1, pi = -1, hov = 0, isActive = false, props: { sr?: number } = {}) => {
    g.save();
    const s = sz * 0.22;
    g.fillStyle = 'rgba(255,255,255,0.85)'; g.strokeStyle = 'rgba(255,255,255,0.85)';
    g.lineWidth = 1.3; g.lineJoin = 'round'; g.lineCap = 'round';
    switch (type) {
      case 'hub': {
        if (faviconRef.current && faviconRef.current.complete) {
          const img = faviconRef.current;
          const ratio = Math.min(sz * 1.25 / img.width, sz * 1.25 / img.height);
          const iw = img.width * ratio, ih = img.height * ratio;
          g.save();
          const gray = Math.max(0, 100 - (hov * 120));
          const opac = 0.35 + (hov * 0.55); // More opaque on hover
          const contrast = 1.2 + (1 - hov) * 0.3;
          const bright = (0.6 + hov * 0.4);
          g.filter = `grayscale(${gray}%) brightness(${bright}) contrast(${contrast})`;
          g.globalAlpha = opac;
          g.drawImage(img, ix - iw / 2, iy - ih / 2, iw, ih);
          g.restore();
        } else {
          g.font = `900 ${sz * 0.65}px var(--font-space-grotesk), sans-serif`;
          g.textAlign = 'center'; g.textBaseline = 'middle';
          g.fillStyle = 'rgba(0, 0, 0, 0.74)'; g.fillText('M', ix, iy);
        }
        break;
      }
      case 'prod': {
        const prodDef = DEFS[ci]?.prods[pi];
        const iconPath = prodDef?.i;
        const img = iconPath ? logosRef.current.get(iconPath) : null;

        // Dark Box on Left (Width matches passed sz/siw)
        const boxW = sz;
        g.fillStyle = 'rgba(0,0,0,0.85)';
        g.beginPath();
        // Corner radius should match node's sr if provided, otherwise fallback
        const r = props.sr || Math.max(2, 6 * (sz / PICON_W));
        g.roundRect(ix - sz * 0.5, iy - sz * 0.5, boxW, sz, [r, 0, 0, r]);
        g.fill();

        if (img && img.complete) {
          const pad = sz * 0.28; // Safer padding
          const availW = boxW - pad * 2;
          const availH = sz - pad * 2;
          const ratio = Math.min(availW / img.width, availH / img.height) * 0.92;
          const iw = img.width * ratio, ih = img.height * ratio;
          g.save();
          // Sharper grayscale-to-color transition (Hover Only)
          const gray = Math.max(0, 100 - (hov * 120));
          const contrast = 1.0 + (1 - hov) * 0.4;
          const bright = 0.9 + hov * 0.2;
          g.filter = `grayscale(${gray}%) contrast(${contrast}) brightness(${bright})`;
          // Precise centering within the black box
          g.drawImage(img, ix - sz * 0.5 + boxW / 2 - iw / 2, iy - ih / 2, iw, ih);
          g.restore();
        }
        break;
      }
      case 'crm': {
        g.beginPath(); g.arc(ix - s * 0.4, iy - s * 0.05, s * 0.58, 0, Math.PI * 2); g.stroke();
        g.beginPath(); g.arc(ix + s * 0.4, iy - s * 0.05, s * 0.58, 0, Math.PI * 2); g.fill(); break;
      }
      case 'mktg': {
        g.beginPath(); g.moveTo(ix - s * 0.7, iy - s * 0.48); g.lineTo(ix - s * 0.7, iy + s * 0.48);
        g.lineTo(ix + s * 0.7, iy + s * 0.04); g.lineTo(ix + s * 0.7, iy - s * 0.04); g.closePath(); g.fill(); break;
      }
      case 'ecom': {
        g.fillRect(ix - s * 0.6, iy - s * 0.1, s * 1.2, s * 0.95);
        g.fillStyle = 'rgba(0,0,0,0.3)'; g.fillRect(ix - s * 0.6, iy - s * 0.1, s * 1.2, s * 0.22);
        g.strokeStyle = 'rgba(255,255,255,0.85)';
        g.beginPath(); g.moveTo(ix - s * 0.26, iy - s * 0.1); g.quadraticCurveTo(ix, iy - s * 0.8, ix + s * 0.26, iy - s * 0.1); g.stroke(); break;
      }
      case 'supp': {
        g.save(); g.beginPath();
        g.moveTo(ix - s * 0.72, iy - s * 0.55); g.lineTo(ix + s * 0.72, iy - s * 0.55);
        g.lineTo(ix + s * 0.72, iy + s * 0.38); g.lineTo(ix - s * 0.72, iy + s * 0.38); g.closePath(); g.fill();
        g.fillStyle = 'rgba(255,255,255,.2)';
        [ix - s * 0.28, ix, ix + s * 0.28].forEach(bx => { g.beginPath(); g.arc(bx, iy + s * 0.05, s * 0.14, 0, Math.PI * 2); g.fill() });
        g.fillStyle = 'rgba(0,0,0,.65)';
        g.beginPath(); g.moveTo(ix - s * 0.22, iy + s * 0.38); g.lineTo(ix - s * 0.52, iy + s * 0.75); g.lineTo(ix + s * 0.18, iy + s * 0.38); g.closePath(); g.fill();
        g.restore(); break;
      }
      case 'fin': {
        [-s * 0.5, 0, s * 0.5].forEach((ox, bi) => {
          const bh = [s * 0.55, s * 0.9, s * 0.68][bi];
          g.fillRect(ix + ox - s * 0.16, iy + s * 0.48 - bh, s * 0.32, bh);
        }); break;
      }
      case 'auto': {
        g.beginPath();
        g.moveTo(ix + s * 0.08, iy - s * 0.85); g.lineTo(ix - s * 0.22, iy + s * 0.08); g.lineTo(ix + s * 0.08, iy + s * 0.08);
        g.lineTo(ix - s * 0.08, iy + s * 0.85); g.lineTo(ix + s * 0.32, iy - s * 0.08); g.lineTo(ix, iy - s * 0.08);
        g.closePath(); g.fill(); break;
      }
    }
    g.restore();
  };

  const drawPort = (g: CanvasRenderingContext2D, px: number, py: number, op: number, act: boolean, cam: any) => {
    const r = PORT_R * cam.zoom;
    g.save(); g.globalAlpha = op;
    g.strokeStyle = act ? 'rgba(255,255,255,.75)' : 'rgba(255,255,255,.25)';
    g.lineWidth = act ? 1.2 : 0.75;
    if (act) { g.shadowBlur = 6; g.shadowColor = 'rgba(255,255,255,.3)' }
    g.beginPath(); g.arc(px, py, r, 0, Math.PI * 2); g.stroke();
    g.fillStyle = 'rgba(8,8,8,.9)'; g.beginPath(); g.arc(px, py, r - 1.4, 0, Math.PI * 2); g.fill();
    g.restore();
  };

  const nodeOp = (n: any, curScene: string, curCI: number, cam: any) => {
    if (n.type === 'hub') return 1;
    const isCTA = (curScene === 'cta'), isHero = (curScene === 'hero');
    if (n.type === 'cluster') {
      if (isHero || isCTA) return 0.22;
      return n.ci === curCI ? 1 : 0.08;
    }
    if (n.type === 'product') {
      if (n.ci !== curCI) return 0;
      return Math.max(0, Math.min(1, (cam.zoom - 1.12) / 0.5));
    }
    return 0;
  };

  const edgeOp = (e: any, curScene: string, curCI: number, cam: any, WN: any[]) => {
    const tn = WN.find(n => n.id === e.to); if (!tn) return 0;
    const isCTA = (curScene === 'cta'), isHero = (curScene === 'hero');
    if (tn.type === 'cluster') {
      if (isHero || isCTA) return 0.09;
      return e.ci === curCI ? 0.48 : 0.03;
    }
    if (tn.type === 'product') {
      if (e.ci !== curCI) return 0;
      return Math.max(0, Math.min(0.42, (cam.zoom - 1.12) / 0.5));
    }
    return 0;
  };

  useEffect(() => {
    buildWorld();

    // Load favicon
    const img = new Image();
    img.src = '/assets/favicon.png';
    img.onload = () => { faviconRef.current = img; };

    // Load logos
    DEFS.forEach(c => c.prods.forEach(p => {
      if (p.i && !logosRef.current.has(p.i)) {
        const logoImg = new Image();
        logoImg.src = p.i;
        logoImg.onload = () => { logosRef.current.set(p.i!, logoImg); };
      }
    }));

    const handleScroll = () => {
      const ms = document.body.scrollHeight - window.innerHeight;
      const prog = ms > 0 ? window.scrollY / ms : 0;
      setScrollProg(prog);
      for (const sc of SCENES) {
        if (prog >= sc.r[0] && prog < sc.r[1]) {
          setCurScene(sc.id);
          setCurCI(sc.ci);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!canvasRef.current) return;
      const cv = canvasRef.current;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = window.innerWidth * dpr;
      cv.height = window.innerHeight * dpr;
      cv.style.width = window.innerWidth + 'px';
      cv.style.height = window.innerHeight + 'px';
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const nodeAtScreen = (sx: number, sy: number, cam: any, W: number, H: number, WN: any[]) => {
      let best: any = null, bestZ = -1;
      const w2s = (wx: number, wy: number) => ({
        x: (wx - cam.wx) * cam.zoom + W / 2,
        y: (wy - cam.wy) * cam.zoom + H / 2
      });
      for (let i = 0; i < WN.length; i++) {
        const n = WN[i];
        const s = w2s(n.wx, n.wy);
        const hov = n.hoverT || 0;
        const scale = 1 + hov * 0.03 + (draggingRef.current === n ? 0.04 : 0);

        if (n.type === 'hub') {
          const r = HUB_R * cam.zoom * scale;
          const d = Math.hypot(sx - s.x, sy - s.y);
          if (d < r + 5) { best = n; bestZ = i; }
          continue;
        }
        const op = nodeOp(n, curScene, curCI, cam); if (op < 0.1) continue;
        const hw = (n.type === 'product' ? PW : NW) / 2 * cam.zoom * scale;
        const hh = (n.type === 'product' ? PH : NH) / 2 * cam.zoom * scale;
        if (sx > s.x - hw - 8 && sx < s.x + hw + 8 && sy > s.y - hh - 8 && sy < s.y + hh + 8) {
          if (i > bestZ) { bestZ = i; best = n }
        }
      }
      return best;
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const W = window.innerWidth;
      const H = window.innerHeight;
      const node = nodeAtScreen(e.clientX, e.clientY, camRef.current, W, H, worldRef.current.WN);
      if (!node) return;
      draggingRef.current = node;
      node.velX = 0; node.velY = 0;
    };
    window.addEventListener('mousedown', handleMouseDown);

    const handleMouseUp = (e: MouseEvent) => {
      if (draggingRef.current && Math.hypot(e.clientX - mouseRef.current.x, e.clientY - mouseRef.current.y) < 5) {
        // Simple click detection
        const n = draggingRef.current;
        const def = DEFS[n.ci];
        let url = '/';

        if (n.type === 'cluster') {
          onClusterSelect?.({
            clusterId: def.id,
            clusterName: def.n,
            clusterDescription: def.desc,
            icon: `/assets/${def.icon}.png`,
            products: def.prods.map((product) => ({
              name: product.n,
              description: product.d,
            })),
          });
          draggingRef.current = null;
          return;
        } else if (n.type === 'product') {
          const product = def.prods[n.pi];
          onProductSelect?.({
            clusterId: def.id,
            productName: product.n,
            productDescription: product.d,
            icon: product.i,
          });
          draggingRef.current = null;
          return;
        }

        window.location.href = url;
      }
      draggingRef.current = null;
    };
    window.addEventListener('mouseup', handleMouseUp);

    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      mouse.vx = e.clientX - mouse.x;
      mouse.vy = e.clientY - mouse.y;
      mouse.px = mouse.x; mouse.py = mouse.y;
      mouse.x = e.clientX; mouse.y = e.clientY;

      if (draggingRef.current) {
        const cam = camRef.current;
        const wp = {
          wx: (e.clientX - window.innerWidth / 2) / cam.zoom + cam.wx,
          wy: (e.clientY - window.innerHeight / 2) / cam.zoom + cam.wy
        };
        draggingRef.current.wx = wp.wx;
        draggingRef.current.wy = wp.wy;
      }

      trailRef.current.push({ x: e.clientX, y: e.clientY, life: 1.0, sz: 3.5 + Math.min(Math.hypot(mouse.vx, mouse.vy) * 0.12, 2.5) });
      if (trailRef.current.length > 38) trailRef.current.shift();
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    const g = canvasRef.current?.getContext('2d');

    const render = (ts: number) => {
      if (!g || !canvasRef.current) return;
      const W = window.innerWidth;
      const H = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.clearRect(0, 0, W, H);

      // Camera
      const [twx, twy, tz] = camTarget(scrollProg);
      camRef.current.wx = lerp(camRef.current.wx, twx, 0.07);
      camRef.current.wy = lerp(camRef.current.wy, twy, 0.07);
      camRef.current.zoom = lerp(camRef.current.zoom, tz, 0.07);
      const cam = camRef.current;

      const w2s = (wx: number, wy: number) => ({
        x: (wx - cam.wx) * cam.zoom + W / 2,
        y: (wy - cam.wy) * cam.zoom + H / 2
      });

      // Dot grid
      const gs = 48;
      const ox = ((-cam.wx * cam.zoom + W / 2) % gs + gs) % gs;
      const oy = ((-cam.wy * cam.zoom + H / 2) % gs + gs) % gs;
      g.fillStyle = 'rgba(255,255,255,.022)';
      for (let gx = ox - gs; gx < W + gs; gx += gs)
        for (let gy = oy - gs; gy < H + gs; gy += gs) { g.beginPath(); g.arc(gx, gy, 0.6, 0, Math.PI * 2); g.fill(); }

      // Physics & Hover
      const { WN, WE } = worldRef.current;
      hoveredRef.current = nodeAtScreen(mouseRef.current.x, mouseRef.current.y, cam, W, H, WN);

      // Node Repulsion & Physics Constants
      const REPULSION = 1800;
      const MIN_DIST = 100;

      WN.forEach(n => {
        if (n.type === 'hub') return;

        // Target Return Force
        if (n !== draggingRef.current) {
          const dx = n.ox - n.wx, dy = n.oy - n.wy;
          n.velX = (n.velX + dx * 0.045) * 0.82;
          n.velY = (n.velY + dy * 0.045) * 0.82;

          // Repulsion from other nodes
          WN.forEach(other => {
            if (n === other) return;
            const rdx = n.wx - other.wx;
            const rdy = n.wy - other.wy;
            const distSq = rdx * rdx + rdy * rdy;
            const dist = Math.sqrt(distSq) || 1;

            if (dist < MIN_DIST) {
              const force = (MIN_DIST - dist) / MIN_DIST * 0.5;
              n.velX += (rdx / dist) * force;
              n.velY += (rdy / dist) * force;
            }
          });

          n.wx += n.velX; n.wy += n.velY;
        }

        // Viewport Constraint (Clamping)
        // Margin in world space to keep nodes on screen
        const marginX = (W / 2 - 80) / cam.zoom;
        const marginY = (H / 2 - 60) / cam.zoom;
        n.wx = Math.max(cam.wx - marginX, Math.min(cam.wx + marginX, n.wx));
        n.wy = Math.max(cam.wy - marginY, Math.min(cam.wy + marginY, n.wy));

        const targetHover = (n === hoveredRef.current) ? 1 : 0;
        n.hoverT = lerp(n.hoverT, targetHover, 0.12);
      });

      // Draw Edges and Particles
      WE.forEach((e, idx) => {
        const op = edgeOp(e, curScene, curCI, cam, WN); if (op < 0.015) return;
        const fn = WN.find(n => n.id === e.from), tn = WN.find(n => n.id === e.to);
        if (!fn || !tn) return;
        const sp = portPos(fn, tn.wx, tn.wy, cam, W, H);
        const ep = portPos(tn, fn.wx, fn.wy, cam, W, H);
        const dist = Math.hypot(ep.x - sp.x, ep.y - sp.y);
        const cp = Math.max(dist * 0.36, 40 * cam.zoom);
        const isAct = e.ci === curCI;
        const isHov = hoveredRef.current && (WN.find(n => n.id === e.to) === hoveredRef.current || WN.find(n => n.id === e.from) === hoveredRef.current);

        const p1 = { x: sp.x + sp.ax * cp, y: sp.y + sp.ay * cp };
        const p2 = { x: ep.x + ep.ax * cp, y: ep.y + ep.ay * cp };

        g.save();
        g.globalAlpha = op * (isHov ? 1.4 : 1);
        g.strokeStyle = isAct ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.2)';
        g.lineWidth = isAct ? 1.2 : 0.7;
        g.beginPath(); g.moveTo(sp.x, sp.y); g.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, ep.x, ep.y); g.stroke();
        g.restore();

        drawPort(g, sp.x, sp.y, Math.min(op * 1.4, 0.9), isAct || isHov, cam);
        drawPort(g, ep.x, ep.y, Math.min(op * 1.4, 0.9), isAct || isHov, cam);

        // Electrons flow logic
        particlesRef.current.forEach(p => {
          if (p.idx === idx) {
            p.t += p.speed;
            if (p.t > 1) { p.t = 0; p.speed = 0.003 + Math.random() * 0.005; }
            const pt = getBezierPoint(p.t, { x: sp.x, y: sp.y }, p1, p2, { x: ep.x, y: ep.y });
            g.save();
            g.globalAlpha = op * 1.5;
            g.fillStyle = 'white';
            const r = p.size * cam.zoom;
            // Particle Glow
            g.shadowBlur = 8 * cam.zoom;
            g.shadowColor = 'rgba(255,255,255,0.8)';
            g.beginPath(); g.arc(pt.x, pt.y, r, 0, Math.PI * 2); g.fill();
            g.restore();
          }
        });
      });

      // Draw Nodes
      WN.forEach(n => {
        const op = nodeOp(n, curScene, curCI, cam); if (op < 0.018) return;
        const s = w2s(n.wx, n.wy);
        const isAct = n.type === 'cluster' && n.ci === curCI;
        const isHov = hoveredRef.current === n;
        const isDrag = draggingRef.current === n;
        const hov = n.hoverT;
        const scale = 1 + hov * 0.03 + (isDrag ? 0.04 : 0);

        if (n.type === 'hub') {
          const r = HUB_R * cam.zoom * scale;
          g.save();
          // Subtle Glow effect
          if (hov > 0.01) {
            g.shadowBlur = 12 * hov;
            g.shadowColor = 'rgba(255,255,255,0.4)';
          }

          // Hub Color (Bubble Gradient)
          const grad = g.createRadialGradient(s.x - r * 0.3, s.y - r * 0.3, r * 0.1, s.x, s.y, r);
          grad.addColorStop(0, '#333');
          grad.addColorStop(0.5, '#121212');
          grad.addColorStop(1, '#080808');

          g.fillStyle = grad;
          g.beginPath(); g.arc(s.x, s.y, r, 0, Math.PI * 2); g.fill();

          // Stroke
          g.strokeStyle = `rgba(255,255,255,${0.12 + hov * 0.15})`;
          g.lineWidth = 1;
          g.stroke();

          // Favicon (Image)
          drawIcon(g, 'hub', s.x, s.y, r * 1.8);

          g.restore();
        } else {
          const sw = (n.type === 'cluster' ? NW : PW) * cam.zoom * scale;
          const sh = (n.type === 'cluster' ? NH : PH) * cam.zoom * scale;
          const siw = (n.type === 'cluster' ? ICON_W : PICON_W) * cam.zoom * scale;
          const sr = Math.max(2, 6 * cam.zoom);
          const x = s.x - sw / 2, y = s.y - sh / 2;

          g.save();
          g.globalAlpha = op;

          // Glow effect
          if (hov > 0.01) {
            g.shadowBlur = 20 * hov;
            g.shadowColor = 'rgba(255,255,255,0.5)';
          }

          // Main Bubble Gradient
          const bgGrad = g.createLinearGradient(x, y, x, y + sh);
          bgGrad.addColorStop(0, '#2a2a2a');
          bgGrad.addColorStop(0.5, '#161616');
          bgGrad.addColorStop(1, '#0f0f0f');

          g.fillStyle = bgGrad;
          rrect(g, x, y, sw, sh, sr);
          g.fill();

          // Icon Panel (slightly darker/more recessed)
          const pGrad = g.createLinearGradient(x, y, x + siw, y);
          pGrad.addColorStop(0, '#0a0a0a');
          pGrad.addColorStop(1, '#1a1a1a');
          g.fillStyle = pGrad;
          iconPanelPath(g, x, y, siw, sh, sr);
          g.fill();

          // Border/Stroke
          g.strokeStyle = isDrag ? 'white' : `rgba(255,255,255,${0.1 + hov * 0.3})`;
          g.lineWidth = 1;
          g.stroke();

          // Subtle Highlight at top
          g.strokeStyle = 'rgba(255,255,255,0.15)';
          g.beginPath();
          g.moveTo(x + sr, y + 1);
          g.lineTo(x + sw - sr, y + 1);
          g.stroke();

          const def = DEFS[n.ci];
          const isViewActive = n.ci === curCI; // True if this node is in the zoomed cluster view

          if (n.type === 'cluster') {
            drawIcon(g, def.icon, x + siw / 2, s.y, siw * 0.92, n.ci, -1, hov, isViewActive, { sr });
          } else if (n.type === 'product') {
            drawIcon(g, 'prod', x + siw / 2, s.y, siw, n.ci, n.pi, hov, isViewActive, { sr });
          }

          g.fillStyle = 'white';
          g.font = `600 ${11 * cam.zoom}px var(--font-space-grotesk)`;
          g.textBaseline = 'middle';
          const textX = x + siw + 10 * cam.zoom;
          g.fillText(n.type === 'cluster' ? def.n : def.prods[n.pi].n, textX, s.y);

          g.restore();
        }
      });

      // Trail and Cursor
      mouseRef.current.ringX = lerp(mouseRef.current.ringX, mouseRef.current.x, 0.14);
      mouseRef.current.ringY = lerp(mouseRef.current.ringY, mouseRef.current.y, 0.14);
      trailRef.current.forEach((t, i) => {
        t.life -= 0.038; if (t.life <= 0) return;
        g.save(); g.globalAlpha = t.life * 0.28 * (i / trailRef.current.length);
        g.fillStyle = 'rgba(255,255,255,.9)'; g.beginPath(); g.arc(t.x, t.y, t.sz * t.life, 0, Math.PI * 2); g.fill();
        g.restore();
      });

      // Draw Cursor (Dot & Ring)
      if (W > 768) { // Only on desktop
        const mx = mouseRef.current.x, my = mouseRef.current.y;
        const rx = mouseRef.current.ringX, ry = mouseRef.current.ringY;

        g.save();
        // Dot
        g.fillStyle = 'white';
        g.shadowBlur = 10;
        g.shadowColor = 'rgba(255,255,255,0.8)';
        g.beginPath(); g.arc(mx, my, 2.8, 0, Math.PI * 2); g.fill();

        // Ring
        g.shadowBlur = 0;
        g.strokeStyle = 'rgba(255,255,255,0.4)';
        g.lineWidth = 1.2;
        g.beginPath(); g.arc(rx, ry, 12, 0, Math.PI * 2); g.stroke();
        g.restore();
      }

      animationId = requestAnimationFrame(render);
    };
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [scrollProg, curScene, curCI, onClusterSelect, onProductSelect]);

  return (
    <>
      <canvas ref={canvasRef} id="c" className="fixed inset-0 w-screen h-screen z-0" />
    </>
  );
};
