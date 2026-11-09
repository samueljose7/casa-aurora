'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { colecoes, ocasioes, produtos, type Produto } from '@/data/catalogo';
import { normalizarBusca } from '@/data/comercial';
import { Cartao } from './vitrine';
import { Icone } from './icones';

const tipos = [...new Set(produtos.map(p => p.flor))].sort((a,b) => a.localeCompare(b,'pt-BR'));
const precos = [
  { id: 'ate-150', nome: 'Até R$ 150', aceita: (p: Produto) => p.preco <= 15000 },
  { id: '150-a-200', nome: 'De R$ 150 a R$ 200', aceita: (p: Produto) => p.preco > 15000 && p.preco <= 20000 },
  { id: 'acima-200', nome: 'Acima de R$ 200', aceita: (p: Produto) => p.preco > 20000 },
];

export function Catalogo({ itens, colecaoFixa }: { itens: Produto[]; colecaoFixa?: string }) {
  const [busca, setBusca] = useState('');
  const [colecao, setColecao] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState('');
  const [ordem, setOrdem] = useState('destaques');
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);

  useEffect(() => {
    setBusca(new URLSearchParams(window.location.search).get('q') ?? '');
  }, []);

  const buscaNormalizada = normalizarBusca(busca);
  const faixa = precos.find(f => f.id === preco);
  const filtrados = itens.filter(p =>
    (!colecao || p.colecao === colecao) &&
    (!tipo || p.flor === tipo) &&
    (!faixa || faixa.aceita(p)) &&
    (!buscaNormalizada || normalizarBusca(p.nome + ' ' + p.flor).includes(buscaNormalizada))
  ).sort((a,b) => {
    if (ordem === 'menor') return a.preco - b.preco;
    if (ordem === 'maior') return b.preco - a.preco;
    if (ordem === 'nome') return a.nome.localeCompare(b.nome, 'pt-BR');
    return Number(Boolean(b.destaque)) - Number(Boolean(a.destaque));
  });

  function limpar() {
    setBusca(''); setColecao(''); setTipo(''); setPreco(''); setOrdem('destaques');
    if (new URLSearchParams(window.location.search).has('q')) window.history.replaceState(null, '', window.location.pathname);
  }

  return <div className={'catalogo-layout margem ' + (colecaoFixa ? 'catalogo-colecao' : '')}>
    <button type="button" className="botao contorno filtro-mobile" aria-expanded={filtrosAbertos} aria-controls="filtros" onClick={() => setFiltrosAbertos(!filtrosAbertos)}><Icone nome="filtro"/>{filtrosAbertos ? 'Fechar filtros' : 'Filtrar produtos'}</button>
    <aside id="filtros" className={'filtros ' + (filtrosAbertos ? 'filtros-abertos' : '')} aria-label="Filtrar catálogo">
      <div className="filtros-titulo"><Icone nome="flor" size={27}/><div><h2>Filtre a seleção</h2><p>Encontre a flor que você procura.</p></div></div>
      <div className="filtros-corpo">
        <label className="campo"><span>O que você procura?</span><input type="search" placeholder="Ex. rosas ou buquê" value={busca} onChange={e => setBusca(e.target.value)}/></label>
        {!colecaoFixa && <fieldset><legend>Categorias</legend>
          {[{slug:'', nome:'Toda a loja'}, ...colecoes].map(c => <label className="radio" key={c.slug}>
            <input name="categoria" type="radio" checked={colecao === c.slug} onChange={() => setColecao(c.slug)}/>{c.nome}
          </label>)}
        </fieldset>}
        <label className="campo"><span>Tipo de flor</span><select value={tipo} onChange={e => setTipo(e.target.value)}><option value="">Todos os tipos</option>{tipos.filter(t => itens.some(p => p.flor === t)).map(t => <option key={t}>{t}</option>)}</select></label>
        <label className="campo"><span>Faixa de preço</span><select value={preco} onChange={e => setPreco(e.target.value)}><option value="">Todos os preços</option>{precos.map(f => <option key={f.id} value={f.id}>{f.nome}</option>)}</select></label>
        <button className="botao contorno limpar" type="button" onClick={limpar}>Limpar filtros</button>
      </div>
    </aside>
    <section className="catalogo-resultados" aria-label="Produtos">
      <div className="catalogo-topo">
        <div><p className="sobretitulo">{colecaoFixa ? 'COLEÇÃO' : 'TODAS AS FLORES'}</p><h2>Escolha suas flores</h2></div>
        <div className="catalogo-ordem">
          <span role="status">{filtrados.length} {filtrados.length === 1 ? 'produto' : 'produtos'}</span>
          <label>Ordenar <select value={ordem} onChange={e => setOrdem(e.target.value)}>
            <option value="destaques">Destaques</option><option value="menor">Menor preço</option><option value="maior">Maior preço</option><option value="nome">Nome de A a Z</option>
          </select></label>
        </div>
      </div>
      {filtrados.length ? <div className="catalogo-grade">{filtrados.map(p => <Cartao key={p.slug} produto={p}/>)}</div> :
        <div className="sem-resultados"><Icone nome="busca" size={34}/><h3>Nenhuma flor por aqui</h3><p>Tente outro nome ou limpe os filtros para voltar à seleção.</p><button type="button" className="botao principal" onClick={limpar}>Limpar filtros</button></div>}
    </section>
  </div>;
}

export function SeletorColecao({ atual }: { atual: string }) {
  return <div className="seletor-colecao">
    <Link className="botao contorno" href="/loja/">Todas as flores</Link>
    <label><span className="sr-only">Escolher coleção</span>
      <select value={atual} onChange={e => window.location.assign('/categoria/' + e.target.value + '/')}>
        {[...colecoes,...ocasioes].map(c => <option value={c.slug} key={c.slug}>{c.nome}</option>)}
      </select>
    </label>
  </div>;
}
