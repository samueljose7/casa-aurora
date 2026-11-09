import Link from 'next/link';

export default function NotFound() {
  return <section className="sem-resultados margem"><p className="sobretitulo">PÁGINA INDISPONÍVEL</p><h1>Essa flor saiu da vitrine.</h1><p>Veja as outras opções no catálogo.</p><Link className="botao principal" href="/loja/">Voltar para a loja</Link></section>;
}
