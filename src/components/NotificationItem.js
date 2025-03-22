import { UserAvtar, NotificationContent, MessagePrev } from "./index.js";
function NotificationItem({ notification }) {
  return (
    <div
      className="notificationItem"
      style={
        !notification.read
          ? { background: "hsl(205.71deg 63.64% 97.84%)" }
          : null
      }
    >
      <UserAvtar img={notification.img} />
      <div>
        <NotificationContent
          type={notification.type}
          userName={notification.user}
          time={notification.time}
          read={notification.read}
        />
        {notification.type === "private_message" && (
          <MessagePrev content={notification.content} />
        )}
      </div>
    </div>
  );
}
export default NotificationItem;
