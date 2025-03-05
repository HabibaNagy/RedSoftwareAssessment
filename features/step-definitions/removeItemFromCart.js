import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect} from '@wdio/globals'
import homepage from '../pageobjects/homepage.page'; // import homepage class
import cartPage from '../pageobjects/cart.page';


Given(/^i'm on the homepage$/, async () => {
    await homepage.goToHomePage();
    await homepage.loggedinUserCanAddItemToCart();
});

When(/^navigate to cart and remove item$/, async () => {
    await cartPage.navigateToCart();
    await cartPage.removeItemFromCart();
});

Then(/^cart should be empty$/,async () => {
    const cartIsEmptyText= await (await cartPage.getCartIsEmptyText()).getText();
    console.log(cartIsEmptyText);
    expect(cartIsEmptyText).toContain("You have no items in your shopping cart.");
});
