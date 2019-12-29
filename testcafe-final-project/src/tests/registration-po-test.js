const RegistrationPage = require("../pages/registration-page").default;
const userData = require("../data/user").userData;
const successMsg = 'Your customer account has been created';
import { BaseUrl } from "../pages/base-page";
import { t } from "testcafe";

fixture`Registration Page`
    .page(RegistrationPage.url);

test('Registration', async () => {
    await RegistrationPage.userRegistration(userData);
    await t.expect(await RegistrationPage.getRegistrationSuccessMsg()).eql(successMsg);
    await t.expect(await RegistrationPage.getCurrentUrl()).eql(BaseUrl);
});