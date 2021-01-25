"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax = void 0;
const Gold_1 = require("@civ-clone/base-city-yield-gold/Gold");
const TradeRate_1 = require("@civ-clone/core-trade-rate/TradeRate");
class Tax extends TradeRate_1.default {
}
exports.Tax = Tax;
Tax.tradeYield = Gold_1.default;
exports.default = Tax;
//# sourceMappingURL=Tax.js.map