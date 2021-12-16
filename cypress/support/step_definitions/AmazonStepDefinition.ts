import {Given,Then} from 'cypress-cucumber-preprocessor/steps'
import { AmazonPage } from '../../integration/pages/AmazonPage';
const amazonPage = new AmazonPage()

Given(/^navigate to the amazon website$/, () => {
	amazonPage.getUrl()
});

Then(/^verify amazon logo is present$/, () => {
	amazonPage.verifyLogoPresent()
});
