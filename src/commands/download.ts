// Import classes, types & constants
import type { Client } from '@classes/Client';
import type { CommandContext } from '@typings/command';
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

    const buffer: Buffer = (await this.client.spotify.downloadTrack(trackUrl)) as Buffer;
    
    await this.client.replyText(roomId, event, `Successfully downloaded: ${track.name}`);

    // send the file to the room
    const uri = await this.client.uploadContent(buffer, 'audio/mpeg', `${track.name}.mp3`);
    return this.client.sendMessage(roomId, {
      msgtype: 'm.audio',
      body: track.name,
      url: uri,
      info: {
        mimetype: 'audio/mpeg',
        size: buffer.length,
      }
    });

  }
}
