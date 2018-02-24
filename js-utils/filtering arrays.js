/**
 * This will filter coins object to return array with only 1 element: object with .name property equal to "coinName"
 */
const coinData = this.coins.filter((_coin) => _coin.name === coinName)[0];