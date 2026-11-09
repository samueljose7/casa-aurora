'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { campanhas, type Produto } from '@/data/catalogo';
import { moeda, urlProduto } from '@/data/comercial';
import { Icone } from './icones';
import { Pedido } from './pedido';

export function Campanhas() {
  const [indice, setIndice] = useState(0);
  const inicio = useRef<number | null>(null);
  const item = campanhas[indice];

  return <section className="hero" aria-roledescription="carrossel" aria-label="Coleções em destaque"
    onTouchStart={e => { inicio.current = e.touches[0].clientX; }}
    onTouchEnd={e => {
      if (inicio.current === null) return;
      const distancia = inicio.current - e.changedTouches[0].clientX;
      if (Math.abs(distancia) > 45) setIndice((indice + (distancia > 0 ? 1 : -1) + campanhas.length) % campanhas.length);
      inicio.current = null;
    }}>
    <Image key={item.foto} src={item.foto} alt={item.alt} fill sizes="100vw" preload={indice === 0} className="hero-foto"/>
    <div className="hero-sombra"/>
    <div className="hero-conteudo" aria-live="polite">
      <p className="sobretitulo">{item.chamada}</p>
      <h1>{item.titulo}</h1>
      <p>{item.descricao}</p>
      <Link href={item.url} className="botao destaque">{item.acao}<Icone nome="seta" size={17}/></Link>
    </div>
    <div className="hero-pontos">{campanhas.map((c, i) =>
      <button key={c.foto} aria-label={'Mostrar ' + c.chamada.toLowerCase()} aria-pressed={i === indice} onClick={() => setIndice(i)}><span/></button>
    )}</div>
  </section>;
}

export function Cartao({ produto }: { produto: Produto }) {
  return <article className="produto-card">
    <Link className="produto-foto" href={urlProduto(produto.slug)} aria-label={'Ver detalhes de ' + produto.nome}>
      <Image src={produto.foto} alt={produto.nome} fill sizes="(max-width: 640px) 48vw, (max-width: 960px) 32vw, 25vw"/>
      {produto.destaque && <span className="selo">Seleção da casa</span>}
    </Link>
    <div className="produto-card-corpo">
      <p className="produto-flor">{produto.flor}</p>
      <h3><Link href={urlProduto(produto.slug)}>{produto.nome}</Link></h3>
      <p className="preco">{moeda(produto.preco)}</p>
      <Pedido produto={produto} classe="produto-pedido" texto="Pedir no WhatsApp"/>
    </div>
  </article>;
}

export function Vitrine({ titulo, chamada, descricao, url, itens, id }: { titulo: string; chamada: string; descricao: string; url: string; itens: Produto[]; id: string }) {
  const trilho = useRef<HTMLDivElement>(null);
  const [posicao, setPosicao] = useState({ inicio:true, fim:false });

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const atualizar = () => setPosicao({
      inicio: el.scrollLeft < 2,
      fim: el.scrollLeft + el.clientWidth > el.scrollWidth - 3,
    });
    const observer = new ResizeObserver(atualizar);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function mover(sentido: number) {
    const el = trilho.current;
    if (!el) return;
    const card = el.querySelector('article');
    if (card) el.scrollBy({ left: (card.offsetWidth + 18) * sentido, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  if (itens.length === 0) return null;
  return <section className="vitrine margem" aria-labelledby={id}>
    <div className="vitrine-topo">
      <div><p className="sobretitulo">{chamada}</p><h2 id={id}>{titulo}</h2><p>{descricao}</p></div>
      <div className="vitrine-controles">
        <Link href={url} className="botao contorno">Ver toda a categoria <Icone nome="seta" size={15}/></Link>
        <button className="botao-icone seta-trilho" aria-label={'Produtos anteriores em ' + titulo} disabled={posicao.inicio} onClick={() => mover(-1)}><Icone nome="esquerda"/></button>
        <button className="botao-icone seta-trilho" aria-label={'Próximos produtos em ' + titulo} disabled={posicao.fim} onClick={() => mover(1)}><Icone nome="direita"/></button>
      </div>
    </div>
    <div ref={trilho} className="trilho" onScroll={e => {
      const el = e.currentTarget;
      setPosicao({ inicio: el.scrollLeft < 2, fim: el.scrollLeft + el.clientWidth > el.scrollWidth - 3 });
    }}>
      {itens.map(produto => <Cartao key={produto.slug} produto={produto}/>)}
    </div>
  </section>;
}
