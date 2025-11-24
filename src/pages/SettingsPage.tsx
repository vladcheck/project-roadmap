import useLocalStorage from "../hooks/useLocalStorage";
import { techMock } from "../mock";

export default function SettingsPage() {
  const [_, setTechnologies] = useLocalStorage("technologies", techMock);

  return (
    <main>
      <section className="settings">
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
      </section>
    </main>
  );
}
