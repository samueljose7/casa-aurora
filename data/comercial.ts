import { loja } from './loja';
import type { Produto } from './catalogo';

export function moeda(centavos: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(centavos / 100);
}

export function urlProduto(slug: string) {
  return '/produto/' + slug + '/';
}

export function mensagemPedido(produto?: Produto) {
  if (!produto) return 'Olá! Vi o catálogo da ' + loja.nome + ' e gostaria de ajuda para escolher um presente.';
  const link = loja.origem ? '\n' + new URL(urlProduto(produto.slug), loja.origem).href : '';
  return 'Olá! Vi no site o produto ' + produto.nome + ', no valor de ' + moeda(produto.preco) +
    ', e gostaria de confirmar a disponibilidade e combinar a entrega.' + link;
}

export function urlWhatsApp(mensagem: string) {
  const telefone = loja.whatsapp.replace(/\D/g, '');
  return /^\d{10,15}$/.test(telefone) ? 'https://wa.me/' + telefone + '?text=' + encodeURIComponent(mensagem) : '';
}

export function normalizarBusca(texto: string) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
