/// <reference types="node" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_ENDPOINT: string
    readonly DB_HOST: string
    readonly DB_PORT: string
    readonly DB_NAME: string
    readonly DB_USERNAME: string
    readonly DB_PASSWORD: string
  }
}
