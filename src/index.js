/* eslint-disable no-unused-vars */
import './style.scss';
import { players } from './players';

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
