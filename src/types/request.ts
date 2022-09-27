import { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'

export type RequestMethod = 'DELETE' | 'POST' | 'GET' | 'PUT'

export interface Config {
    baseUrl: string
    accessId: string
    accessToken?: string
    options?: Record<string, unknown>
}

export interface ClientRequestResponse {
    status: number
    statusText: string
    headers: AxiosResponseHeaders
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config: AxiosRequestConfig<any>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request?: any
}

export interface ClientRequestError {
    status: number
    statusText: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
}
