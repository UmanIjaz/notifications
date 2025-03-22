import "./styles/index.css";
import initialNotificatoins from "./data.js";
import { NotificationsList } from "./components/index.js";
import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState(initialNotificatoins);

  const unreadNotifications = notifications.filter(
    (n) => n.read === false
  ).length;

  function markAsRead(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  }

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <section id="wrapper">
      <NotificationsList
        notifications={notifications}
        handleMarkAsRead={markAsRead}
        handleMarkAllRead={markAllRead}
        unreadNotifications={unreadNotifications}
      />
    </section>
  );
}
export default App;
