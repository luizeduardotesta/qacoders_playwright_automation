// apiHelpers.ts
import axios, { AxiosResponse } from 'axios';
import { apiUrl } from '../config/variables';

export async function login(email: string, password: string): Promise<AxiosResponse<any>> {
    try {
        const response = await axios.post(`${apiUrl}/login`, {
            mail: email,
            password: password
        });
        return response;
    } catch (error) {
        return error.response;
    }
}