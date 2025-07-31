import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: Number(process.env.PORT) || 3000,
  updateIntervalCron: process.env.UPDATE_INTERVAL_CRON || '*/10 * * * * *',
  commissionPercent: Number(process.env.SERVICE_COMMISSION_PERCENT) || 0.01,
  binanceApiUrl: process.env.BINANCE_API_URL || 'https://api.binance.com/api/v3/ticker/bookTicker',
  symbol: process.env.BINANCE_SYMBOL || 'BTCUSDT',
};
