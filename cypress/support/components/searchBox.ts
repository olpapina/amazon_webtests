import { ResultPage } from "../pages/resultPage";

class SearchBox {
    searchField: string;
    searchButton: string;

    constructor() {
        this.searchField = '#twotabsearchtextbox';
        this.searchButton = '#nav-search-submit-button';
    }

    typeSearchedProduct(text) {
        cy.typeText(this.searchField, text);
    }

    clickSearchButton() {
        cy.clickElement(this.searchButton);
        return new ResultPage;
    }
}

module.exports = SearchBox;