import{Page,Locator} from '@playwright/test'
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;    
    readonly profileMenu: Locator;
    readonly logoutButton: Locator;
    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.profileMenu=page.getByAltText('profile picture');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });

    }
     
    async navigateToLoginPage() {
        await this.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }   

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }
}