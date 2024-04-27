export const toHashMap = <T>(array: T[], primaryKey = 'id'): Record<string, T> => {
  return array.reduce((acc, item) => {
    acc[item[primaryKey]] = item;

    return acc;
  }, {});
};
