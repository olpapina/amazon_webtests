
import { SelectLocationPage } from "./selectLocationPage";
import { GiftCardPage } from "./giftCardPage";
const LocationPopUp = require("../../support/components/locationPopUp");
const SearchBox = require("../../support/components/searchBox");
const MenuBar = require("../../support/components/menuBar");
const TopDropMenu = require("../../support/components/topDropMenu");

class HomePage {
    deliveryLocationIcon: string;
    actualDeliveryLocation: string;
    logo: string;
    locationPopUp: any;
    searchBox: any;
    signIn: string;
    menuBar: any;
    topMenuButton: string;
    topDropMenu: any;
    navigateMenu: string;

    constructor() {
        this.locationPopUp = new LocationPopUp();
        this.topDropMenu = new TopDropMenu();
        this.menuBar = new MenuBar();
        this.searchBox = new SearchBox();
        this.deliveryLocationIcon = '#nav-packard-glow-loc-icon';
        this.topMenuButton = '#nav-hamburger-menu';
        this.actualDeliveryLocation = '#glow-ingress-line2';
        this.navigateMenu = '#nav-xshop';
        this.logo = '#nav-logo-sprites';
        this.signIn = '[class="nav-signin-tt nav-flyout"]';
    }

    openHomePage() {
        cy.visit('/');
    }

    getLogo() {
        return cy.get(this.logo);
    }

    clickActualDeliveryLocation() {
        cy.clickElement(this.deliveryLocationIcon);
        return new SelectLocationPage();
    }

    getActualDeliveryLocation() {
        return cy.get(this.actualDeliveryLocation);
    }

    clickGiftCardButton() {
        cy.get(this.navigateMenu).contains('Gift Cards').click();
        return new GiftCardPage();
    }

    getLocationPopUp() {
        return this.locationPopUp;
    }

    getTopDropMenu() {
        return this.topDropMenu;
    }

    getSearchBox() {
        return this.searchBox;
    }

    getSignIn() {
        return cy.get(this.signIn);
    }

    getMenuBar() {
        return this.menuBar;
    }

    clickTopMenu() {
        cy.clickElement(this.topMenuButton);
        return this.topDropMenu;
    }
}

export let homePage = new HomePage;