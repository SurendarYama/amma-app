/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly FIREBASE_CLIENT_API_KEY: string;
  readonly FIREBASE_CLIENT_AUTH_DOMAIN: string;
  readonly FIREBASE_CLIENT_PROJECT_ID: string;
  readonly FIREBASE_CLIENT_STORAGE_BUCKET: string;
  readonly FIREBASE_CLIENT_MESSAGING_SENDER_ID: string;
  readonly FIREBASE_CLIENT_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
