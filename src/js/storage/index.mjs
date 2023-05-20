/**
 * This export function saves profile info and token separately in local storage.
 * @param {string} key
 * @param {number} value
 */

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * This export function retrieves token stored in local storage.
 * @param {number} key Parameter with token data.
 * @returns Returns nothing.
 */

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * This export function removes token.
 * @param {number} key Parameter with token data.
 */

export function remove(key) {
  localStorage.removeItem(key);
}

export function update(key, property, value) {
  const obj = load(key);
  obj[property] = value;
  save(key, obj);
}
