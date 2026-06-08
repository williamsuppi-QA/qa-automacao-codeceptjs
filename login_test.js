Feature("Login");

Scenario("Login com sucesso", ({ I }) => {
    I.amOnPage('http://automationpratice.com.br');
    I.waitForVisible('a[href="/login"]', 10); // Espera até 10 segundos para o link ficar visível
    I.click('a[href="/login"]');
    I.waitForText('E-mail', 10); // Esta espera deve ser para o campo de e-mail na próxima página
    I.fillField('#user', 'will@yahoo.com.br');
    I.fillField('#password', '123456');
    I.click('#btnLogin');
    I.waitForText('Login realizado', 10);  // Verifica se a mensagem de boas-vindas aparece após o login bem-sucedido
}).tag('sucesso')

Scenario("Tentando logar digitando apenas o e-mail", ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')
    I.waitForVisible('a[href="/login"]', 10); // Espera até 10 segundos para o link ficar visível
    I.click('a[href="/login"]');
    I.waitForText('E-mail', 10); // Esta espera deve ser para o campo de e-mail na próxima página
    I.fillField('#user', 'will@yahoo.com.br');
    I.click('#btnLogin');
    I.waitForText('Senha inválida.', 10); // Verifica se a mensagem de boas-vindas aparece após o login bem-sucedido
   
}).tag('sem_senha')

Scenario("Tentando logar sem digitar e-mail e senha", ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')
    I.waitForVisible('a[href="/login"]', 10); // Espera até 10 segundos para o link ficar visível
    I.click('a[href="/login"]');
    I.waitForText('E-mail', 10); // Esta espera deve ser para o campo de e-mail na próxima página
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.', 10); // Verifica se a mensagem de boas-vindas aparece após o login bem-sucedido
   
}).tag('sem_email_senha') 

Scenario("Tentando logar digitando apenas a senha", ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')
    I.waitForVisible('a[href="/login"]', 10); // Espera até 10 segundos para o link ficar visível
    I.click('a[href="/login"]');
    I.waitForText('E-mail', 10); // Esta espera deve ser para o campo de e-mail na próxima página
    I.fillField('#password', '123456');
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.', 10); // Verifica se a mensagem de boas-vindas aparece após o login bem-sucedido
    
}).tag('sem_email') 