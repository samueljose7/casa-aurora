# Casa Aurora · Flores & Presentes

Template mestre de floricultura. A vitrine demonstra um catálogo de 24 produtos com preços em reais e pedidos pelo WhatsApp. O projeto usa Next.js, React, TypeScript e Tailwind CSS. A saída é estática e roda sem banco de dados.

## Executar

Use Node.js 22 ou superior.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Para gerar a versão de produção, execute `npm run build`. A saída está em `out/`.

## Personalizar uma floricultura

1. Faça uma cópia do template mestre.
2. Em `data/loja.ts`, altere nome, slogan, descrição, cores e fontes. Se tiver um logotipo, coloque-o em `public/` e preencha `logo` com seu caminho público.
3. No mesmo arquivo, preencha os campos de contato, horário, endereço, região, redes sociais e entrega. Campos opcionais vazios ficam ocultos no rodapé.
4. Em `data/catalogo.ts`, ajuste coleções, ocasiões, banners, produtos e a ordem de exposição. Cada produto precisa de um `slug` único, uma coleção existente, pelo menos uma foto e um preço inteiro em centavos. Use `fotosExtras` quando houver mais ângulos. Use `disponivel: false` para desativar o pedido de um item.
5. Guarde fotos próprias ou licenciadas em `public/flores/`. Prefira WebP otimizado. As fotos demonstrativas deste projeto são imagens originais geradas por IA, armazenadas localmente.
6. Configure `whatsapp` com o número autorizado da floricultura, em dígitos e com código do país e DDD. Em `origem`, informe a URL pública do site para anexar links dos produtos às mensagens. Depois de revisar a versão comercial, altere `demonstracao` para `false`.

### Como funciona o pedido

O botão do card e o da página de produto usam o nome e o preço do mesmo registro de catálogo. Na página individual, a mensagem opcional do cartão segue junto. Com o número configurado, o botão abre o WhatsApp com a mensagem preenchida. Na demo sem número, o botão exibe uma prévia copiável dentro do site. Nenhuma mensagem é enviada automaticamente.

## Publicar na Vercel

1. Envie o conteúdo deste projeto para um novo repositório GitHub, incluindo `package-lock.json`.
2. Importe o repositório na Vercel e selecione **Next.js** como framework.
3. Use `npm run build` e configure o diretório de saída como `out`.
4. Valide a loja e o pedido pelo WhatsApp com um número autorizado antes de compartilhar a versão da floricultura.

As rotas são geradas no build. Alterações no catálogo e na identidade precisam de um novo deploy.

## Estrutura

- `app/` contém início, loja, categorias, produtos e página 404.
- `components/` contém cabeçalho, carrosséis, catálogo, detalhes e pedido.
- `data/` centraliza marca, conteúdo, catálogo, preço e WhatsApp.
- `public/` contém imagens, fontes e ícone.
