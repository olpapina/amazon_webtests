import { ProductPage } from "./productPage";
import { ResultPage } from "./resultPage";

export class GiftCardPage {
    typeOfCard: string;
    constructor() {
        this.typeOfCard = '[class="bxc-grid__image   bxc-grid__image--light"]';
    }

    selectTypeGiftCard(typeValue) {
        let resultPage;
        switch (typeValue) {
            case 'eGift':
                cy.get(this.typeOfCard).eq(6).click();
                resultPage = new ProductPage();
                break;
            case 'Mail':
                cy.get(this.typeOfCard).eq(7).click();
                resultPage = new ResultPage();
                break;
            default:
                console.log("Error: type is not choise");
        }
        return resultPage
    }
}
