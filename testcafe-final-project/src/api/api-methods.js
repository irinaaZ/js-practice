const BasePage = require("../pages/base-page").default;
import { Selector, t } from "testcafe";
import { BaseUrl } from "../pages/base-page";
const RegistrationPage = require("../pages/registration-page").default;
const request = require("request-promise-native");
const regex = /<input type="hidden" name="token" value="(.*)"/gm;

export async function createNewUser(userData) {
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

    const parsedBody = await request(options)
        .then(function () {
            return parsedBody;
        })
        .catch(function (err) {
            console.error(err);
        });
}