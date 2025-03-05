import { Before } from '@cucumber/cucumber';
import homepagePage from './pageobjects/homepage.page.js';
import { validUser, validPassword } from './testData.js'

Before({ tags: "@loginRequired" }, async () => {
    console.log("Running Before Hook - Logging in");  // Debugging
    await homepagePage.open();
    await homepagePage.login(validUser, validPassword);

});
