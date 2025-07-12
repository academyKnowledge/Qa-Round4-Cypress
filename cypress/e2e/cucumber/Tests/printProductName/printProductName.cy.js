/// <reference types="cypress"/>
import { Given  , Then  } from "cypress-cucumber-preprocessor/steps";
import shardActions from "../../../../support/PageObjects/shared/Actions.cy";
import printProductAssertions from "../../../../support/PageObjects/printProductName/Assertions.cy";

const sharedAction = new shardActions()
const printProductAssertion = new printProductAssertions();

Given("The user navigated to magento website",()=>{
    sharedAction.openHomePage();
})

Then("The products should be available in hot seller section",()=>{
   printProductAssertion.printProduct();
})