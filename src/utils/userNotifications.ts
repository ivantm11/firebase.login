import { Store } from 'react-notifications-component';

type NotificationProps = {
  title?: string;
  message?: string;
  type: 'danger' | 'default' | 'info' | 'success' | 'warning';
};

const addUserNotification = ({ title, message, type }: NotificationProps) =>
  Store.addNotification({
    title,
    message,
    type,
    container: 'top-right',
    dismiss: {
      duration: 5000,
      onScreen: true,
      pauseOnHover: true
    }
  });

export default addUserNotification;
