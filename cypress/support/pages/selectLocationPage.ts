import { ContinuePage } from "./continuePage"

export class SelectLocationPage {
    enterZipCodeField: string;
    dropDownIcon: string;
    applyButton: string;
    popUp: string;

    constructor() {
        this.enterZipCodeField = '#GLUXZipUpdateInput'
        this.dropDownIcon = '.a-icon-dropdown'
        this.applyButton = '#GLUXZipUpdate-announce'
        this.popUp = '.a-popover-inner'
    }

    enterZipCode(zipCode) {
        cy.get(this.enterZipCodeField).type(zipCode)
    }

    clickApplyButton() {
        cy.get(this.applyButton).click({force: true})
        return new ContinuePage();
    }

    clickChooseLocation() {
        cy.get(this.popUp).find(this.dropDownIcon).click()
    }
}