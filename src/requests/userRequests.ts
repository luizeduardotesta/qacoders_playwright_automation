import { apiUrl } from '../config/credentials';
import { idUser } from '../tests/userTets.spec';

export class UserRequest {
    static  async create(request: any, fullName: string, mail: string, password: string, accessProfile: string, cpf: string, confirmPassword: string, token: string) {
        return await request.post(`${apiUrl}/user`, {
            data: {
                fullName,
                mail,
                password,
                accessProfile: "ADMIN",
                cpf,
                confirmPassword: password
            },
            headers: {
                "Authorization": `${token}`,
                "Accept": "application/json"
            }
        });
    }

    static async list(request: any, token: string) {
        return await request.get(`${apiUrl}/user/${idUser}`, {
            headers: {
                "Authorization": `${token}`,
                "Accept": "application/json"
            }
        });
    }
}