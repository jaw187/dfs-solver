class OwnershipWatcher {
  constructor ({ players, n }) {
    const pool = this.pool = players;

    const lineupsAllowed = {};
    Object.keys(pool).forEach((player) => lineupsAllowed[player] = (pool[player].ownership/100) * n);

    this.lineupsAllowed = { ...lineupsAllowed };
    this.originalLineupsAllowed = { ...lineupsAllowed };
  }

  update(players) {
    const { lineupsAllowed } = this;
    players.forEach((player) => {
      --lineupsAllowed[player];

      // Remove players from pool
      if (lineupsAllowed[player] < 1) {
        delete this.pool[player];
      }
    });
  }

  validate(players) {
    const { lineupsAllowed } = this;
    return players.filter((player) => lineupsAllowed[player] < 1).length === 0;
  }
}

module.exports = OwnershipWatcher;
