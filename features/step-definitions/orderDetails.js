import accountInfoPage from "../pageobjects/accountInfo.page";
import cartPage from "../pageobjects/cart.page";
import homepage from "../pageobjects/homepage.page";
import { Given, When, Then } from '@wdio/cucumber-framework';
import placeOrderPage from "../pageobjects/placeOrder.page";
let orderDetails;

Given(/^I am logged into my account$/, async () => {
    await homepage.goToHomePage();
    await homepage.loggedinUserCanAddItemToCart();
    await cartPage.navigateToCart();
    await placeOrderPage.enterUserDetails();
    await placeOrderPage.pressNext();
    await placeOrderPage.logCaptureOrderDetails();
    // Capture order details
    orderDetails = await placeOrderPage.captureOrderDetails();
    await placeOrderPage.placeOrder();
});

When(/^I open the details of the most recent order$/, async () => {
    await placeOrderPage.clickOnOrderID();
});

Then(/^I should see the order details matching my last placed order$/, async () => {
    // Go to the order page in the account
   // await accountInfoPage.checkOrderDetails();

    // Perform assertions with the captured order details
    await accountInfoPage.assertOnOrderDetails(orderDetails);
});
