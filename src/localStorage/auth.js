const initLocalStorageApi = (key) => ({
  get: () => localStorage.getItem(key),
  set: (newValue) => localStorage.setItem(key, newValue),
  remove: () => localStorage.removeItem(key),
});
const LS_PREFIX = "Healvai-";
const withPrefix = (key) => `${LS_PREFIX}${key}`;
export const langLs = initLocalStorageApi(withPrefix("lang"));
