const rosters = require('./rosters');
const positions = rosters.nfl.draftkings.classic;

const convertPlayer = (rawPlayer) => {
  const {
    draftableId,
    salary,
    position,
    projection,
    ownership,
    competition: {
      startTime
    }
  } = rawPlayer;

  const playerPositions = position.split('/');
  const primaryPosition = playerPositions.shift();

  const player = positions[primaryPosition](projection, salary, ownership, new Date(startTime));
  playerPositions.forEach((extraPosition) => {
    player[extraPosition] = 1;
  });

  player[draftableId] = 1;

  return player;
};

const convertPlayers = (rawPlayers, rawProjections) => {

  const projections = {};
  rawProjections.forEach((rawProjection) => {
    const { value, ownership, player } = rawProjection;

    projections[player] = {
      value,
      ownership
    };
  });

  const players = {};
  rawPlayers.forEach((rawPlayer) => {
    const { draftableId } = rawPlayer;
    const { value, ownership } = projections[draftableId];

    // Ignore players without a projection
    if (!value) {
      return null;
    }

    const player = {
      ...rawPlayer,
      ownership,
      projection: value
    };

    players[draftableId] = convertPlayer(player);
  });

  return players;
};

const players = {
  convertPlayers
};

export default players;
/*
module.exports = {
  'Taysom Hill': positions.qb(1000, 1000, 100, new Date()),
  'Matt Ryan': positions.qb(100, 10000, 100, new Date()),
  'Drew Brees': positions.qb(100, 10000, 100, new Date()),
  'David Blough': positions.qb(500, 500, 100, new Date()),
  'Devin Singletary': positions.rb(1000, 10000, 100, new Date(3)),
  'Zeke': positions.rb(1000, 1000, 100, new Date(2)),
  'Kamara': positions.rb(100, 10000, 100, new Date()),
  'David Montgomery': positions.rb(145, 3344, 50, new Date(1)),
  'Bo': positions.rb(66, 8745, 50, new Date()),
  'Kenny Golladay': positions.wr(1000, 1000, 100, new Date(10000)),
  'Michael Thomas': positions.wr(100, 6780, 50, new Date()),
  'Cole Beasley': positions.wr(10000, 10000, 100, new Date(0)),
  'Anthony Miller': positions.wr(900, 6788, 50, new Date(54545454545454)),
  'Russell Gage Jr': positions.wr(100, 100, 50, new Date()),
  'Calvin Ridley': positions.wr(1000, 1000, 100, new Date(-1)),
  'Julio Jones': positions.wr(0, 100, 50, new Date()),
  'Dawson Knox': positions.te(5, 1000, 50, new Date()),
  'Jason Whitten': positions.te(15, 1000, 50, new Date()),
  'Jared Cook': positions.te(7, 1000, 50, new Date()),
  'Jaedeanaean Graham': positions.te(25, 4500, 50, new Date()),
  'Bears': positions.dst(5, 1000, 50, new Date()),
  'Lions': positions.dst(5, 1000, 50, new Date()),
  'Tigers': positions.dst(500, 1000, 100, new Date())
}
*/
