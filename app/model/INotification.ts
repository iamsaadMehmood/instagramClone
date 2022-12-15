import {IPost} from './IPost';
export interface INotification {
  id: string;
  description: string;
  date: string;
  user: {
    id: string;
    username: string;
    profilePic: string;
  };
  comment?: {
    id: string;
    description: string;
  };
  post?: {
    id: string;
    attachments: string[];
  };
}
