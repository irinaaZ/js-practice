import { Selector, t } from "testcafe";
const RegistrationPage = require("../pages/registration-page").default;
const userData = require("../data/user").userData;
const request = require("request-promise-native");
const successMsg = 'Your customer account has been created';
const regex = /<input type="hidden" name="token" value="(.*)"/gm;

fixture`Registration Page via API call`
    .page(RegistrationPage.url);

test('Registration via API call', async () => {
    let tokenHTML = await request.get(RegistrationPage.url);
    let a = regex.exec(tokenHTML);
    let token = a[1];

    const options = {
        method: 'POST',
        uri: RegistrationPage.url,
        formData: {
            token: token,
            firstname: userData.firstName,
            lastname: userData.lastName,
            country_code: userData.countryCode,
            email: userData.email,
            password: userData.password,
            confirmed_password: userData.confirmPassword,
            newsletter: 1,
            create_account: 'Create Account'
        },
        headers: {
            contentType: 'application/x-www-form-urlencoded',
        }
    };
    
    await request(options);

    await t.expect(await RegistrationPage.getRegistrationSuccessMsg()).eql(successMsg);
    await t.expect(await RegistrationPage.isUserLogged()).eql(userData.firstName);
});