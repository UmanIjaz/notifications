import "./styles/App.css";
import notifications from "./data.js";

function App() {
  return <NotificationsList notifications={notifications} />;
}
export default App;

function NotificationsList({ notifications }) {
  return notifications.map((notification) => {
    return (
      <NotificationItem key={notification.id} notification={notification} />
    );
  });
}

function NotificationItem({ notification }) {
  return (
    <div>
      <userAvtar img={notification.img} />
      <NotificationContent
        type={notification.type}
        userName={notification.user}
        time={notification.time}
      />
    </div>
  );
}

function userAvtar(img) {
  return (
    <div>
      <img src={img} />
    </div>
  );
}

function NotificationContent({ type, userName, time }) {
  let message;

  switch (type) {
    case "reaction":
      message = (
        <>
          {userName} reacted to your recent post{" "}
          <strong style={{ color: "hsl(219, 85%, 26%)" }}>
            My first tournament today
          </strong>
        </>
      );
      break;

    case "follow":
      message = <>{userName} followed you</>;
      break;

    case "group_join":
      message = (
        <>
          {userName} has joined your group{" "}
          <strong style={{ color: "hsl(219, 85%, 26%)" }}>
            My first tournament today
          </strong>
        </>
      );
      break;

    case "private_message":
      message = <>{userName} sent you a private message</>;
      break;

    case "comment":
      message = <>{userName} commented on your post</>;
      break;

    case "group_leave":
      message = (
        <>
          {userName} left the group <strong>Class group</strong>
        </>
      );
      break;

    default:
      message = <>There are no notifications for you</>;
      break;
  }

  return (
    <div>
      {message}
      <p style={{ color: "hsl(210, 60%, 98%)" }}>{time}</p>
    </div>
  );
}
