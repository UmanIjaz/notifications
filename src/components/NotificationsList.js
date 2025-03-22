import { NotificationItem } from "./index.js";
function NotificationsList({
  notifications,
  handleMarkAsRead,
  handleMarkAllRead,
  unreadNotifications,
}) {
  return (
    <div className="notificationsList">
      <div className="header">
        <div className="header-content">
          <h1>Notifications</h1>
          <span>{unreadNotifications}</span>
        </div>
        <button onClick={handleMarkAllRead}>Mark all as read</button>
      </div>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          handleMarkAsRead={handleMarkAsRead}
        />
      ))}
    </div>
  );
}
export default NotificationsList;
