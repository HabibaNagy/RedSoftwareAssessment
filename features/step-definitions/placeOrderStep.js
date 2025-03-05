import { Given, When, Then } from '@wdio/cucumber-framework';
import homepage from '../pageobjects/homepage.page'; // import homepage class
import placeOrder from '../pageobjects/placeOrder.page'
import cartPage from '../pageobjects/cart.page';

Given(/^Navigate to the Place Order Page$/, async () => {

    await homepage.goToHomePage();
    await homepage.loggedinUserCanAddItemToCart();
    await cartPage.navigateToCart();
});

When(/^Enter User Details and Proceed$/, async () => {
    await placeOrder.enterUserDetails();
    await placeOrder.pressNext();
});

Then(/^Review and Submit the Order$/, async () => {
    await placeOrder.placeOrder();
    await placeOrder.assertOrderIdGeneratedg();
});
