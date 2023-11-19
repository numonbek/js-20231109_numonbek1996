/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (!obj || typeof obj !== 'object') return undefined

  return Object.fromEntries(Object.entries(obj).map(a => a.reverse()))
}