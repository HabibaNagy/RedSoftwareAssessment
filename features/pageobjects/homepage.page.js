import { $ } from '@wdio/globals'  // Import WebDriverIO selectors and commands
import Page from './page.js';  // Import the base Page class

/**
 * Sub page containing specific selectors and methods for the home page.
 */
class homepage extends Page {
    /**
     * Define selectors using getter methods for elements on the home page.
     */
    // Selector for the username input field
    get inputUsername() {
        return $('#email');
    }

    // Selector for the password input field
    get inputPassword() {
        return $('#pass');
    }

    // Selector for the submit button (login button)
    get btnSubmit() {
        return $('button[name="send"]');
    }

    // Selector for a specific item (e.g., "Breathe-Easy Tank")
    get item() {
        return $('a[title="Breathe-Easy Tank"]');
    }

    // Selector for size selection (specific option for size 143)
    get selectSize() {
        return $("//div[@class='swatch-opt-1812']//div[@id='option-label-size-143-item-167']");
    }

    // Selector for color selection (specifically for white)
    get selectColor() {
        return $("div[aria-label='White']");
    }

    // Selector for the "Add to Cart" button
    get addToCart() {
        return $("(//span[contains(text(),'Add to Cart')])[2]");
    }

    // Selector for the validation message that appears on the page
    get validationMessage() {
        return $('div[data-bind="scope: \'messages\'"]');
    }

    /**
     * Method to assert that the validation message is displayed.
     */
    async isValidationMessageDisplayed() {
        await this.validationMessage.waitForDisplayed();
    }

    /**
     * Method to get the validation message text.
     */
    async getValidationMessageText() {
        await this.validationMessage.waitForDisplayed();
        return await this.validationMessage.getText();
    }

    // Selector for navigating back to the home page (logo)
    get backToHomePage() {
        return $(".logo");
    }

    /**
     * Method to get the product name from the specific item.
     */
    async getProductNameText() {
        return await this.item.getText();
    }

    /**
     * Method to encapsulate the automation code for login and adding an item to the cart.
     * @param {string} username - The username for login.
     * @param {string} password - The password for login.
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);  // Set username in the input field
        await this.inputPassword.setValue(password);  // Set password in the input field
        await this.btnSubmit.click();  // Click the login button
    }

    /**
     * Method to navigate back to the home page by clicking the logo.
     */
    async goToHomePage() {
        await this.backToHomePage.click();
    }

    /**
     * Method to simulate the action of a logged-in user adding an item to the cart.
     */
    async loggedinUserCanAddItemToCart() {
        await this.selectSize.click();  // Select the size
        await this.selectColor.click();  // Select the color
        await this.addToCart.click();  // Click the "Add to Cart" button
    }

    /**
     * Override specific options to adapt the open method for the homepage.
     */
    open() {
        return super.open('login');  // Call the open method from the parent class with the 'login' page path
    }
}

export default new homepage();  // Export a new instance of the homepage class
