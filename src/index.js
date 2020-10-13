/* eslint-disable no-unused-vars */
import './style.scss';
import { players } from './players';

const allFields = document.querySelectorAll('.field');
const allBases = document.querySelectorAll('.base');
const allDestinations = document.querySelectorAll('.destination');
const diceBTN = document.querySelector('.button');
const currentPlayer = players[0];
/**
 * @returns {number} Number between 1 and 6
 */
function dice() {
  const number = Math.round(Math.random() * 5 + 1);
  return number;
}

diceBTN.addEventListener('click', onDice);

/**
 * Handles User Interaction
 */
function onDice() {
  // get and display dice number
  const diceNumber = dice();
  diceBTN.innerHTML = diceNumber.toString();
  // mark possible moves for player
  markPossibleMoves(currentPlayer, diceNumber);
}

/**
 * Render Figures of all Players by Positions ID
 */
function renderFigures() {
  players.forEach((player) => {
    player.positions.forEach((positionID) => {
      const field = document.getElementById(positionID);
      let { className } = field;
      // remove other players and keep further important classes
      className = className.replace(/player?(A|B|C|D)/, '');
      // add current figure to this field
      className = `${className} ${player.id}`;
      field.className = className;
    });
  });
}

/**
 *
 * @param {players[0]} player Player who moves
 * @param {number} diceNumber Number of steps to move
 */
function markPossibleMoves(player, diceNumber) {
  const figuresInGame = player.positions.filter(
    (position) => typeof position === 'number'
  );

  const moves = figuresInGame.map((positionID) => {
    const passedFields = [];
    const targetFieldID = positionID + diceNumber;
    const targetField = document.getElementById(targetFieldID);
    // check if move is valid
    if (!targetField.classList.contains(player.id)) {
      // add field to pass
      for (let i = 1; i < diceNumber + 1; i++) {
        passedFields.push(positionID + i);
      }
    }
    return passedFields;
  });

  // render possible moves
  moves.flat().forEach((positionID) => {
    const field = document.getElementById(positionID.toString());
    field.classList.add(`${player.id}-dark`);
  });
}

renderFigures();
