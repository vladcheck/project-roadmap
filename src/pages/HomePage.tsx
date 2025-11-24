import { useEffect } from "react";
import QuickActions from "../components/QuickActions/QuickActions";
import Statistics from "../components/Statistics/Statistics";
import TechFilterPanel from "../components/TechFilterPanel/TechFilterPanel";
import TechList from "../components/TechList/TechList";
import useLocalStorage from "../hooks/useLocalStorage";
import useTechnologies from "../hooks/useTechnologies";
import { TechFilters, Tech } from "../types";
import { getTechnologiesByStatus, exportTechnologies } from "../utils/tech";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Icon from "../components/Icon/Icon";

const TECHNOLOGIES_KEY = "technologies";

export default function HomePage() {
  const { technologies, setTechnologies, updateStatus, progress } =
    useTechnologies();
  const [filters, setFilters] = useLocalStorage<TechFilters>("filters", {});

  useEffect(() => {
    localStorage.setItem(TECHNOLOGIES_KEY, JSON.stringify(technologies));
  }, [technologies]);

  const setRandomTechToInProgress = () => {
    const notStartedTechCount = getTechnologiesByStatus(
      technologies,
      "not-started",
    ).length;

    if (notStartedTechCount > 0) {
      while (true) {
        const randomI = Math.floor(Math.random() * technologies.length);

        if (technologies[randomI].status === "not-started") {
          updateStatus(technologies[randomI].id);
          break;
        }
      }
    }
  };

  return (
    <div id="root">
      <aside>
        <header>
          <h1>
            Roadmapper<sup style={{ fontSize: "8px" }}>TM</sup>
          </h1>
          <div>
            <button>
              <Link to="/settings">
                <Icon src="/icons/icons8-cog-50.png" alt="Настройки" />
              </Link>
            </button>
          </div>
        </header>
        <Statistics
          stats={{
            progress,
            totalCount: technologies.length,
            completedCount: getTechnologiesByStatus(technologies, "completed")
              .length,
            cancelled: getTechnologiesByStatus(technologies, "cancelled")
              .length,
            inProgress: getTechnologiesByStatus(technologies, "in-progress")
              .length,
            completed: getTechnologiesByStatus(technologies, "completed")
              .length,
            notStarted: getTechnologiesByStatus(technologies, "not-started")
              .length,
          }}
        />
        <QuickActions
          setAllToCompleted={() => {
            const completedTechnologies: Tech[] = technologies.map((t) => {
              return { ...t, status: "completed" };
            });
            setTechnologies(completedTechnologies);
          }}
          resetAll={() => {
            const notStartedTechnologies: Tech[] = technologies.map((t) => {
              return { ...t, status: "not-started" };
            });
            setTechnologies(notStartedTechnologies);
          }}
          setRandomTechToInProgress={setRandomTechToInProgress}
          exportTechnologies={() => {
            exportTechnologies(technologies);
          }}
        />
        <TechFilterPanel filters={filters} setFilters={setFilters} />
      </aside>
      <main>
        <TechList filters={filters} />
      </main>
    </div>
  );
}
