import type { ReactNode } from 'react';

const desenhos: Record<string, ReactNode> = {
  flor: <><path d="M12 12C4 12 3 7 5 5s7-1 7 7c0-8 5-9 7-7s1 7-7 7c8 0 9 5 7 7s-7 1-7-7c0 8-5 9-7 7s-1-7 7-7Z"/><circle cx="12" cy="12" r="1.2"/></>,
  inicio: <><path d="m3 10 9-7 9 7v10H3zM9 20v-7h6v7"/></>,
  loja: <><path d="M4 11v10h16V11M3 11l2-7h14l2 7M3 11c0 3 6 3 6 0 0 3 6 3 6 0 0 3 6 3 6 0M9 21v-5h6v5"/></>,
  busca: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
  baixo: <path d="m6 9 6 6 6-6"/>,
  direita: <path d="m9 5 7 7-7 7"/>,
  esquerda: <path d="m15 5-7 7 7 7"/>,
  seta: <path d="M3 12h17m-6-6 6 6-6 6"/>,
  menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
  fechar: <path d="m6 6 12 12M18 6 6 18"/>,
  filtro: <path d="M3 6h18M6 12h12m-9 6h6"/>,
  caixa: <><rect x="4" y="9" width="16" height="12" rx="1"/><path d="M3 5h18v4H3zM12 5v16M12 5c-6 0-6-5-3-3 1 1 2 2 3 3Zm0 0c6 0 6-5 3-3-1 1-2 2-3 3Z"/></>,
  entrega: <><path d="M2 5h12v12H2zM14 9h4l4 4v4h-8"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></>,
  whats: <><path d="M4.1 16.9 3 21l4.3-1.1a9 9 0 1 0-3.2-3Z"/><path d="M9.2 7.5c.3 0 .5.1.6.4l.9 2c.1.2 0 .4-.1.6l-.6.7c.6 1.3 1.6 2.2 2.9 2.8l.8-.9c.1-.2.4-.2.6-.1l1.9.9c.3.1.4.4.3.7-.3 1.3-1.3 1.7-2.3 1.6-3-.4-6.5-3.7-6.7-6.3-.1-1.1.7-2.4 1.7-2.4Z" fill="currentColor" strokeWidth="0.4"/></>,
};

export function Icone({ nome, size = 20 }: { nome: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{desenhos[nome]}</svg>;
}
