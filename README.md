# Projeto de Automação de Testes com Playwright

Este projeto visa automatizar testes de API utilizando o framework Playwright, mantendo uma estrutura organizada e seguindo boas práticas de desenvolvimento.

## Project Structure

```
- src/
  - config/
    - credentials.ts
  - requests/
    - loginRequests.ts
  - tests/
    - loginTest.spec.ts
  - utils/
    - helpers/
      - dataHelper.ts
```

## config/

Neste diretório estão as credenciais relacionadas à API.

## requests/

Neste diretório estão as requests de cada endponit.

## tests/

Neste diretório estão os testes relacionados à cada endpoint da API.

## utils/

Neste diretório estão as utilidades compartilhadas entre os testes.

helpers/: Contém funções auxiliares para simplificar tarefas repetitivas.

## Padrão de Arquitetura

Para organizar o código de forma eficiente e melhorar a manutenibilidade, este projeto utiliza o padrão Page Object para a automação de testes de front-end. Cada página da aplicação é representada por uma classe, encapsulando os elementos e comportamentos relacionados a essa página.

## Prerequisitos

Certifique-se de ter instalado os seguintes pré-requisitos antes de executar os testes:

### 02 Instalar o Playwrite

```bash
npm install playwright
```

### 03 Instalar Dependências

```bash
npm install
```

### 04 Executando os Testes com Playwrite

```bash
    npx playwright test
```

## Contribution

Este projeto é destinado ao estudo e aprendizado do Playwright. Contribuições são bem-vindas, especialmente através de comentários que possam ajudar a melhorar o código, corrigir erros ou adicionar novas funcionalidades.

Se você encontrar algum problema ou tiver sugestões para melhorar este projeto, sinta-se à vontade para deixar um comentário no código ou abrir uma nova issue.

Obrigado por contribuir para tornar este projeto melhor para todos!

## Contact

Você pode me encontrar no LinkedIn: https://www.linkedin.com/in/luiz-eduardo-testa-38727b226/ para qualquer dúvida, sugestão ou feedback relacionado a este projeto. Estou sempre aberto a troca de ideias e colaboração!
