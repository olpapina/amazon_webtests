import { ResultPage } from "./resultPage"

export class ProductPage {
    deliveryValidationMessage: string;
    deliveryLocation: string;
    deliveryType: string;
    addToCardButton1: string;
    addToCardButton2: string;
    buyNowButton: string;
    inactiveAddToCart: string;
    spinner: string;
    memoryStorage: string;

    constructor() {
        this.deliveryValidationMessage = '.a-color-error';
        this.deliveryLocation = '#contextualIngressPtLabel_deliveryShortLine';
        this.deliveryType = '#gc-delivery-mechanism-button-Email-announce';
        this.addToCardButton1 = '#add-to-cart-button';
        this.addToCardButton2 = '#addToCart_feature_div';
        this.buyNowButton = '#buyNow_feature_div';
        this.inactiveAddToCart = '#exportsUndeliverable-cart-announce';
        this.spinner = '.a-spinner-wrapper';
        this.memoryStorage = '.po-memory_storage_capacity';

    }

    getDeliveryValidationMessage() {
        return cy.get(this.deliveryValidationMessage).invoke('text');
    }

    checkAddToCartButton(activeStatus) {
        if (activeStatus==='inactive') {
            cy.get(this.inactiveAddToCart).should('exist');
        } else {
            cy.get(this.addToCardButton1).should('exist') || cy.get(this.addToCardButton2).should('exist');
            cy.get(this.buyNowButton).should('exist');
        }
    }

    getDeliveryStatus() {
        return cy.get(this.deliveryLocation).invoke('text');
    }

    getDeliveryType() {
        return cy.get(this.deliveryType).invoke('val');
    }

    backToResultPage() {
        cy.go('back');
        return new ResultPage();
    }

    waitUntilLoadingCircleHides() {
        cy.get(this.spinner).should('be.not.visible');
    }

    getMemoryStorageCapacity() {
        return cy.get(this.memoryStorage);
    }
}