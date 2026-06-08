# QA Automação com CodeceptJS

Projeto de automação de testes de interface utilizando **CodeceptJS** com **Playwright**, focado na funcionalidade de **Login** do site de exemplo:

http://automationpratice.com.br

## Tecnologias utilizadas

- Node.js
- CodeceptJS
- Playwright
- Git / GitHub

## Estrutura do projeto

Principais arquivos:

- `codecept.conf.js` – Configuração do CodeceptJS e do helper Playwright
- `login_test.js` – Cenários de teste de login
- `steps_file.js` – Arquivo padrão de steps do CodeceptJS
- `package.json` – Dependências e scripts do projeto

O projeto **não** versiona:

- `node_modules/`
- `output/` (screenshots, vídeos, relatórios)

Esses diretórios estão ignorados no `.gitignore`.

## Cenários automatizados

Arquivo: `login_test.js`

### 1. Login com sucesso

Valida que o usuário consegue realizar login com credenciais válidas.

**Fluxo automatizado (CodeceptJS):**

```text
Login --
C:\Users\willi\Desktop\QA William\QAzando Cursoi\Projeto2\login_test.js
  Login com sucesso
  Scenario()
    I am on page "http://automationpratice.com.br"
    I wait for visible "a[href="/login"]", 10
    I click "a[href="/login"]"
    I wait for text "E-mail", 10
    I fill field "#user", "will@yahoo.com.br"
    I fill field "#password", "123456"
    I click "#btnLogin"
    I wait for text "Login realizado", 10
  √ OK in 2189ms
```

### 2. Tentativa de login apenas com e-mail

Valida que o sistema não permite login apenas com e-mail e exibe a mensagem de erro adequada.

```text
  Tentando logar digitando apenas o e-mail
  Scenario()
    I am on page "http://automationpratice.com.br"
    I wait for visible "a[href="/login"]", 10
    I click "a[href="/login"]"
    I wait for text "E-mail", 10
    I fill field "#user", "will@yahoo.com.br"
    I click "#btnLogin"
    I wait for text "Senha inválida.", 10
  √ OK in 1603ms
```

### 3. Tentativa de login sem e-mail e senha

Valida que, ao tentar logar sem preencher nenhum campo, o sistema exibe mensagem de e-mail inválido.

```text
  Tentando logar sem digitar e-mail e senha
  Scenario()
    I am on page "http://automationpratice.com.br"
    I wait for visible "a[href="/login"]", 10
    I click "a[href="/login"]"
    I wait for text "E-mail", 10
    I click "#btnLogin"
    I wait for text "E-mail inválido.", 10
  √ OK in 1227ms
```

### 4. Tentativa de login apenas com senha

Valida que, ao tentar logar informando somente a senha, o sistema exibe mensagem de e-mail inválido.

```text
  Tentando logar digitando apenas a senha
  Scenario()
    I am on page "http://automationpratice.com.br"
    I wait for visible "a[href="/login"]", 10
    I click "a[href="/login"]"
    I wait for text "E-mail", 10
    I fill field "#password", "123456"
    I click "#btnLogin"
    I wait for text "E-mail inválido.", 10
  √ OK in 1499ms
```

**Resumo da execução:**

```text
  OK  | 4 passed   // 7s
```

## Como rodar o projeto

### Pré-requisitos

- Node.js instalado (versão LTS recomendada)
- npm configurado

### Instalação

```bash
npm install
```

### Execução dos testes

```bash
npx codeceptjs run --steps
```

## Evidências de testes

- Em caso de falha, o CodeceptJS gera **screenshots** e **vídeos** na pasta `output/`.
- Os arquivos `.webm` podem ser convertidos para `.mp4` para facilitar visualização e anexos em ferramentas como Jira.
