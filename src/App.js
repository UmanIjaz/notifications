import "./styles/index.css";
import initialNotificatoins from "./data.js";
import { NotificationsList } from "./components/index.js";
import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState(initialNotificatoins);
  function markAsRead(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  }
  return (
    <section id="wrapper">
      <NotificationsList
        notifications={notifications}
        handleMarkAsRead={markAsRead}
      />
    </section>
  );
}
export default App;
