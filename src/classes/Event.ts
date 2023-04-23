// Import types
import type { Client } from '@classes/Client';

// Export class
export abstract class Event {
  // Properties
  public client: Client;

  // Constructor
  protected constructor(client: Client) {
    this.client = client;
  }

  // Methods
  abstract run(...args: unknown[]): Promise<unknown> | unknown;
}
