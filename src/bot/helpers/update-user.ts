import { usersDb } from '@json-db';
import { getNumberFromContactId } from '../utils/get-number-from-contact-id';
import { MessageEventHandler } from '../protocols/message-event-handler';

export const updateUser: MessageEventHandler = ({ message }) => {
  const { id } = message.sender;

  usersDb.updateOrInsert(
    { id },
    {
      id,
      name: message.sender.pushname,
      number: getNumberFromContactId(message.sender.id),
      profilePic: message.sender.profilePicThumbObj.eurl,
    }
  );
};
