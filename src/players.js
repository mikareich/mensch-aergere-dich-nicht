/**
 * @typedef {object} Player Data of player
 * @property {string} name Name of player
 * @property {(string | number)[]} positions Id of position of figures
 * @property {string} id Id of player
 */

/**
 * Data of all players
 * @type {Player[]}
 */
const players = [
  {
    id: 'playerA',
    name: 'Mika',
    positions: [0, 'baseA-1', 'baseA-2', 'baseA-3']
  },
  {
    id: 'playerB',
    name: 'Nils',
    positions: ['baseB-0', 'baseB-1', 'baseB-2', 'baseB-3']
  },
  {
    id: 'playerC',
    name: 'Matti',
    positions: ['baseC-0', 'baseC-1', 'baseC-2', 'baseC-3']
  },
  {
    id: 'playerD',
    name: 'Minu',
    positions: ['baseD-0', 'baseD-1', 'baseD-2', 'baseD-3']
  }
];

export { players };
