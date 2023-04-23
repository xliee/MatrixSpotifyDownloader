declare namespace NodeJS {
  export interface ProcessEnv {
    ACCESS_TOKEN: string;
    HOMESERVER: string;
    PREFIX?: string;
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
  }
}