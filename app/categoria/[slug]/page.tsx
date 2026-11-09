import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { colecoes, ocasioes, produtos } from '@/data/catalogo';
import { Catalogo, SeletorColecao } from '@/components/catalogo-view';

const categorias = [...colecoes, ...ocasioes];
type Props = { params: Promise<{slug: string}> };
export function generateStaticParams() { return categorias.map(({slug}) => ({slug})); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categoria = categorias.find(c => c.slug === slug);
  return categoria ? { title: categoria.nome, description: categoria.descricao } : {};
}

export default async function Categoria({ params }: Props) {
  const { slug } = await params;
  const categoria = categorias.find(c => c.slug === slug);
  if (!categoria) notFound();
  const itens = produtos.filter(p => p.colecao === slug || p.ocasioes.includes(slug));
  return <>
    <div className="margem"><section className="banner-catalogo banner-colecao">
      <p className="sobretitulo">{'chamada' in categoria ? categoria.chamada : 'FLORES POR OCASIÃO'}</p>
      <h1>{categoria.nome}</h1><p>{categoria.descricao}</p>
      <span className="sobretitulo">{itens.length} {itens.length === 1 ? 'produto' : 'produtos'} na seleção</span>
      <SeletorColecao atual={slug}/>
    </section></div>
    <Catalogo itens={itens} colecaoFixa={slug}/>
  </>;
}
