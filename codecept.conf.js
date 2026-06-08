exports.config = {
  tests: './login_test.js', // Aponta diretamente para o seu arquivo de teste na raiz
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpratice.com.br', // URL base do seu teste
      show: true,
      browser: 'chromium',
    }
  },
  include: {
    I: './steps_file.js' // Aponta para o steps_file.js na raiz
  },
  bootstrap: null,
  mocha: {},
  name: 'Projeto2'
};