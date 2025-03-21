import "./styles/index.css";
import notifications from "./data.js";

function App() {
  return (
    <section id="wrapper">
      <NotificationsList notifications={notifications} />
    </section>
  );
}
export default App;

function NotificationsList({ notifications }) {
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
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

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
      <UserAvatar img={notification.img} />
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

function UserAvatar({ img }) {
  return (
    <div className="userAvatar">
      <img src={img} className="user-avtar" alt="User Avatar" />
    </div>
  );
}

function MessagePrev({ content }) {
  return <div className="messagePrev">{content}</div>;
}

function NotificationContent({ type, userName, time, read }) {
  let message;

  switch (type) {
    case "reaction":
      message = (
        <span>
          <span>
            <strong className="user-name">{userName}</strong> reacted to your
            post{" "}
          </span>
          <strong style={{ color: "hsl(219, 85%, 26%)" }}>
            My first tournament today
          </strong>
        </span>
      );
      break;

    case "follow":
      message = (
        <span>
          <span>
            <strong className="user-name">{userName}</strong> followed you
          </span>
        </span>
      );
      break;

    case "group_join":
      message = (
        <span>
          <span>
            <strong className="user-name">{userName}</strong> has joined your
            group{" "}
          </span>
          <strong style={{ color: "hsl(219, 85%, 26%)" }}>
            My first tournament today
          </strong>
        </span>
      );
      break;

    case "private_message":
      message = (
        <span>
          <span>
            <strong className="user-name">{userName}</strong> sent you a private
            message
          </span>
        </span>
      );
      break;

    case "comment":
      message = (
        <span>
          <span>
            <strong className="user-name">{userName}</strong> commented on your
            post
          </span>
        </span>
      );
      break;

    case "group_leave":
      message = (
        <span>
          <span>
            <strong className="user-name">{userName}</strong> left the group{" "}
          </span>
          <strong>Class group</strong>
        </span>
      );
      break;

    default:
      message = (
        <span>
          <span>There are no notifications for you</span>
        </span>
      );
      break;
  }

  return (
    <div className="notificationContent">
      <p>
        {message}
        {!read && <span className="redDot"></span>}
      </p>
      <p>{time}</p>
    </div>
  );
}
