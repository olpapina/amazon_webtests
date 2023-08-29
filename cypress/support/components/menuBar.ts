import { GiftCardPage } from "../pages/giftCardPage";

class MenuBar {
    giftCardTabButton: string;
    constructor() {
        this.giftCardTabButton = '[data-csa-c-slot-id="nav_cs_3"]';
    }

    clickGiftCardTabButton() {
        cy.contains(this.giftCardTabButton, 'Gift Cards').click();
        return new GiftCardPage();
    }
}

module.exports = MenuBar