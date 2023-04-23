# MatrixSpotifyDownloader
Matrix bot to automate downloading Spotify songs. No premium account required.

## How To Use
Using MatrixSpotifyDownloader is simple. After deploying, just invite the bot user to a room and you're good to go. Here are the available commands:

* `download <track_url>` - Downloads the song to DOWNLOADS_FOLDER/ARTIST_NAME/SONG_NAME.mp3

To get your access token run this command:
```
curl -XPOST -d '{"type":"m.login.password", "user":"example", "password":"example"}' "HOME_SERVER_URL/_matrix/client/r0/login"
```

To deploy, use the following Docker Compose configuration:
```yml
version: '3.9'

services:
  matrix_webhooks:
    image: spencer0003/matrixspotifydownloader:latest
    container_name: MatrixSpotifyDownloader
    restart: unless-stopped
    environment:
      ACCESS_TOKEN: YOUR_ACCESS_TOKEN
      DOWNLOAD_FOLDER: /mnt/user/media/Music
      HOMESERVER: https://matrix.org
      PREFIX: '!'
      SPOTIFY_CLIENT_ID: YOUR_CLIENT_ID
      SPOTIFY_CLIENT_SECRET: YOUR_CLIENT_SECRET
    volumes:
      - ${PWD}/matrixspotifydownloader:/app/data
```