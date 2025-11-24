const translations: Record<string, string> = {
  completed: "Изучена",
  cancelled: "Не будет изучена",
  "in-progress": "Изучается",
  "not-started": "Не начата",
  dark: "Темная",
  light: "Светлая",
};

export default function translate(key: string): string {
  return translations[key] ?? key;
}
