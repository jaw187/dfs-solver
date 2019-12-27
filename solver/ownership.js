class OwnershipWatcher {
  constructor ({ players, n, stack, lineupStrings }) {
    const pool = this.pool = players;

    const lineupsAllowed = {};
    Object.keys(pool).forEach((player) => {
      const count = (pool[player].ownership/100) * n;
      lineupsAllowed[player] = count >= 1 ? lineupsAllowed : 1;
    });

    this.lineupsAllowed = { ...lineupsAllowed };
    this.originalLineupsAllowed = { ...lineupsAllowed };
    this.stack = stack.map((player) => player.draftableId);
    this.lineupStrings = lineupStrings;
  }

  update(players) {
    const { lineupsAllowed, lineupStrings } = this;

    const lineupString = players.sort((a, b) => a > b).join('');
    lineupStrings.push(lineupString);

    players.forEach((player) => {
      --lineupsAllowed[player];

      // Remove players from pool
      if (lineupsAllowed[player] < 1 && !(this.stack.includes(Number(player)))) {
        delete this.pool[player];
      }
    });
  }

  validate(players) {
    const { lineupsAllowed, lineupStrings } = this;
    const lineupString = players.sort((a, b) => a > b).join('');

    if (lineupStrings.includes(lineupString)) {
      return false;
    }

    const ineligiblePlayers = players.filter((player) => {
      if (lineupsAllowed[player] < 1) {
        if (this.stack.includes(Number(player))) {
          return false;
        }
        return true;
      }

      return false;
    });

    return ineligiblePlayers.length === 0;
  }
}

module.exports = OwnershipWatcher;
