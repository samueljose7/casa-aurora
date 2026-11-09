import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Detalhes } from '@/components/detalhes';
import { Vitrine } from '@/components/vitrine';
import { colecoes, produtos } from '@/data/catalogo';

type Props = { params: Promise<{slug: string}> };
export function generateStaticParams() { return produtos.map(({slug}) => ({slug})); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const produto = produtos.find(p => p.slug === slug);
  return produto ? { title: produto.nome, description: produto.descricao } : {};
}

export default async function Produto({ params }: Props) {
  const { slug } = await params;
  const produto = produtos.find(p => p.slug === slug);
  const colecao = colecoes.find(c => c.slug === produto?.colecao);
  if (!produto || !colecao) notFound();
  const url = '/categoria/' + colecao.slug + '/';
  const relacionados = produtos.filter(p => p.slug !== slug && p.colecao === produto.colecao);

  return <>
    <section className="detalhe margem">
      <nav aria-label="Caminho da página" className="breadcrumb">
        <Link href="/">Início</Link><span aria-hidden="true">/</span>
        <Link href="/loja/">Loja</Link><span aria-hidden="true">/</span>
        <Link href={url}>{colecao.nome}</Link>
      </nav>
      <Detalhes produto={produto} colecao={colecao.nome}/>
    </section>
    <Vitrine id="relacionados" titulo="Você também pode gostar" chamada="DA MESMA COLEÇÃO" descricao="Outras opções para presentear." url={url} itens={relacionados}/>
  </>;
}
