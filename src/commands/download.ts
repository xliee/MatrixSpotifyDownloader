// Import classes, types & constants
import type { Client } from '@classes/Client';
import type { CommandContext } from '@typings/command';
import { existsSync, mkdirSync } from 'fs';
import { Command } from '@classes/Command';

// Export class
export class Download extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'download',
      description: 'Download a song from Spotify.'
    });
  }

  async run({ args, event, roomId }: CommandContext): Promise<string> {
    const trackUrl = args[0];

    if (!trackUrl) return this.client.replyText(roomId, event, 'Song not found.');

    const track = await this.client.spotify.getTrack(trackUrl);
    const artist = track.artists[0];

    if (!existsSync(`/music/${artist}`))
      mkdirSync(`/music/${artist}`);

    await this.client.spotify.downloadTrack(trackUrl, `/music/${artist}/${track.name}.mp3`);

    return this.client.replyText(roomId, event, `Successfully downloaded: ${track.name}`);
  }
}
