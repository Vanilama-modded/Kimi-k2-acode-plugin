const PREFIX = "kimi.";

export const get = (k) => localStorage.getItem(PREFIX + k);
export const set = (k, v) => localStorage.setItem(PREFIX + k, v);
