import { test, expect } from '@playwright/test';
import { login } from '../requests/loginRequests';
import { credentials } from '../config/credentials';

export let sysadminToken: string;

test("Success login with sysadmin", async ({ request }) => {
    const response = await login(request, credentials.validEmail, credentials.validPassword);

    expect(response.status()).toEqual(200);
    const responseBody = await response.json();
    expect(responseBody.token).toBeTruthy();
    expect(responseBody.user.accessProfile).toEqual('SYSADMIN');

    sysadminToken = responseBody.token;
});

test("Error login with sysadmin wrong mail", async ({ request }) => {
    const response = await login(request, credentials.invalidEmail, credentials.validPassword);

    expect(response.status()).toEqual(400);
    const responseBody = await response.json();
    expect(responseBody.alert).toEqual("E-mail ou senha informados são inválidos.");
});

test("Error login with sysadmin wrong password", async ({ request }) => {
    const response = await login(request, credentials.validEmail, credentials.invalidPassword);

    expect(response.status()).toEqual(400);
    const responseBody = await response.json();
    expect(responseBody.alert).toEqual("E-mail ou senha informados são inválidos.");
});
