import { describe, it, expect } from 'vitest'
import { sum } from '../src'

describe('sum', async () => {
    it('2+3 = 5', async () => {
        expect(sum(2, 3)).toBe(5)
    })
})
