import { Status, Tech } from "../types";

export function sortById(technologies: Tech[]) {
  return technologies.sort((t1, t2) => (t1.id < t2.id ? -1 : 1));
}

export const getTechnologiesByValue = <T>(
  technologies: Tech[],
  key: keyof Tech,
  value: T,
) => technologies.filter((t) => t[key] === value);

export const getTechnologiesByStatus = (technologies: Tech[], status: Status) =>
  technologies.filter((t) => t.status === status);

export function exportTechnologies(technologies: Tech[]) {
  const blob = new Blob([JSON.stringify(technologies, null, 2)], {
    type: "json",
  });
  const urlForDownload = window.URL.createObjectURL(blob);
  const linkElement = document.createElement("a");

  linkElement.href = urlForDownload;
  linkElement.download = "technologies.json";
  linkElement.click();

  URL.revokeObjectURL(urlForDownload);
}
