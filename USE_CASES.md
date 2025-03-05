# Magento Test Site - Use Case Document

## Introduction
The Magento Test Site will be tested for critical e-commerce functionalities, excluding login and sign-up processes as per the assignment. This document outlines the use cases that will be automated using WebdriverIO and Cucumber.


### Add Product to Cart
Validate that users can add products to their shopping cart and view the cart.

### Preconditions:
- **User must be logged in.**

- **Test Steps**:
  1. Navigate to a product page.
  2. Select the product and add it to the cart.
  3. Verify that the product appears in the cart.
  4. Validate the cart total.

### Remove Product from Cart
Ensure that users can remove a product from the cart.
### Preconditions:
- **User must be logged in.**

- **Test Steps**:
  1. Navigate to the cart page.
  2. Select a product to remove.
  3. Verify that the product is removed from the cart.
  4. Validate the cart updates correctly.

### Checkout Process
Ensure users can proceed to checkout, enter shipping details, and confirm their order.
### Preconditions:
- **User must be logged in.**

- **Test Steps**:
  1. Navigate to the cart page and click the "Proceed to Checkout" button.
  2. Enter shipping and payment details.
  3. Confirm the order.
  4. Verify the order with generated order ID.
  
### Order History and Details Page
Ensure users can view their order history and see the details of their previous orders.
### Preconditions:
- **User must be logged in.**

- **Test Steps**:
  1. Navigate to the "Order History" page.
  2. Select an order to view the details.
  3. Verify that the correct order details are displayed (product name, quantity, price).

### Edit Account Information - Change Password
Ensure users can change their password, and that the session ends after the password change.
### Preconditions:
- **User must be logged in.**

- **Test Steps**:
  1. Navigate to the "Account Information" page.
  2. Enter the current password and the new password.
  3. Save changes.
  4. Verify that the password was updated successfully.