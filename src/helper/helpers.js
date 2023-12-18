const windRu = {
  0.2: 'Штиль',
  1.5: 'Слабый ветер',
  3.3: 'Легкий ветерок',
  5.4: 'Слабый ветер',
  7.9: 'Умеренный ветер',
  10.7: 'Свежий ветер',
  13.8: 'Сильный ветер',
  17.1: 'Крепкий ветер',
  20.7: 'Очень крепкий ветер',
  24.4: 'Шторм',
  28.4: 'Сильный шторм',
  32.6: 'Жестокий шторм',
  Infinity: 'Ураган',
};

export function forceWind(y) {
  const x = y.toFixed(1);
  for (const [force, description] of Object.entries(windRu)) {
    if (x <= force) {
      return description;
    }
  }
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
