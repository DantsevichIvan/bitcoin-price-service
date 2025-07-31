import { fetchBinancePrice } from '../../clients/binance.client';
import { config } from '../../config';
import { PriceData } from '../../types/price';

export class PriceService {
  #price: PriceData | null = null;

  async update(): Promise<void> {
    try {
      const raw = await fetchBinancePrice();
      const commission = config.commissionPercent / 100;

      const bid = raw.bid * (1 - commission);
      const ask = raw.ask * (1 + commission);
      const mid = (bid + ask) / 2;

      this.#price = {
        bid: parseFloat(bid.toFixed(2)),
        ask: parseFloat(ask.toFixed(2)),
        mid: parseFloat(mid.toFixed(2)),
        timestamp: Date.now(),
      };
    } catch (error) {
      console.error('[PriceService] Failed to fetch price:', error);
    }
  }

  getPrice(): PriceData | null {
    return this.#price;
  }
}
