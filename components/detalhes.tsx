'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type Produto } from '@/data/catalogo';
import { moeda } from '@/data/comercial';
import { loja } from '@/data/loja';
import { Icone } from './icones';
import { Pedido } from './pedido';

export function Detalhes({ produto, colecao }: { produto: Produto; colecao: string }) {
  const fotos = [produto.foto, ...(produto.fotosExtras ?? [])];
  const [foto, setFoto] = useState(0);
  const [cartao, setCartao] = useState('');

  return <div className="detalhe-layout">
    <div className="galeria">
      <div className="detalhe-foto"><Image src={fotos[foto]} alt={produto.nome} fill preload sizes="(max-width: 760px) 95vw, 48vw"/></div>
      {fotos.length > 1 && <div className="miniaturas">{fotos.map((url,i) => <button type="button" key={url} onClick={() => setFoto(i)} aria-label={'Mostrar foto ' + (i + 1)} aria-pressed={i === foto}><Image src={url} alt="" width={70} height={70}/></button>)}</div>}
    </div>
    <div className="detalhe-conteudo">
      <p className="sobretitulo">{colecao}</p>
      <h1>{produto.nome}</h1>
      <p className="detalhe-preco">{moeda(produto.preco)}</p>
      {loja.demonstracao && <p className="detalhe-nota">Preço ilustrativo</p>}
      <p className="detalhe-descricao">{produto.descricao}</p>
      <div className="entrega-info"><Icone nome="entrega" size={24}/><div><strong>Consulte a entrega</strong><p>{loja.entrega}</p></div></div>
      <details className="cartao-mensagem"><summary><Icone nome="caixa" size={19}/>Adicionar mensagem para o cartão<Icone nome="baixo" size={16}/></summary>
        <label><span>O que você quer escrever?</span><textarea rows={3} maxLength={300} value={cartao} onChange={e => setCartao(e.target.value)} placeholder="Escreva sua mensagem…"/></label>
      </details>
      <Pedido produto={produto} classe="principal detalhe-pedido" mensagemExtra={cartao}/>
      <p className="detalhe-nota">Disponibilidade e condições de entrega sob consulta.</p>
    </div>
  </div>;
}
