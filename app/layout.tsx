import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cabecalho, Marca } from '@/components/cabecalho';
import { Pedido } from '@/components/pedido';
import { loja } from '@/data/loja';
import './globals.css';

export const metadata: Metadata = {
  title: { default: loja.nome + ' | Flores & Presentes', template: '%s | ' + loja.nome },
  description: loja.sobre,
  robots: { index: !loja.demonstracao, follow: !loja.demonstracao },
  icons: { icon: '/flor.svg' },
  openGraph: { locale: 'pt_BR', type: 'website', title: loja.nome + ' | Flores & Presentes', description: loja.sobre },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const t = loja.tema;
  const tema = {
    '--marca': t.marca, '--marca-escura': t.marcaEscura, '--marca-clara': t.marcaClara,
    '--tinta': t.tinta, '--suave': t.suave, '--papel': t.papel, '--destaque': t.destaque,
    '--serif': t.fonteTitulo, '--sans': t.fonteTexto,
  } as CSSProperties;
  return <html lang="pt-BR" style={tema}><body>
    <a className="pular" href="#conteudo">Pular para o conteúdo</a>
    <Cabecalho/>
    <main id="conteudo">{children}</main>
    <footer className="rodape">
      <div className="rodape-grade margem">
        <div className="rodape-marca"><Marca/><p>{loja.sobre}</p></div>
        <div><h2>Nossas coleções</h2><Link href="/categoria/orquideas/">Orquídeas</Link><Link href="/categoria/buques/">Buquês</Link><Link href="/categoria/rosas/">Rosas</Link><Link href="/categoria/presentes/">Cestas e presentes</Link></div>
        <div><h2>Informações</h2><Link href="/#entrega">Como pedir e receber</Link><Link href="/#ocasioes">Flores por ocasiões</Link><Link href="/#atelier">Sobre a floricultura</Link><Link href="/loja/">Ver toda a loja</Link></div>
        <div><h2>Atendimento</h2><Pedido classe="rodape-whats" texto="Fale pelo WhatsApp"/>
          {loja.telefone && <p>{loja.telefone}</p>}{loja.horario && <p>{loja.horario}</p>}{loja.endereco && <p>{loja.endereco}</p>}{loja.regiao && <p>{loja.regiao}</p>}
          {loja.instagram && <a href={loja.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
        </div>
      </div>
      <div className="rodape-base margem"><span>© {new Date().getFullYear()} {loja.nome}</span>{loja.demonstracao && <span>Vitrine demonstrativa · Fotos e preços ilustrativos</span>}</div>
    </footer>
    <div className="flutuante"><Pedido texto="Peça pelo WhatsApp"/></div>
  </body></html>;
}
