const strong = {
  0.2: 'штиль',
  1.5: 'слабый',
  3.3: 'легкий',
  5.4: 'слабый',
  7.9: 'умеренный',
  10.7: 'свежий',
  13.8: 'сильный',
  17.1: 'крепкий',
  20.7: 'очень крепкий',
  24.4: 'шторм',
  28.4: 'сильный шторм',
  32.6: 'жестокий шторм',
  Infinity: 'ураган',
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
  'северо-вос',
  'восточный',
  'юго-вос',
  'южный',
  'юго-зап',
  'западный',
  'северо-зап',
];

export const directionWind = (x) => {
  const index = Math.floor((x % 360) / 45);
  return direction[index];
};

const sky = {
  ['01d']: 'чистое небо',
  ['02d']: 'малооблачно',
  ['03d']: 'небольшие облака',
  ['04d']: 'облачно с просветами',
  ['09d']: 'ливень',
  ['10d']: 'дождь',
  ['11d']: 'гроза',
  ['13d']: 'снег',
  ['50d']: 'туман',
  ['01n']: 'чистое небо',
  ['02n']: 'малооблачно',
  ['03n']: 'небольшие облака',
  ['04n']: 'облачно с просветами',
  ['09n']: 'ливень',
  ['10n']: 'дождь',
  ['11n']: 'гроза',
  ['13n']: 'снег',
  ['50n']: 'туман',
};

export const getSky = (x) => {
  for (const [icon, description] of Object.entries(sky)) {
    if (x === icon) {
      return description;
    }
  }
};

export const localeDateNow = () =>
  new Date().toLocaleDateString('eu-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const localeDateDay = (x) =>
  new Date(x * 1000).toLocaleDateString('eu-us', {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
  });

export const localeDateTime = (x) =>
  new Date(x * 1000).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
