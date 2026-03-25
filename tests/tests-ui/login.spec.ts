import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { loginTestData } from '../testdata';
import { time } from 'node:console';

test.describe('Login Tests', () => {

  test('login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login(loginTestData.validUser.username, loginTestData.validUser.password);

    await expect(page).toHaveURL(/dashboard/);
  });

  test('login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login(loginTestData.invalidUser.username, loginTestData.invalidUser.password);
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });


  test('logout flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();  
    await loginPage.login(loginTestData.validUser.username, loginTestData.validUser.password);
    await loginPage.profileMenu.click();
    await loginPage.logoutButton.click(); 
      await expect(page.getByText('Invalid credentials')).toBeVisible();

  
  
});

});