import { Access, AccessType } from '../types'
import BaseResource from './base'

export default class AccessesResource extends BaseResource {
    private path = `/developers/accesses`

    public async getAll() {
        return await this.client.request<Access[]>('GET', this.path)
    }

    public async create(payload: { type: AccessType; domains?: string[] }) {
        return await this.client.request<Access>('POST', this.path, payload)
    }

    public async get(id: number) {
        const path = `${this.path}/${id}`
        return await this.client.request<Access>('GET', path)
    }

    public async update(
        id: number,
        payload: { type: AccessType; domains?: string[] }
    ) {
        const path = `${this.path}/${id}`
        return await this.client.request<Access>('PUT', path, payload)
    }

    public async delete(id: number) {
        const path = `${this.path}/${id}`
        return await this.client.request<Access>('DELETE', path)
    }
}
