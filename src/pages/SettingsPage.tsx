import Row from "../components/Row/Row";
import useLocalStorage from "../hooks/useLocalStorage";
import useTechnologies from "../hooks/useTechnologies";
import translate from "../utils/i18n";
import "./SettingsPage.css";

export default function SettingsPage() {
  const { setTechnologies } = useTechnologies();
  const [username, setUsername] = useLocalStorage("username", "Гость");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [notifications, setNotifications] = useLocalStorage(
    "notifications",
    true,
  );

  return (
    <section className="user-settings">
      <h2>Настройки пользователя</h2>
      <Row>
        <label>Имя пользователя:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Введите ваше имя"
        />
      </Row>
      <Row>
        <label>Тема оформления:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Светлая</option>
          <option value="dark">Темная</option>
          <option value="auto">Авто</option>
        </select>
      </Row>
      <Row>
        <label htmlFor="turn-on-notifications">Включить уведомления</label>
        <input
          id="turn-on-notifications"
          name="turnOnNotifications"
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
        />
      </Row>
      <Row>
        <button
          onClick={() => {
            const answer = prompt(
              "Вы точно этого хотите?",
            )?.toLocaleLowerCase();
            if (answer === "yes" || answer === "y" || answer === "да") {
              setTechnologies([]);
              alert("localStorage очищен.");
            }
          }}
        >
          Очистить <code>localStorage</code>
        </button>
      </Row>
      <hr />
      <div className="current-settings">
        <h3>Текущие настройки</h3>
        <Row>
          <span>Имя</span>
          <span>{username}</span>
        </Row>
        <Row>
          <span>Тема</span>
          <span>{translate(theme)}</span>
        </Row>
        <Row>
          <span>Уведомления</span>
          <span>{notifications ? "Включены" : "Выключены"}</span>
        </Row>
      </div>
    </section>
  );
}
