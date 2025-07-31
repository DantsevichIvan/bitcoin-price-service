import { scheduleUpdatePriceJob } from './updatePrice.job';

export function startAllJobs() {
  console.log('[JobScheduler] Starting scheduled jobs...');

  const jobs = [scheduleUpdatePriceJob()];

  jobs.forEach((job) => job.start());
}
