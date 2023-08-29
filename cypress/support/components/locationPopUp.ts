import { SelectLocationPage } from "../pages/selectLocationPage";

class LocationPopUp {
    changeAddressButton: string;
    notChangeButton: string;
    locationPopUpBody: string;
    constructor() {
        this.changeAddressButton = '.glow-toaster-button-submit';
        this.notChangeButton = '.glow-toaster-button-dismiss';
        this.locationPopUpBody = '#glow-toaster-body';
    }

    clickChangeAddressButton() {
        cy.clickElement(this.changeAddressButton);
        return new SelectLocationPage();
    }

    clickNotChangeButton() {
        cy.clickElement(this.notChangeButton);
    }

    getPopUpBody() {
        return cy.get(this.locationPopUpBody);
    }
}

module.exports = LocationPopUp;