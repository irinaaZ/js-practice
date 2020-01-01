import { Selector, t } from "testcafe";
import { createNewUser } from "../api/api-methods";
const RegistrationPage = require("../pages/registration-page").default;
const userData = require("../data/user").userData;
const successMsg = 'Your customer account has been created';

fixture`Registration Page via API call`
    .page(RegistrationPage.url);

test.only('Registration via API call', async () => {
    await createNewUser(userData);

    await t.expect(await RegistrationPage.getRegistrationSuccessMsg()).eql(successMsg);
    await t.expect(await RegistrationPage.isUserLogged()).eql(userData.firstName);
});