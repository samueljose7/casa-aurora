import type { Metadata } from 'next';
import { produtos } from '@/data/catalogo';
import { Catalogo } from '@/components/catalogo-view';

export const metadata: Metadata = { title: 'Nossa loja', description: 'Veja buquês, orquídeas, girassóis, rosas e presentes. Filtre a seleção e escolha suas flores.' };

export default function Loja() {
  return <>
    <div className="margem"><section className="banner-catalogo"><p className="sobretitulo">FLORES PARA CADA MOMENTO</p><h1>Nossa loja</h1><p>Encontre o presente certo pela flor, pela ocasião ou pelo preço.</p></section></div>
    <Catalogo itens={produtos}/>
  </>;
}
