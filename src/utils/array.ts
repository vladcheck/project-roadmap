export function wrapAround(index: number, arrayLength: number): number {
  if (index < 0) {
    return arrayLength - 1;
  } else if (index >= arrayLength) {
    return 0;
  } else {
    return index;
  }
}
