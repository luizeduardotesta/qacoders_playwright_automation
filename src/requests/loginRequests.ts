import { apiUrl } from '../config/credentials';

export class LoginRequest {
    static  async login(request: any, email: string, password: string) {
        return await request.post(`${apiUrl}/login`, {
            data: {
                mail: email,
                password: password,
            },
            headers: {
                "Accept": "application/json"
            }
        });
    }

    static async validateToken(request: any, token: string) {
        return await request.get(`${apiUrl}/validateToken`, {
            headers: {
                "Authorization": `${token}`,
                "Accept": "application/json"
            }
        });
    }
}