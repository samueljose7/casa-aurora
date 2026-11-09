'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { colecoes, ocasioes } from '@/data/catalogo';
import { loja } from '@/data/loja';
import { Icone } from './icones';
import { Pedido } from './pedido';

const menus = [
  { nome: 'Flores', titulo: 'Escolha suas flores', texto: 'Das delicadas orquídeas aos buquês mais coloridos.', itens: colecoes.slice(0, 5).map(c => ({ nome: c.nome, url: '/categoria/' + c.slug + '/' })), foto: '/flores/prod-buques-1.webp', destino: '/loja/' },
  { nome: 'Flores e presentes', titulo: 'Presentes com carinho', texto: 'Combine flores com um mimo especial.', itens: [{ nome:'Cestas e presentes', url:'/categoria/presentes/' },{nome:'Flores em caixa',url:'/categoria/caixas/'}], foto:'/flores/prod-presentes-2.webp', destino:'/categoria/presentes/' },
  { nome: 'Flores por ocasiões', titulo: 'Para cada momento', texto: 'Encontre flores que combinam com o motivo do presente.', itens: ocasioes.map(o => ({ nome:o.nome, url:'/categoria/' + o.slug + '/' })), foto:'/flores/prod-rosas-2.webp', destino:'/#ocasioes' },
  { nome: 'Cestas especiais', titulo: 'Um presente completo', texto: 'Sabores e flores reunidos em um só presente.', itens: [{ nome:'Cestas especiais', url:'/categoria/presentes/' }], foto:'/flores/prod-presentes-1.webp', destino:'/categoria/presentes/' },
];

export function Marca() {
  return <Link href="/" className="marca" aria-label={loja.nome + ' – página inicial'}>
    {loja.logo ? <Image src={loja.logo} alt={loja.nome} width={172} height={58}/> :
      <><span>{loja.nome}<Icone nome="flor" size={20}/></span><small>{loja.assinatura}</small></>}
  </Link>;
}

export function Cabecalho() {
  const [menu, setMenu] = useState('');
  const [busca, setBusca] = useState(false);
  const [mobile, setMobile] = useState(false);
  const campoBusca = useRef<HTMLInputElement>(null);
  const fechar = () => { setMenu(''); setBusca(false); setMobile(false); };

  useEffect(() => {
    const escape = (e: KeyboardEvent) => { if (e.key === 'Escape') fechar(); };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);

  useEffect(() => {
    if (busca) campoBusca.current?.focus();
  }, [busca]);

  return <header className="cabecalho" onBlur={e => {
    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) fechar();
  }}>
    <div className="barra-topo"><span>{loja.frase}</span><Pedido texto="Atendimento pelo WhatsApp" classe="atendimento-topo"/></div>
    <div className="barra-menu">
      <button className="botao-icone menu-mobile" type="button" aria-label={mobile ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobile} aria-controls="menu-principal" onClick={() => { setMobile(!mobile); setBusca(false); }}><Icone nome={mobile ? 'fechar' : 'menu'} size={25}/></button>
      <Marca/>
      <nav id="menu-principal" className={'nav ' + (mobile ? 'nav-aberta' : '')} aria-label="Navegação principal">
        <Link className="nav-link" href="/loja/" onClick={fechar}><Icone nome="caixa" size={16}/> Loja</Link>
        <Link className="nav-link" href="/" onClick={fechar}>Início</Link>
        {menus.map((m, i) => <div className="nav-item" key={m.nome}>
          <button type="button" className="nav-link" aria-controls={'submenu-' + i} aria-expanded={menu === m.nome} onClick={() => { setMenu(menu === m.nome ? '' : m.nome); setBusca(false); }}>
            {m.nome}<Icone nome="baixo" size={14}/>
          </button>
          <div hidden={menu !== m.nome} className="mega" id={'submenu-' + i}>
            <div><p className="sobretitulo">{loja.nome}</p><strong>{m.titulo}</strong><p>{m.texto}</p><Link href={m.destino} onClick={fechar}>Explorar coleção <Icone nome="seta" size={15}/></Link></div>
            <ul>{m.itens.map(item => <li key={item.url}><Link href={item.url} onClick={fechar}>{item.nome}</Link></li>)}</ul>
            <Image src={m.foto} alt="" width={240} height={168}/>
          </div>
        </div>)}
      </nav>
      <div className="acoes-menu">
        <button className="botao-icone" type="button" aria-label="Pesquisar produtos" aria-expanded={busca} aria-controls="busca-principal" onClick={() => { setBusca(!busca); setMobile(false); setMenu(''); }}><Icone nome={busca ? 'fechar' : 'busca'} size={25}/></button>
        <Pedido texto="WhatsApp" classe="acao-whats"/>
      </div>
    </div>
    <form className={'busca-topo ' + (busca ? 'busca-aberta' : '')} id="busca-principal" action="/loja/">
      <label htmlFor="q-topo">Pesquisar produtos</label>
      <div><Icone nome="busca" size={18}/><input ref={campoBusca} id="q-topo" name="q" placeholder="O que você procura?" type="search"/><button className="botao principal" type="submit">Buscar</button></div>
    </form>
    <nav className="nav-inferior" aria-label="Acesso rápido">
      <Link href="/" onClick={fechar}><Icone nome="inicio"/>Início</Link>
      <button type="button" onClick={() => { setMobile(false); setMenu(''); campoBusca.current?.focus(); }}><Icone nome="busca"/>Buscar</button>
      <Link href="/loja/" onClick={fechar}><Icone nome="loja"/>Loja</Link>
      <Pedido texto="WhatsApp" classe="nav-whats"/>
    </nav>
  </header>;
}
