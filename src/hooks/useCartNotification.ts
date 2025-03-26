import { useState, useEffect } from 'react';

interface CartNotificationProps {
  message: string;
  icon?: string;
}

export const useCartNotification = () => {
  const [notification, setNotification] = useState<CartNotificationProps | null>(null);

  const showNotification = (message: string, icon?: string) => {
    setNotification({ message, icon });
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return { notification, showNotification };
};

export const CartNotification = () => {
  const { notification } = useCartNotification();

  if (!notification) return null;

  return (
    <div className="cart-notification show">
      {notification.icon && <i className={notification.icon}></i>}
      <p>{notification.message}</p>
    </div>
  );
}; 