import { UserAvtar, NotificationContent, MessagePrev } from "./index.js";

function NotificationItem({ notification, handleMarkAsRead }) {
  return (
    <div
      className="notificationItem"
      style={
        !notification.read
          ? { background: "hsl(205.71deg 63.64% 97.84%)" }
          : null
      }
      onClick={() => handleMarkAsRead(notification.id)}
    >
      <div>
        <div style={{ display: "flex", gap: "16px" }}>
          <UserAvtar img={notification.img} />
          <div
            style={{ display: "flex", gap: "16px", flexDirection: "column" }}
          >
            <NotificationContent
              type={notification.type}
              userName={notification.user}
              time={notification.time}
              read={notification.read}
              content={notification.content}
            />

            {notification.type === "private_message" && (
              <MessagePrev content={notification.content} />
            )}
          </div>
        </div>

        {notification.userPost && (
          <img src="/assets/images/image-chess.webp" alt="User's Post" className="user-post" />
        )}
      </div>
    </div>
  );
}
export default NotificationItem;
