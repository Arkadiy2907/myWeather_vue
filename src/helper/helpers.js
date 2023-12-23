const strong = {
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

export const forceWind = (y) => {
  const x = y.toFixed(1);
  for (const [force, description] of Object.entries(strong)) {
    if (x <= force) {
      return description;
    }
  }
};

export const getKmHour = (x) => Math.round((x / 1000) * 3600);

const direction = [
  'северный',
  'северо восточный',
  'восточный',
  'юго восточный',
  'южный',
  'юго западный',
  'западный',
  'северо западный',
];

export const directionWind = (x) => {
  const index = Math.floor((x % 360) / 45);
  return direction[index];
};

const sky = {
  ['01n' || '01d']: 'чистое небо',
  ['02d' || '02n']: 'малооблачно',
  ['03d' || '03n']: 'небольшие облака',
  ['04d' || '04n']: 'облачно с просветами',
  ['09d' || '09n']: 'ливень',
  ['10d' || '10n']: 'дождь',
  ['11d' || '11n']: 'гроза',
  ['13d' || '13n']: 'снег',
  ['50d' || '50n']: 'туман',
};

export const getSky = (x) => {
  for (const [icon, description] of Object.entries(sky)) {
    if (x <= icon) {
      return description;
    }
  }
};
