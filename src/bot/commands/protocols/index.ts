import { Client, Message } from '@open-wa/wa-automate';

export enum CommandType {
  UTILS = 'utils',
  FUNNY = 'funny',
  GROUP_MANAGEMENT = 'groupManagement',
  MEDIA = 'media',
  BOT_STATISTICS = 'botStatistics',
  BOT_ADMINISTRATION = 'botAdministration',
}

export interface CommandData {
  command: string;
  description: string;
  func: Command;
  category: CommandType;
  onlyForGroups?: boolean;
  allowedUsers?: string | string[]; // TODO: add roles
  hidden?: boolean;
}

export interface CommandParams {
  client: Client;
  message: Message;
  value?: string;
}

export type Command = (params: CommandParams) => Promise<void>;
