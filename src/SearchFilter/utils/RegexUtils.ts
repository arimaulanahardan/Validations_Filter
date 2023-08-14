export const createRegex = (searchInput: string): RegExp => {
  return new RegExp(`^${searchInput}`, 'i');
};
