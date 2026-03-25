# Trumio_QA_Assessment
Trumio QA Assessment : UI + API Automation
# Trumio QA Technical Assessment

## Overview
This repository contains the complete QA assessment for Trumio including:

- UI Automation for OpenHRM (https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- API Automation for Swagger Pet Store (https://petstore.swagger.io/)
- Centralized test data in `data/TestData.ts`
- Test execution reports under `reports/` folder

## UI Automation Scenarios
1. Validate Login and Logout workflows
2. Automate Employee Creation under PIM module
3. Verify created employee record (search/filter by Employee Name, ID, Job Title)
4. Submit and validate employee personal details
5. Edit employee details
6. Delete employee record

- Positive & negative test scenarios covered
- Error handling, success/error validation implemented
- One UI test may occasionally fail due to dynamic OpenHRM demo behavior

## API Automation Scenarios
- Pet Endpoints: Add, Update, Find by ID, Delete
- Store Endpoints: Place order, Find order by ID, Delete order
- Positive & negative scenarios covered
- Proper assertions and error handling implemented

## How to Run
1. Install dependencies:  
```bash
npm install
npx playwright test

## Show Report
npx playwright show-report


