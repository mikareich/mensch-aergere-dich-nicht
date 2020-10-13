import './style.scss';

/**
 * @returns {number} Number between 1 and 6
 */
function dice() {
  const number = Math.round(Math.random() * 6);
  return number;
}
