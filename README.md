# Dra. Jéssica Menegotto

Site de harmonização facial em Caxias do Sul, adaptado do projeto original Premium Vendas V4. Identidade em vinho, rosé e marfim; retratos reais; narrativa editorial; oito resultados com ampliação e comparação; agendamento por WhatsApp; navegação mobile; animações que respeitam a preferência por movimento reduzido e favicon JM.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

## Verificação

```sh
npm run typecheck
npm run build
```

## Vercel

Importe este repositório na Vercel. Framework: **Next.js**. Diretório raiz: **./**. Instalação: **npm ci**. Build: **npm run build**. Os demais padrões da Vercel são suficientes. Não há variáveis de ambiente obrigatórias nem dependências de Sites.

## Conteúdo

Dados e contatos estão em `data/site.ts`. Nome, atuação, localização e CRBM 6013 seguem a referência do Instagram fornecida pelo solicitante. O WhatsApp usa exatamente o número informado: **+55 54 9117-9646**. Não foram acrescentados endereço completo, formação, depoimentos ou procedimentos específicos não confirmados.

As 12 fotografias fornecidas foram convertidas para WebP sem retoques. O fundo e a fotografia do hero começam no topo da página, atrás da navegação transparente, sem recuo, faixa ou overlay exclusivo para o nav. No desktop, máscara e gradiente fazem a transição entre texto e fotografia; o rosto mantém as cores naturais. O conteúdo do hero conserva espaço abaixo da navegação, e a composição mobile usa regras próprias. A galeria preserva os originais e suporta comparativos lado a lado e empilhados.

O favicon está em `app/icon.svg`. A imagem OG fornecida pelo solicitante está em `app/opengraph-image.jpg`, otimizada para JPEG de 1200 × 630 px, com a composição integral preservada. O Next.js publica a imagem e seus metadados automaticamente; o texto alternativo está em `app/opengraph-image.alt.txt`.
