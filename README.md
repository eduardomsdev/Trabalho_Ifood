# 🍔 iFood: Empreendedorismo, Inovação e Agilidade

Apresentação interativa desenvolvida para o trabalho da disciplina **Empreendedorismo e Metodologias Ágeis**, com o **iFood** como estudo de caso.

Em vez de um PowerPoint tradicional, o trabalho foi construído como um site/apresentação navegável, com animações, uma linha do tempo interativa, um mapa animado da jornada de um pedido e um desafio para a turma resolver ao vivo.

## ✨ O que tem na apresentação

| # | Slide | Descrição |
|---|-------|-----------|
| 1 | Capa | Abertura com animação de pedido saindo do restaurante até a casa |
| 2 | O que é o iFood | Diagrama interativo cliente → iFood → restaurante → entregador |
| 3 | História | Linha do tempo clicável, de 2011 até hoje |
| 4 | A jornada do pedido | Mapa estilizado com entregador se movendo em tempo real |
| 5 | Por que é sucesso | Cards com os fatores que explicam o crescimento |
| 6 | Empreendedorismo | Conceitos de empreendedorismo aplicados ao caso |
| 7 | Metodologias ágeis | Ciclo ágil animado + squads vs. modelo em cascata |
| 8 | Desafio interativo | A turma escolhe uma solução e vê a consequência |
| 9 | Síntese do grupo | Principais aprendizados e recomendação |
| 10 | Fontes | Todas as referências usadas, com links clicáveis |

## 🚀 Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## 🎤 Como apresentar em sala

- Clique em **"Começar apresentação"** na tela inicial.
- Navegue com as setas **← →** do teclado, a **barra de espaço**, ou os botões na tela.
- Clique no ícone de tela cheia (canto inferior direito) para o modo projetor.
- Os pontinhos no canto inferior esquerdo pulam direto para qualquer slide.

## 🛠️ Tecnologias usadas

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) para as animações
- [Lucide Icons](https://lucide.dev/)

## 📁 Estrutura do projeto

```
src/
├── components/       # Um arquivo por slide (SlideCapa, SlideTimeline, ...)
├── data/
│   └── content.js    # Todo o conteúdo factual e a lista de fontes
├── App.jsx           # Navegação, teclado, barra de progresso, tela cheia
└── index.css         # Fontes e estilos globais
```

## 📚 Fontes

Todas as informações apresentadas (datas, fundadores, investimentos, dados de
mercado) foram pesquisadas em fontes oficiais e confiáveis — iFood
Institucional, Exame, FIAP e Consumidor Moderno. A lista completa, com links,
está no último slide da apresentação.

---

Trabalho da disciplina de Empreendedorismo e Metodologias Ágeis.
