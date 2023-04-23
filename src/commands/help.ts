// Import classes, types & constants
import type { Client } from '@classes/Client';
import type { CommandContext } from '@typings/command';
import { Command } from '@classes/Command';

// Export class
export class Help extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'help',
      description: 'Get a list of commands.'
    });
  }

  run({ event, roomId }: CommandContext): Promise<string> {
    let list = '';

    this.client.commands.forEach(c => (list += `${c.name} - ${c.description}\n`));
    return this.client.replyText(roomId, event, list);
  }
}
