export function forceWind(y) {
  const x = y.toFixed(1);
  if (x <= 0.2) return 'Calm';
  if ((x >= 0.3) & (x <= 1.5)) return 'Light Air';
  if ((x >= 1.6) & (x <= 3.3)) return 'Light Breeze';
  if ((x >= 3.4) & (x <= 5.4)) return 'Gentle Breeze';
  if ((x >= 5.5) & (x <= 7.9)) return 'Moderate Breeze';
  if ((x >= 8) & (x <= 10.7)) return 'Fresh Breeze';
  if ((x >= 10.8) & (x <= 13.8)) return 'Strong Breeze';
  if ((x >= 13.9) & (x <= 17.1)) return 'Near Gale';
  if ((x >= 17.2) & (x <= 20.7)) return 'Gale';
  if ((x >= 20.8) & (x <= 24.4)) return 'Strong Gale';
  if ((x >= 24.5) & (x <= 28.4)) return 'Storm';
  if ((x >= 28.5) & (x <= 32.6)) return 'Violent Storm';
  if (x >= 32.7) return 'Hurricane';
}

export function directionWind(x) {
  if (x == 360 || x == 0) return 'North';
  if ((x > 0) & (x < 90)) return 'North East';
  if (x == 90) return 'East';
  if ((x > 90) & (x < 180)) return 'South East';
  if (x == 180) return 'South';
  if ((x > 180) & (x < 270)) return 'South West';
  if (x == 270) return 'West';
  if ((x > 270) & (x < 360)) return 'North West';
}
