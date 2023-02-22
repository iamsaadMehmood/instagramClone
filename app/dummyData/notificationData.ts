import {INotification} from '../model/INotification';
export const notificationData: INotification[] = [
  {
    id: '1',
    description: 'liked your post',
    date: new Date().toString(),
    post: {
      id: '1',
      attachments: [
        'https://images.unsplash.com/photo-1676309281910-2403f904aa3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      ],
    },
    user: {
      id: '1',
      username: 'jake',
      profilePic:
        'https://images.unsplash.com/photo-1670967665715-b611df2db870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
  },
  {
    id: '2',
    description: 'liked your post',
    date: new Date().toString(),
    post: {
      id: '1',
      attachments: [
        'https://images.unsplash.com/photo-1676928521690-18a513b1f37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
        'https://images.unsplash.com/photo-1676928859011-41fadd0a1249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
      ],
    },
    user: {
      id: '2',
      username: 'jake',
      profilePic:
        'https://images.unsplash.com/photo-1670967665715-b611df2db870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    comment: {
      id: '1',
      description: 'Good Picture',
    },
  },
  {
    id: '3',
    description: 'liked your post',
    date: new Date().toString(),
    post: {
      id: '1',
      attachments: [
        'https://images.unsplash.com/photo-1676928521690-18a513b1f37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
      ],
    },
    user: {
      id: '3',
      username: 'jake',
      profilePic:
        'https://images.unsplash.com/photo-1670967665715-b611df2db870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
  },
  {
    id: '4',
    description: 'liked your post',
    date: new Date().toString(),
    post: {
      id: '1',
      attachments: [
        'https://images.unsplash.com/photo-1676928521690-18a513b1f37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
      ],
    },
    user: {
      id: '3',
      username: 'jake',
      profilePic:
        'https://images.unsplash.com/photo-1670967665715-b611df2db870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    comment: {
      id: '1',
      description: 'Good Picture',
    },
  },
  {
    id: '5',
    description: 'liked your post',
    date: new Date().toString(),
    post: {
      id: '1',
      attachments: [
        'https://images.unsplash.com/photo-1676928521690-18a513b1f37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80',
      ],
    },
    user: {
      id: '5',
      username: 'jake',
      profilePic:
        'https://images.unsplash.com/photo-1670967665715-b611df2db870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    comment: {
      id: '1',
      description: 'Good Picture',
    },
  },
  {
    id: '6',
    description: 'liked your comment',

    date: new Date().toString(),
    user: {
      id: '2',
      username: 'jake',
      profilePic:
        'https://images.unsplash.com/photo-1670967665715-b611df2db870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    },
    comment: {
      id: '1',
      description: 'Good Picture',
    },
  },
];
