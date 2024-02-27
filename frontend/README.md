# Itau Secure Pass

Esta interface integra uma api afim de validar senhas, com os seguintes requisitos:

- Nove ou mais caracteres
- Ao menos 1 dígito
- Ao menos 1 letra minúscula
- Ao menos 1 letra maiúscula
- Ao menos 1 caractere especial (!@#$%^&\*()-+)
- Não possuir caracteres repetidos dentro do conjunto
- Não contar espaços em branco como caracteres válidos

## Como Executar o Projeto

1. Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.
2. Execute o comando `npm install` para instalar as dependências.
3. Execute o comando `npm start` para iniciar o servidor localmente.
4. Abra o navegador e acesse `http://localhost:4200`.

## Detalhes sobre a Solução

A implementação utiliza o framework Angular JS para criar o App em Node.js.
O componente do teste está na pasta `password-test`.

## Tecnologias Utilizadas

- Angular
- TypeScript
- Reactive Forms (Para manipulação de formulários)
- HttpClient (Para fazer chamadas HTTP)
- RxJS (Para programação reativa)
- Jasmine e Karma (Para testes unitários)

## Estrutura do Projeto

O projeto segue uma arquitetura modular e componentizada para facilitar a manutenção e expansão. A estrutura está organizada da seguinte forma:

- **src**
  - **app**
    - **password-test** (Módulo do componente de teste de senha)
      - **password-test.component.ts** (Componente principal do formulário)
      - **password-test.component.html** (Template HTML do componente)
      - **password-test.component.less** (Estilos do componente)
    - **services** ( Módulo do componente de integração com serviços)
      - **password-test.service.ts** (Serviço para interagir com a API de validação de senhas)
      - **password-model.ts** (Modelo de dados para representar a resposta da API)
  - **app.module.ts** (Módulo principal do Angular)

### Clean Code

O código foi organizado de maneira clara e legível, seguindo as melhores práticas de codificação.

## Racional nas Decisões

- **Travamento nas rotas:** A decisão de travar as rotas para sempre exibir o formulário de validação foi tomada para simplificar a experiência de teste e focar na funcionalidade principal. Isso permite uma interação direta sem a necessidade de navegação complexa entre diferentes partes da aplicação.
- **Interface Básica no figma:** Utilizei o Figma para criar uma interface básica e visualmente agradável para o teste. Isso não apenas proporciona uma experiência mais amigável, mas também serve como um guia visual para a implementação do componente.
- **Não divisão do Componente:** Decidi não dividir o componente password-test em smart/dumb, pois é uma funcionalidade única. Entretanto, reconheço que, à medida que a aplicação cresce, essa divisão pode ser benéfica. Uma proposta de divisão seria criar password-test.container para a lógica de formulários e password-test.presentation para a renderização da interface.

## Premissas Assumidas

- **Fluxo Simples de Validação**: Partindo do princípio de ser uma funcionalidade única, assumi um fluxo simples de validação de formulário por meio de uma API, mantendo o escopo do teste focado e direto.
