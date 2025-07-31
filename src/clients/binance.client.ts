import axios from 'axios';
import { config } from '../config';

export async function fetchBinancePrice(): Promise<{ bid: number; ask: number }> {
  const url = `${config.binanceApiUrl}?symbol=${config.symbol}`;
  const response = await axios.get(url);
  const { bidPrice, askPrice } = response.data;

  return {
    bid: parseFloat(bidPrice),
    ask: parseFloat(askPrice),
  };
}
