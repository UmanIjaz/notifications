import { NotificationItem } from "./index.js";
function NotificationsList({ notifications, handleMarkAsRead }) {
  return (
    <div className="notificationsList">
      <div className="header">
        <div className="header-content">
          <h1>Notifications</h1>
          <span>3</span>
        </div>
        <button>Mark all as read</button>
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
