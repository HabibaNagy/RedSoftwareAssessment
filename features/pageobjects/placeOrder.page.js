import { $, expect } from '@wdio/globals'
import Page from './page.js';
import { firstName, lastname, address, city, postalCode, phoneNumber } from '../testData.js'

class placeorder extends Page {
    // Button to proceed to checkout
    get proceedToCheckOut() {
        return $("//button[contains(text(), 'Proceed to Checkout')]");
    }

    // User details input fields
    get firstName() {
        return $('[name="firstname"]');
    }
    get lastName() {
        return $('[name="lastname"]');
    }
    get streetAddress() {
        return $('[name="street[0]"]');
    }
    get cityField() {
        return $('[name="city"]');
    }
    get state() {
        return $('[name="region_id"]');
    }
    get postalCodeField() {
        return $('[name="postcode"]');
    }
    get country() {
        return $('[name="country_id"]')
    }
    get phoneNumberField() {
        return $('[name="telephone"]')
    }

    // Shipping method and other buttons
    get shippingMethod() {
        return $("//td[contains(text(), 'Fixed')]");
    }
    get next() {
        return $('span*=Next');
    }
    get reviewAndPlaceOrder() {
        return $("//span[contains(text(), 'Place Order')]");
    }
    get confirmationMsg() {
        return $("h1[class='page-title']");
    }
    get newAddress() {
        return $('button.action.action-show-popup')
    }
    get shipHere() {
        return $('button.action.primary.action-save-address');
    }

    // Order details elements
    get orderID() {
        return $("a.order-number");
    }
    get totalPrice() {
        return $("strong span[class='price']");
    }
    get orderQty() {
        return $(".details-qty span.value");
    }
    get productOrder() {
        return $(".product-item-name-block .product-item-name");
    }

    // Function to get the product order text
    async getProductOrderText() {
        return await this.productOrder.getText();
    }

    // Function to get the total price text
    async getTotalPriceText() {
        return await this.totalPrice.getText();
    }

    // Function to get the order quantity text
    async getOrderQtyText() {
        return await this.orderQty.getText();
    }

    // Check if Order ID is displayed
    async OrderIDNumberIsDsplayed() {
        await this.orderID.waitForExist({ timeout: 50000 });
        return await this.orderID.isDisplayed();
    }

    // Function to get the confirmation message text
    async getConfirmationMsgText() {
        await this.confirmationMsg.waitForExist({ timeout: 7000 });
        await this.confirmationMsg.waitForDisplayed({ timeout: 7000 });
        return await this.confirmationMsg.getText();
    }

    // Logs order details to the console
    async logCaptureOrderDetails() {
        console.log(await this.getProductOrderText());  // Call the function with 'await' to get the value
        console.log(await this.getOrderQtyText());
        console.log(await this.getTotalPriceText());
    }

    // Method to capture order details in an object
    async captureOrderDetails() {
        return {
            productOrder: await this.getProductOrderText(),
            totalPrice: await this.getTotalPriceText(),
            orderQty: await this.getOrderQtyText(),
        };
    }

    // Method to fill in user details on the checkout page
    async enterUserDetails() {
        await this.proceedToCheckOut.click();  // Click on Proceed to Checkout
        await this.newAddress.click();  // Click to add new address
        await this.firstName.setValue(firstName);  // Enter first name
        await this.lastName.setValue(lastname);  // Enter last name
        await this.streetAddress.setValue(address);  // Enter street address
        await this.cityField.setValue(city);  // Enter city
        await this.state.selectByIndex(3);  // Select state (index 3)
        await this.postalCodeField.setValue(postalCode);  // Enter postal code
        await this.country.selectByVisibleText("United States");  // Select country
        await this.phoneNumberField.setValue(phoneNumber);  // Enter phone number
        await this.shipHere.click();  // Click to save address
        await this.shippingMethod.click();  // Select shipping method
    }

    // Clicks the next button
    async pressNext() {
        await this.next.waitForExist({ timeout: 5000 });  // Wait for next button to exist
        await this.next.scrollIntoView();  // Scroll to next button
        await this.next.click();  // Click next
    }

    // Clicks the place order button
    async placeOrder() {
        await this.reviewAndPlaceOrder.waitForClickable({ timeout: 6000 });  // Wait for Place Order button to be clickable
        await this.reviewAndPlaceOrder.click();  // Click place order
    }

    // Clicks on the order ID link
    async clickOnOrderID() {
        await this.orderID.waitForExist({ timeout: 6000 });  // Wait for order ID to exist
        return await this.orderID.click();  // Click order ID
    }

    // Asserts if the order ID is displayed
    async assertOrderIdGeneratedg() {
        const orderIdGenerated = await this.OrderIDNumberIsDsplayed();  // Check if order ID is displayed
        expect(orderIdGenerated).toBe(true);  // Assert it should be true
    }
}

export default new placeorder()  // Export the class instance
