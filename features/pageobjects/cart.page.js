import { $ } from '@wdio/globals'  // Import WebDriverIO selectors and commands
import Page from './page.js';  // Import the base Page class

class cartPage extends Page {
    /**
    * Define selectors using getter methods for elements in the cart page.
    */

    // Selector for the cart icon that displays the mini cart
    get cartIcon() {
        return $("[data-bind=\"scope: 'minicart_content'\"]");
    }

    // Selector for the "View Cart" button
    get viewCart() {
        return $(".action.viewcart");
    }

    // Selector for the remove icon to remove items from the cart
    get removeIcon() {
        return $(".action.action-delete");
    }

    // Selector to check if the cart is empty
    get cartIsEmpty() {
        return $(".cart-empty");
    }

    // Method to get the text that indicates the cart is empty
    async getCartIsEmptyText() {
        return this.cartIsEmpty;
    }

    // Method to navigate to the cart by clicking the cart icon
    async navigateToCart() {
        // Wait for the cart icon to be clickable and then click it
        await this.cartIcon.waitForClickable({ timeout: 10000 });
        await this.cartIcon.click();
    }

    // Method to remove an item from the cart
    async removeItemFromCart() {
        // Click the "View Cart" button to go to the cart page
        await this.viewCart.click();

        // Wait for the remove icon to be clickable and then click it to remove the item
        await this.removeIcon.click();
    }
}

export default new cartPage();
