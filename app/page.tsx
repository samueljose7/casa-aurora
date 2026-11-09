import Image from 'next/image';
import Link from 'next/link';
import { colecoes, ocasioes, produtos } from '@/data/catalogo';
import { loja } from '@/data/loja';
import { Campanhas, Vitrine } from '@/components/vitrine';
import { Icone } from '@/components/icones';
import { Pedido } from '@/components/pedido';

export default function Home() {
  return <>
    <Campanhas/>
    <div className="vitrines-home">{colecoes.map(c => <Vitrine key={c.slug} id={'vitrine-' + c.slug} titulo={c.nome} chamada={c.chamada} descricao={c.descricao} url={'/categoria/' + c.slug + '/'} itens={produtos.filter(p => p.colecao === c.slug)}/>)}</div>
    <section className="faixa-entrega" id="entrega">
      <div className="margem entrega-interna">
        <div><p className="sobretitulo">DO NOSSO ATELIÊ ATÉ VOCÊ</p><h2>Nossa entrega</h2><p>{loja.entrega}</p></div>
        <Pedido texto="Consultar entrega" classe="contorno"/>
      </div>
    </section>
    <section className="ocasioes margem" id="ocasioes">
      <div className="vitrine-topo"><div><p className="sobretitulo">FLORES POR OCASIÃO</p><h2>Para cada motivo de presentear</h2></div></div>
      <div className="ocasioes-grade">{ocasioes.map(o => <Link href={'/categoria/' + o.slug + '/'} className="ocasiao" key={o.slug}>
        <Image src={o.foto} alt="" fill sizes="(max-width: 760px) 48vw, 25vw"/>
        <div><h3>{o.nome}</h3><p>{o.descricao}</p><span>Ver flores <Icone nome="seta" size={17}/></span></div>
      </Link>)}</div>
    </section>
    <section className="atelier" id="atelier">
      <div className="atelier-foto"><Image src="/flores/atelier.webp" alt="Florista amarrando a fita de um buquê na bancada do ateliê" fill sizes="(max-width: 760px) 100vw, 50vw"/></div>
      <div className="atelier-texto"><p className="sobretitulo">{loja.nome}</p><h2>O cuidado começa na escolha das flores.</h2><p>{loja.sobre} Escolha pelo catálogo e conte pra gente como quer presentear.</p><Link className="botao destaque" href="/loja/">Conhecer a coleção <Icone nome="seta" size={17}/></Link></div>
    </section>
  </>;
}
