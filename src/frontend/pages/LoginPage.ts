export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://automacao.qacoders-academy.com.br/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('//input[contains(@id,"email")]', email);
    await this.page.fill('//input[contains(@id,"password")]', password);
    await this.page.click('//button[contains(@id,"login")]');
  }

  async isLoggedIn() {
    // Verificar se o usuário está logado
    // Verificar se a URL atual é a URL da página de destino após o login
    return this.page.url() === 'https://automacao.qacoders-academy.com.br/home';
  }

  // Outros métodos e propriedades relevantes para a página de login
}
