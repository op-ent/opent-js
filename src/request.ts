import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosRequestHeaders,
} from 'axios'
import {
    ClientRequestError,
    ClientRequestResponse,
    Config,
    RequestMethod,
} from './types'
import { stripTrailingSlash } from './utils'

const DEFAULT_CONFIG: Config = {
    baseUrl: 'https://app.op-ent.fr/',
    accessId: '',
}

export default class Client {
    private axiosInstance: AxiosInstance
    private config: Config

    constructor(config: Config) {
        this.config = { ...DEFAULT_CONFIG, ...config }
        this.config.baseUrl = `${stripTrailingSlash(this.config.baseUrl)}/api`
        this.axiosInstance = this.createAxiosInstance(this.config)
    }

    private createAxiosInstance(config: Config): AxiosInstance {
        const client = axios.create({
            baseURL: config.baseUrl,
        })

        return client
    }

    public async request<T>(
        method: RequestMethod,
        path: string,
        payload: AxiosRequestHeaders | null = null,
        customHeaders: AxiosRequestHeaders = {}
    ): Promise<{
        data?: T
        response?: ClientRequestResponse
        error?: ClientRequestError
    }> {
        if (method === 'POST' && !payload) {
            payload = {}
        }

        const DEFAULT_HEADERS: AxiosRequestHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'access-id': this.config.accessId,
        }

        if (this.config.accessToken) {
            DEFAULT_HEADERS['access-token'] = this.config.accessToken
        }

        const headers: AxiosRequestHeaders = {
            ...DEFAULT_HEADERS,
            ...customHeaders,
        }

        const reqOpts: AxiosRequestConfig = {
            method,
            url: path,
            data: payload,
            headers,
        }

        let data: T | undefined = undefined
        let response: ClientRequestResponse | undefined = undefined
        let error: ClientRequestError | undefined = undefined

        try {
            ;({ data, ...response } = await this.axiosInstance.request<T>(
                reqOpts
            ))
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            const _e: AxiosError = e
            error = {
                status: _e.response?.status || NaN,
                statusText: _e.response?.statusText || '',
                data: _e.response?.data,
            }
        }
        return { data, response, error }
    }
}
