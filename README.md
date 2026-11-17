# BoraVan — Site institucional

Site de um Trabalho de Conclusão de Curso sobre uma proposta de aplicativo de gerenciamento de transporte escolar. Desenvolvido com HTML5, CSS3 e JavaScript puro, sem frameworks, instalação de pacotes ou compilação.

## Executar no VS Code

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**, de Ritwick Dey.
3. Clique com o botão direito em `index.html` e selecione **Open with Live Server**.

Também é possível abrir `index.html` diretamente no navegador. Para usar um servidor com Python, execute `python3 -m http.server 8000` nesta pasta e acesse `http://localhost:8000`.

## Estrutura

```text
site-institucional/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── fonts/
│   │   ├── inter-latin.woff2
│   │   └── OFL.txt
│   └── images/
│       └── favicon.svg
└── README.md
```

## Conteúdo e manutenção

- **Identidade:** a assinatura `.brand` no cabeçalho e no rodapé usa a apresentação da imagem BoraVan enviada: BORA branco e VAN amarelo, em caixa alta, negrito e itálico sobre marinho. É uma adaptação tipográfica em HTML/CSS, não o arquivo original da logo. A imagem estava visível na conversa, sem arquivo disponível no checkout; a fonte é uma aproximação visual da referência. O tema escuro utiliza os tons de referência fornecidos no briefing, centralizados em `:root`: marinho principal `#041E42`, secundário `#082B57`, superfície `#123D70`, amarelo `#FFCC00`, hover `#FFE066`, branco e branco suavizado `#F1F5F9`. Substitua a assinatura pelo arquivo original quando ele estiver disponível em `assets/images`, preservando o texto alternativo BoraVan e suas proporções. O amarelo aparece nos destaques, ícones e estados ativos; os textos usam branco e tons claros sobre superfícies azuis. A moldura do smartphone mantém a cor anterior em `--device-frame`.
- **Smartphone:** estrutura independente em `.device-stage`, com moldura `.smartphone` e tela `.smartphone-screen`. A tela está totalmente branca e vazia por requisito desta etapa. Não há interfaces, ícones ou textos internos. Quando autorizado, insira imagens reais somente em `.smartphone-screen`. O alto-falante fica na moldura externa.
- **Recursos e etapas:** os quatro pilares e as quatro etapas são apresentados como propostas previstas, sem prometer um aplicativo público ou recursos já validados. A presença é considerada por padrão; os responsáveis poderão informar ausências. Os textos ficam em `index.html`.
- **Equipe:** os quatro nomes fornecidos são Luiz Henrique, Gabriel Notari, Kaique e Pedro Zoilo. A grafia e a composição oficial precisam ser confirmadas antes da publicação definitiva. Não foram criados cargos, fotografias, biografias ou responsabilidades individuais; os espaços de fotografia continuam reservados.
- **Sobre:** apresenta motivação, propósito, missão, visão e valores, com uma menção às diretrizes planejadas de segurança e privacidade. Não declara mecanismos implementados, proteção integral ou conformidade certificada com a LGPD.
- **Ano:** `js/script.js` atualiza o copyright com o ano do navegador.

## Comportamento

Cabeçalho fixo com sombra ao rolar, navegação por âncoras, menu responsivo até 1000 px, fechamento por seleção, Escape ou clique externo, foco visível, indicação da seção ativa e animações discretas. A preferência `prefers-reduced-motion` desativa animações e rolagem suave. O conteúdo permanece visível sem JavaScript; em telas pequenas, o menu interativo requer JavaScript.

A fonte Inter é servida localmente e licenciada sob a SIL Open Font License, incluída em `assets/fonts/OFL.txt`. O site não utiliza analytics, formulários, cookies, rastreamento ou serviços externos.

## Publicação

Os arquivos da raiz podem ser servidos em qualquer hospedagem estática. A pasta `.openai` contém apenas a configuração de hospedagem do Sites, sem credenciais. A saída `dist/` é uma cópia dos arquivos públicos para essa hospedagem e é ignorada pelo Git. Não é necessária para uso no Live Server.

## Pendências de conteúdo

Confirmar a grafia dos nomes e a composição oficial da equipe; incorporar o arquivo original da logo quando disponível; verificar a implementação real das funcionalidades e dos mecanismos de segurança antes de mudar a linguagem de proposta para produto disponível.

## Verificação manual

- Confira desktop, tablet e celular, incluindo 320 px de largura.
- Navegue pelos links do cabeçalho e do rodapé.
- No celular, abra e feche o menu, selecione um link e teste Escape.
- Use Tab para verificar foco e navegação por teclado.
- Ative a preferência de movimento reduzido no sistema.
- Confirme que a tela do smartphone continua branca, vazia e proporcional.
