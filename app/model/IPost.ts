import { IAttachment } from './IAttachment';

export interface IPost {
  id: string;
  attachments: IAttachment[];
  username: string;
  userProfilePic: string;
}
