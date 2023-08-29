import { ProductPage } from "../pages/productPage";

class ResultBlock {
    resultImageItems: string;
    resultLinks: string;
    resultSearchLinks: string;
    spinner: string;

    constructor() {
        this.resultImageItems = '[class="a-link-normal s-no-outline"]';
        this.resultLinks = '[class = "a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]';
        this.resultSearchLinks = '[class = "a-size-mini a-spacing-none a-color-base s-line-clamp-2"]';
        this.spinner = '.a-spinner-wrapper';
    }

    clickResultLink(number) {
        cy.get(this.resultLinks).should('be.visible').eq(number).click();
        return new ProductPage();
    }

    getResultLinks() {
        return cy.get(this.resultLinks);
    }

    getResultSearchLinks() {
        return cy.get(this.resultSearchLinks);
    }

    waitUntilLoadingCircleHides() {
        cy.get(this.spinner).should('be.not.visible');
    }

    getLink(index: number) {
        return cy.get(this.resultLinks)[index];
    }
}

module.exports = ResultBlock;