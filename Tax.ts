import Gold from '@civ-clone/base-city-yield-gold/Gold';
import TradeRate from '@civ-clone/core-trade-rate/TradeRate';
import Yield from '@civ-clone/core-yield/Yield';

export class Tax extends TradeRate {
  static tradeYield: typeof Yield = Gold;
}

export default Tax;
