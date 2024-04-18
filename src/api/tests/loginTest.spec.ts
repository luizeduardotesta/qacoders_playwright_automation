import { test, expect } from '@playwright/test';
import { login } from '../requests/apiRequests';
import { validEmail, validPassword, invalidEmail, invalidPassword } from '../config/variables';

export let sysadminToken: string;

test("Success login with sysadmin", async () => {
    const response = await login(validEmail, validPassword);

    expect(response.status).toEqual(200);
    const responseBody = response.data;
    expect(responseBody.token).toBeTruthy();
    expect(responseBody.user.accessProfile).toEqual('SYSADMIN');

    sysadminToken = responseBody.token;
});

test("Error login with sysadmin wrong mail", async () => {
    const response = await login(invalidEmail, validPassword);

    expect(response.status).toEqual(400);
    const responseBody = response.data;
    expect(responseBody.alert).toEqual("E-mail ou senha informados são inválidos.");
});

test("Error login with sysadmin wrong password", async () => {
    const response = await login(validEmail, invalidPassword);

    expect(response.status).toEqual(400);
    const responseBody = response.data;
    expect(responseBody.alert).toEqual("E-mail ou senha informados são inválidos.");
});
