const ResultBlock = require("../../support/components/resultBlock")

export class ResultPage {
    resultBlock: any;
    filters: string;
    constructor() {
        this.resultBlock = new ResultBlock()
        this.filters = '#filters'
    }

    getResultBlock() {
        return this.resultBlock
    }   
    
    getAdvancedSearchPanel() {
        return cy.get(this.filters)
    }
}