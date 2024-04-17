import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
  test('Usuário deve conseguir fazer login com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Abrir a página de login
    await loginPage.open();

    // Realizar login com credenciais corretas
    await loginPage.login('sysadmin@qacoders.com', '1234@Test');

    // Verificar se há um token na resposta
    const response = await page.waitForResponse(response => response.url().includes('/login'));
    const responseBody = await response.json();
    const token = responseBody.token;
    expect(token).toBeDefined();

    // Verificar se a mensagem de sucesso é exibida corretamente
    const messageElement = await page.waitForSelector('.success-message');
    const messageText = await messageElement.textContent();
    expect(messageText).toContain('Olá Qa-Coders-SYSADMIN, autenticação autorizada com sucesso!');

    // Verificar se o usuário está logado
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeTruthy();
  });

  test('Deve exibir mensagem de erro ao fornecer senha incorreta', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Abrir a página de login
    await loginPage.open();

    // Realizar login com senha incorreta
    await loginPage.login('sysadmin@qacoders.com', 'senha_incorreta');

    // Verificar se a mensagem de erro é exibida corretamente
    const errorElement = await page.waitForSelector('.error-message');
    const errorText = await errorElement.textContent();
    expect(errorText).toContain('Senha incorreta');

    // Verificar se o usuário não está logado
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();
  });

  test('Deve exibir mensagem de erro ao fornecer e-mail incorreto', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Abrir a página de login
    await loginPage.open();

    // Realizar login com e-mail incorreto
    await loginPage.login('email_incorreto@qacoders.com', '1234@Test');

    // Verificar se a mensagem de erro é exibida corretamente
    const errorElement = await page.waitForSelector('.error-message');
    const errorText = await errorElement.textContent();
    expect(errorText).toContain('E-mail incorreto');

    // Verificar se o usuário não está logado
    const isLoggedIn = await loginPage.isLoggedIn();
    expect(isLoggedIn).toBeFalsy();
  });
});
