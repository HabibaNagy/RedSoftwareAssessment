import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import homepage from '../pageobjects/homepage.page'; // import homepage class


Given(/^Navigate to Homepage as a Logged-in User$/, async () => {
    await homepage.goToHomePage();
});



When(/^Add item to cart$/, async () => {
    await homepage.loggedinUserCanAddItemToCart();
});


Then(/^Verify Item is Added Successfully$/,async () => {
    await homepage.isValidationMessageDisplayed();
    const messageText = await homepage.getValidationMessageText();
    const productName = await homepage.getProductNameText();
    expect(messageText).toContain(`You added ${productName}`);
});
