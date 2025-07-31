import cron from 'node-cron';
import { config } from '../config';
import { priceService } from '../services';

export function scheduleUpdatePriceJob() {
  return cron.schedule(config.updateIntervalCron, async () => {
    try {
      await priceService.update();
      console.log('[Job] Price updated');
    } catch (err) {
      console.error('[Job] Failed to update price:', err);
    }
  });
}
