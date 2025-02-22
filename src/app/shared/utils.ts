export const range = (start: number, end: number): number[] => {
  return [...Array(end - start).keys()].map((num) => num + start);
};

export const pluck = (elements: any[], field: string) => {
  return elements.map((element) => element[field]);
};
