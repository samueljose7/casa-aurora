'use client';

import { useRef, useState } from 'react';
import type { Produto } from '@/data/catalogo';
import { mensagemPedido, urlWhatsApp } from '@/data/comercial';
import { loja } from '@/data/loja';
import { Icone } from './icones';

export function Pedido({ produto, classe = '', texto = 'Pedir pelo WhatsApp', mensagemExtra = '' }: {
  produto?: Produto; classe?: string; texto?: string; mensagemExtra?: string;
}) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const [copiado, setCopiado] = useState(false);
  const mensagem = mensagemPedido(produto) + (mensagemExtra.trim() ? '\nMensagem para o cartão: ' + mensagemExtra.trim() : '');
  const url = urlWhatsApp(mensagem);

  if (produto && !produto.disponivel) return <span className={'botao indisponivel ' + classe}>Indisponível</span>;
  if (url) return <a className={'botao ' + classe} href={url} target="_blank" rel="noopener noreferrer"><Icone nome="whats"/>{texto}</a>;

  return <>
    <button type="button" className={'botao ' + classe} onClick={() => {
      setCopiado(false);
      dialogo.current?.showModal();
    }}><Icone nome="whats"/>{texto}</button>
    <dialog ref={dialogo} className="pedido-dialogo" aria-label={loja.demonstracao ? 'Prévia do pedido' : 'Atendimento'}>
      <div className="dialogo-topo"><span className="sobretitulo">{loja.demonstracao ? 'VITRINE DEMONSTRATIVA' : 'ATENDIMENTO'}</span>
        <form method="dialog"><button className="botao-icone" aria-label="Fechar"><Icone nome="fechar"/></button></form>
      </div>
      <h2>{loja.demonstracao ? 'Seu pedido pelo WhatsApp' : 'Contato em configuração'}</h2>
      <p>{loja.demonstracao ? 'Veja a mensagem que o cliente enviaria à floricultura.' : 'O número de WhatsApp da loja está em configuração. Você pode copiar os dados abaixo.'}</p>
      <textarea aria-label="Mensagem do pedido" readOnly rows={5} value={mensagem}/>
      <button type="button" className="botao principal" onClick={async () => {
        try { await navigator.clipboard.writeText(mensagem); setCopiado(true); }
        catch { dialogo.current?.querySelector('textarea')?.select(); }
      }}>{copiado ? 'Mensagem copiada' : 'Copiar mensagem'}</button>
    </dialog>
  </>;
}
