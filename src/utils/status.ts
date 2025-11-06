import { Status } from "../types";
import { wrapAround } from "./array";

const STATUS_ORDER: Status[] = [
  "cancelled",
  "not-started",
  "in-progress",
  "completed",
];

export function getPreviousStatus(status: Status): Status {
  const i = STATUS_ORDER.indexOf(status);
  const previousI = wrapAround(i - 1, STATUS_ORDER.length);
  return STATUS_ORDER[previousI];
}

export function getNextStatus(status: Status): Status {
  const i = STATUS_ORDER.indexOf(status);
  const nextI = wrapAround(i + 1, STATUS_ORDER.length);
  return STATUS_ORDER[nextI];
}
