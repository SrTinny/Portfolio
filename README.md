# Tinny DEV — Portfólio (João Victor Duarte)

Uma aplicação de portfólio pessoal construída com React + Vite para apresentar projetos, habilidades e informações de contato de forma responsiva e acessível.

## Visão geral

Este repositório contém um site single-page moderno que usa componentes React organizados por responsabilidade e CSS Modules para estilo local. O projeto privilegia performance, animações simples (AOS) e um carrossel de projetos baseado em Swiper.

Tech stack principal:
- React 18
- Vite
- Swiper (carrossel)
- AOS (animações)
- bootstrap-icons

## Rápido: rodando localmente

Requisitos: Node.js (≥16), npm

Instalação e execução em desenvolvimento:

```powershell
npm install
npm run dev
```

Build de produção:

```powershell
npm run build
npm run preview
```

O servidor de desenvolvimento do Vite normalmente roda em http://localhost:5173.

## Estrutura do projeto

- `index.html` — entry HTML que carrega `src/main.jsx`.
- `src/main.jsx` — ponto de montagem do React e `BrowserRouter`.
- `src/App.jsx` — composição das seções (Header, Home, Skills, About, Portfolio, ContactForm, Footer) e inicialização de AOS.
- `src/components/*` — componentes organizados por pasta, cada um com `*.module.css` quando aplicável.
- `src/hooks/useThemeToggle.js` — hook simples para persistir tema (localStorage + classe `light-mode`).
- `public/assets/` — imagens e recursos estáticos referenciados via `/assets/`.

## Convenções e boas práticas do repositório

- Estilo: CSS Modules (importado como `styles`) em componentes. Preserve nomes de classes usados no JSX.
- Assets estáticos: use caminhos do tipo `/assets/<nome>` (pasta `public/assets`) para evitar problemas de bundling.
- Animações: AOS é inicializado em `App.jsx`. Alterações nas configurações de AOS devem ser testadas visualmente.
- Carrossel: `src/components/Portfolio/Portfolio.jsx` usa Swiper com módulos `Autoplay` e `Navigation`. Não remova os imports de `swiper/css` e `swiper/css/navigation`.

## Desenvolvimento rápido — tarefas comuns

- Adicionar um novo projeto ao carrossel: editar a lista `projetos` em `src/components/Portfolio/Portfolio.jsx` adicionando um objeto com `titulo`, `imagem`, `descricao` e `link`.
- Ajustar tema: atualizar `src/hooks/useThemeToggle.js` (ou `scripts.js` se fizer fallback) — tema é salvo em `localStorage` com a chave `theme`.

## Deploy

O site é estático e pode ser hospedado em plataformas como Vercel, Netlify ou GitHub Pages. Faça o `npm run build` e envie a pasta `dist` para o provedor.

## Como contribuir

1. Fork e clone este repositório.
2. Crie uma branch com um nome descritivo: `feature/nome-da-feature` ou `fix/descrição`.
3. Execute alterações localmente e verifique visualmente.
4. Abra um Pull Request descrevendo a mudança e os passos para testar.

## Contato

- Instagram: @sr.tinny — https://www.instagram.com/sr.tinny/
- LinkedIn: João Victor Duarte — https://www.linkedin.com/in/joao-victor-duarte-0b0bbb240/
- GitHub: SrTinny — https://github.com/SrTinny

