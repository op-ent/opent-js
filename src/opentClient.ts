import Client from './request'
import AuthResource from './resources/auth'
import AccessesResource from './resources/accesses'
import { Config } from './types'

export default class OpentClient {
    private client: Client

    public auth: AuthResource
    public accesses: AccessesResource

    constructor(config: Config) {
        this.client = new Client(config)

        this.auth = new AuthResource(this.client)
        this.accesses = new AccessesResource(this.client)
    }
}
