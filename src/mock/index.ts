import { Difficulty, Tech } from "../types";
import { v4 as uuidv4 } from "uuid";

export const techMock: Tech[] = [
  {
    id: uuidv4(),
    title: "React Components",
    description: "Изучение базовых компонентов",
    status: "completed",
    deadline: "2025",
    difficulty: Difficulty.Easy,
    resources: [],
  },
  {
    id: uuidv4(),
    title: "JSX Syntax",
    description: "Освоение синтаксиса JSX",
    status: "completed",
    deadline: "2025",
    difficulty: Difficulty.Trivial,
    resources: [],
  },
  {
    id: uuidv4(),
    title: "State Management",
    description: "Работа с состоянием компонентов",
    status: "completed",
    deadline: "2025",
    difficulty: Difficulty.Medium,
    resources: [],
  },
  {
    id: uuidv4(),
    title: "Props",
    description: "Передача пропсов компонентам",
    status: "completed",
    deadline: "2025",
    difficulty: Difficulty.Easy,
    resources: [],
  },
  {
    id: uuidv4(),
    title: "useRef()",
    description: "Для чего нужен useRef и как им пользоваться",
    status: "not-started",
    deadline: "2025",
    difficulty: Difficulty.Easy,
    resources: [],
  },
  {
    id: uuidv4(),
    title: "useMemo()",
    description: "Для чего нужен useMemo и как им пользоваться",
    status: "not-started",
    deadline: "2025",
    difficulty: Difficulty.Medium,
    resources: [],
  },
  {
    id: uuidv4(),
    title: "useContext()",
    description:
      "Для чего нужен useContext и как им пользоваться, чем он отличается от useState()",
    status: "completed",
    difficulty: Difficulty.Hard,
    resources: [],
  },
];
