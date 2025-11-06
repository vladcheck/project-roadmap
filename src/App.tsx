import { useState } from "react";
import ProgressHeader from "./components/ProgressHeader/ProgressHeader";
import "./App.css";
import { techMock } from "./mock";
import { getTechnologiesByValue } from "./utils/tech";
import Statistics from "./components/Statistics/Statistics";
import QuickActions from "./components/QuickActions/QuickActions";
import { FilterStatus, Status, Tech } from "./types";
import Filters from "./components/Filters/Filters";
import TechList from "./components/TechList/TechList";

export default function App() {
  const [technologies, setTechnologies] = useState(techMock);
  const [filters, setFilters] = useState<{ status: FilterStatus }>({
    status: null,
  });

  const setRandomTechToInProgress = () => {
    const notStartedTechCount = getTechnologiesByValue(
      technologies,
      "status",
      "not-started"
    ).length;
    if (notStartedTechCount > 0) {
      while (true) {
        const randomI = Math.floor(Math.random() * technologies.length);

        if (technologies[randomI].status !== "not-started") continue;

        setTechnologies(
          technologies.map((t, i) => {
            if (i === randomI) {
              t.status = "in-progress";
            }
            return t;
          })
        );
        break;
      }
    }
  };

  return (
    <div id="root">
      <header>
        <h1>Список технологий</h1>
        <ProgressHeader
          totalCount={technologies.length}
          completedCount={
            getTechnologiesByValue(technologies, "status", "completed").length
          }
        />
        <Statistics
          stats={{
            cancelled: getTechnologiesByValue<Status>(
              technologies,
              "status",
              "cancelled"
            ).length,
            inProgress: getTechnologiesByValue<Status>(
              technologies,
              "status",
              "in-progress"
            ).length,
            completed: getTechnologiesByValue<Status>(
              technologies,
              "status",
              "completed"
            ).length,
            notStarted: getTechnologiesByValue<Status>(
              technologies,
              "status",
              "not-started"
            ).length,
          }}
        />
      </header>
      <main>
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
        />
        <Filters filters={filters} setFilters={setFilters} />
        <TechList
          technologies={technologies}
          setTechnologies={setTechnologies}
          filters={filters}
        />
      </main>
    </div>
  );
}
