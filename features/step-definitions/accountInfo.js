import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import accountInfoPage from '../pageobjects/accountInfo.page';


Given(/^as a logged-in user, navigate to my account page$/, async () => {
    const pageTitle= await accountInfoPage.getmyAccountPageTitle();
    expect(pageTitle).toContain("My Account");

});

When(/^Press Change password and change it$/, async () => {
    await accountInfoPage.changePass();
});

Then(/^user should be signed out$/, async() => {
    const signedOutMsg= await accountInfoPage.getAccountInfoChangesSavedMsg();
    expect(signedOutMsg).toContain("You saved the account information.");
});
