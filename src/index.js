import './style.scss';

const allFields = document.querySelectorAll('.field');
const allBases = document.querySelectorAll('.base');
const allDestinations = document.querySelectorAll('.destination');

/**
 * @returns {number} Number between 1 and 6
 */
function dice() {
  const number = Math.round(Math.random() * 6);
  return number;
}
