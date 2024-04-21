import { apiUrl } from '../config/variables';

export async function login(request: any, email: string, password: string) {
    const response = await request.post(`${apiUrl}/login`, {
        data: {
            mail: email,
            password: password,
        },
        headers: {
            "Accept": "application/json"
        }
    });

    return response;
}