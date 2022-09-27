import { User } from '../types'
import BaseResource from './base'

export default class AuthResource extends BaseResource {
    public async login(payload: { email: string; password: string }) {
        const path = `/auth/login`
        return await this.client.request<{ type: string; token: string }>(
            'POST',
            path,
            payload
        )
    }

    public async register(payload: { email: string; password: string }) {
        const path = `/auth/register`
        return await this.client.request<{ user: User; token: string }>(
            'POST',
            path,
            payload
        )
    }
}
