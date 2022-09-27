import { describe, it, expect } from 'vitest'
import { stripTrailingSlash } from '../src/utils'

describe('stripTrailingSlash', async () => {
    it('should remove trailing slash', async () => {
        expect(stripTrailingSlash('https://app.op-ent.fr/')).toBe(
            'https://app.op-ent.fr'
        )
    })
})
