/*
  Matrix Spotify Downloader
  Download Spotify music for free.
*/

import 'module-alias/register';
import 'dotenv/config';
import { Client } from '@classes/Client';

// Environment variables
const { ACCESS_TOKEN, DOWNLOAD_FOLDER, HOMESERVER, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

if (!ACCESS_TOKEN || !DOWNLOAD_FOLDER || !HOMESERVER || !SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET)
  throw new Error('[MatrixSpotifyDownloader]: Missing environment variables.');

// Start server and create bot
void new Client(process.env.HOMESERVER, process.env.ACCESS_TOKEN).launch();