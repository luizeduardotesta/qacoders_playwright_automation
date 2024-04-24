import { test, expect } from '@playwright/test';
import { credentials } from '../config/credentials';
import { LoginRequest } from '../requests/loginRequests';
import { UserRequest } from '../requests/userRequests';
import { generateUserData } from '../utils/helpers/dataHelper';

export let sysadminToken: string;
export let idUser: string;
export let userName: string;

test("Create a new user with success", async ({ request }) => {
    const loginResponse = await LoginRequest.login(request, credentials.validEmail, credentials.validPassword);
    const responseBody = await loginResponse.json();
    sysadminToken = responseBody.token;

    const userData = generateUserData();

    const createResponse = await UserRequest.create(
        request,
        userData.fullName,
        userData.mail,
        userData.password,
        userData.accessProfile,
        userData.cpf,
        userData.confirmPassword,
        sysadminToken
    );

    expect(createResponse.status()).toEqual(201);
    const createResponseBody = await createResponse.json();
    expect(createResponseBody.user._id).toBeTruthy();
    idUser = createResponseBody.user._id;
    userName = createResponseBody.user.fullName;
    expect(createResponseBody.msg).toEqual(`Olá ${userName}, cadastro realizado com sucesso.`);

    const listResponse = await UserRequest.list(request, sysadminToken);
    expect(listResponse.status()).toEqual(200);
    const listResponseBody = await listResponse.json();
    expect(listResponseBody._id).toEqual(idUser);
    expect(listResponseBody.fullName).toEqual(userName);
});