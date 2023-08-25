export class ContinuePage {
    continueButton: string;
    constructor() {
        this.continueButton = '.a-popover-footer';
    }

    clickContinueButton() {
        cy.get(this.continueButton).contains('Continue', { timeout: 6000 }).click({ force: true });
    }
}