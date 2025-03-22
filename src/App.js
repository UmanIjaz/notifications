import "./styles/index.css";
import notifications from "./data.js";
import { NotificationsList } from "./components/index.js";

function App() {
  return (
    <section id="wrapper">
      <NotificationsList notifications={notifications} />
    </section>
  );
}
export default App;
