import { ProductPage } from "./productPage";
import { ResultPage } from "./resultPage";

export class GiftCardPage {
    typeOfCard: string;
    constructor() {
        this.typeOfCard = '[class="bxc-grid__image   bxc-grid__image--light bxc-grid__image--beauty bxc-grid__image--beauty"]';
    }

    selectTypeGiftCard(typeValue) {
        let resultPage;
        cy.get(this.typeOfCard).eq(0).click();
        switch (typeValue) {
            case 'eGift':
                cy.get(this.typeOfCard).eq(0).click();
                resultPage = new ProductPage();
                break;
            case 'Mail':
                cy.get(this.typeOfCard).eq(1).click();
                resultPage = new ResultPage();
                break;
            default:
                console.log("Error: type is not choise");
        }
        return resultPage
    }
}
