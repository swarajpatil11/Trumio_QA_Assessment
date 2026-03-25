import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class PimPage extends BasePage {

  readonly pimMenu: Locator;
  readonly addEmployeeBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly saveBtn: Locator;

    readonly employeeListMenu: Locator;
  readonly searchInput: Locator;
  readonly searchBtn: Locator;
  readonly table: Locator;

  readonly editIcon: Locator;        
  readonly checkbox: Locator;        
  readonly deleteBtn: Locator;       
  readonly confirmDeleteBtn: Locator;



  constructor(page: Page) {
    super(page);

    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.addEmployeeBtn = page.locator('button:has-text("Add")').first();
    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');
    this.saveBtn = page.locator('button[type="submit"]');

     this.employeeListMenu = page.getByRole('link', { name: 'Employee List' });
    this.searchInput = page.getByPlaceholder('Type for hints...').first();
    this.searchBtn = page.getByRole('button', { name: 'Search' });
    this.table = page.locator('.oxd-table');
      this.editIcon = page.locator('.bi-pencil-fill');          
    this.checkbox = page.locator('.oxd-checkbox-input');      
    this.deleteBtn = page.getByRole('button', { name: 'Delete Selected' }); 
    this.confirmDeleteBtn = page.getByRole('button', { name: 'Yes, Delete' }); 
    

  }

  async navigateToPIM() {
      await this.pimMenu.waitFor({ state: 'visible' });
    await this.pimMenu.click();
  await this.page.getByRole('heading', { name: 'PIM' }).waitFor();


  }

  async clickAddEmployee() {
      await this.addEmployeeBtn.waitFor({ state: 'visible' });
    await this.addEmployeeBtn.click();
      await this.page.getByRole('heading', { name: 'Add Employee' }).waitFor();

  }

async addEmployee(fname: string, lname: string) {
  await this.firstName.fill(fname);
  await this.lastName.fill(lname);
  await this.saveBtn.click();
  await this.page.locator('input[name="firstName"]').waitFor();
}
   
    async goToEmployeeList() {
          await this.employeeListMenu.waitFor({ state: 'visible' });
    await this.employeeListMenu.click();
  }

async searchEmployeeByName(name: string) {
  await this.searchInput.fill(name);
  const suggestion = this.page.locator('.oxd-autocomplete-option').first();
  await suggestion.waitFor({ state: 'visible' });
  await suggestion.click();
await this.searchBtn.click();
  await this.page.waitForTimeout(2000);
}
  async editEmployee(newLastName: string) {
    await this.editIcon.first().click();

    const lastNameInput = this.page.locator('input[name="lastName"]');

    await lastNameInput.fill(newLastName);
    await this.saveBtn.click();

    await this.page.waitForTimeout(2000);
  }

 async deleteEmployee() {
    await this.checkbox.first().click(); 
    await this.deleteBtn.click();        
    await this.confirmDeleteBtn.click();

    await this.page.waitForTimeout(2000);
  }


}