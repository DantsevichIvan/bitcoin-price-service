export function setIntervalAsync(fn: () => Promise<void>, ms: number) {
  fn();
  return setInterval(() => {
    fn().catch(err => console.error('Interval error:', err));
  }, ms);
}
