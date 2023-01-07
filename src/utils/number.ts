export function roundTo2Decimal(num: number): string {
  return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2);
}
