import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { PimPage } from '../../pages/pimPage';
import { loginTestData } from '../testdata';

test('Add Employee Test', async ({ page }) => {

  const login = new LoginPage(page);
  const pim = new PimPage(page);

  await login.navigateToLoginPage();
  await login.login(loginTestData.validUser.username, loginTestData.validUser.password);

  await pim.navigateToPIM();
  await pim.clickAddEmployee();

  const fname = `Swaraj${Date.now()}`;
  const lname = 'Patil';

  await pim.addEmployee(fname, lname);

  await expect(page.locator('input[name="firstName"]')).toHaveValue(fname);

await pim.goToEmployeeList();
  await pim.searchEmployeeByName(fname);
await expect(page.getByText(fname)).toBeVisible();
await expect(page.getByText(lname)).toBeVisible();

 await pim.editEmployee('UpdatedLastName'); 

  await expect(page.getByText('UpdatedLastName')).toBeVisible(); 

  await pim.deleteEmployee(); 

  await expect(page.getByText(fname)).toHaveCount(0); 
});

