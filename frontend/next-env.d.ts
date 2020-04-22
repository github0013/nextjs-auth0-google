/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test"
    readonly AUTH0_DOMAIN: string
    readonly AUTH0_CLIENT_ID: string
  }
}
