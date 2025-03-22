function NotificationContent({ type, userName, time, read, userPost }) {
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
            picture
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
      <span>
        <p>
          {message}
          {!read && <span className="redDot"></span>}
        </p>
      </span>
      <p>{time}</p>
    </div>
  );
}
export default NotificationContent;
