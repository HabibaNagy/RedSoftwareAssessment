# Magento Test Site Automation

This repository contains the automation tests for a Magento test site, built using WebdriverIO and Cucumber. The primary objective is to automate critical functionalities on the site to ensure they work as expected.

## Test Framework
- **Language**: JavaScript
- **Test Framework**: WebdriverIO with Cucumber
- **Reporting**: Allure for detailed test reports and logs
- **Logging**: Built-in logging mechanism to capture test execution details
## Framework Structure
### Uses best practices for WebdriverIO with Cucumber, ensuring scalability.

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v22.14.0 )
- **npm** (v10.9.2 )
  
## Code Modularity
### Uses Page Object Model (POM) to create reusable components.

### 1. Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/HabibaNagy/RedSoftwareAssessment.git
```
### 2. Install the latest version of WebdriverIO & select cucumber and allure report
```bash
npm init wdio@latest
```
### 3. Run the Tests
```bash
npx wdio wdio.conf.js --clean
```
## Sample test Report 
```bash
------------------------------------------------------------------
[chrome 133.0.6943.99 windows #0-4] Running: chrome (v133.0.6943.99) on windows
[chrome 133.0.6943.99 windows #0-4] Session ID: 3918ea239824b1233e60272512148841
[chrome 133.0.6943.99 windows #0-4]
[chrome 133.0.6943.99 windows #0-4] » \features\removeItemFromCart.feature
[chrome 133.0.6943.99 windows #0-4] Verify that user can remove item from cart
[chrome 133.0.6943.99 windows #0-4] as a user, i can remove item from cart
[chrome 133.0.6943.99 windows #0-4]    ✓ Given i'm on the homepage
[chrome 133.0.6943.99 windows #0-4]    ✓ When navigate to cart and remove item
[chrome 133.0.6943.99 windows #0-4]    ✓ Then cart should be empty
[chrome 133.0.6943.99 windows #0-4]
[chrome 133.0.6943.99 windows #0-4] 3 passing (1m 11.5s)


Spec Files:      5 passed, 5 total (100% completed) in 00:06:59
```
## For a more detailed breakdown of test trends, steps, and screenshots, refer to the **Allure Report**.

### **Generate Allure Report**
```bash
npx allure generate allure-results
allure serve allure-results
```

### 4. Test Scenarios
## Use Case Selection
This project focuses on automating the most critical functionalities of the Magento test site. These include but are not limited to:

### Add Product to Cart
Validate that users can add products to their shopping cart and view the cart.

### Remove the product from Cart
Ensure that users can remove a product from the cart.
##
### Checkout Process
Ensure users can proceed to checkout, enter shipping details, and confirm their order.
##
### Order History and Details Page
Ensure users can view their order history and see the details of their previous orders.
##
### Edit Account Information - Change Password
Ensure users can change their password, and that the session ends after the password change.
##
Documentation of Use Cases
For detailed information about the use cases automated for this project, please refer to the USE_CASES.md document.
