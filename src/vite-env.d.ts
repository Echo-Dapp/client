/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_PARTICLE_PROJECT_ID: string;
  readonly VITE_PARTICLE_CLIENT_KEY: string;
  readonly VITE_PARTICLE_APP_ID: string;
  readonly VITE_WALLETCONNECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface ObjectConstructor {
    typedKeys<T>(obj: T): Array<keyof T>;
  }
}
Object.typedKeys = Object.keys as any;
