export interface User {
    id: number
    email: string
    created_at: string
    updated_at: string
}

export type AccessType = 'token' | 'web'

export interface Access {
    type: AccessType
    token?: string
    user_id: number
    created_at: string
    updated_at: string
    id: number
}
