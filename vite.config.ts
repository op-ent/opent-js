/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        include: ['tests/**/*.{test,spec}.{js,ts}'],
        coverage: {
            reporter: ['text', 'lcov'],
        },
    },
})
