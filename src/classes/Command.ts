// Import types
import type { CommandContext, CommandOptions } from '@typings/command';
import type { Client } from '@classes/Client';

// Export class
export abstract class Command {
  // Properties
  name: string;
  description: string;

  // Constructor
  constructor(public readonly client: Client, options: CommandOptions) {
    this.name = options.name;
    this.description = options.description;
  }

  // Methods
  abstract run(ctx: CommandContext): Promise<unknown> | unknown;
}
