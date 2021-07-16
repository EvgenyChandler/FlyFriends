/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
const mongoose = require('mongoose')
const Iata = require('./models/iata.model')
async function main() {
  await mongoose.connect(
    'mongodb+srv://flyfriends:Qverty897142536p7@flyfriends.1j62g.mongodb.net/Fly-Friends?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('mongoose connected')
    },
  )
  const arr = [{
    country_code: 'RU',
    code: 'MRV',
    coordinates: { lat: 44.218105, lon: 43.085815 },
    name: 'Минеральные Воды',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Mineralnye Vody' },
    cases: {
      da: 'Минеральным Водам', pr: 'Минеральных Водах', ro: 'Минеральных Вод', su: 'Минеральные Воды', tv: 'Минеральными Водами', vi: 'в Минеральные Воды',
    },
  }, {
    country_code: 'RU',
    code: 'JOK',
    coordinates: { lat: 56.716667, lon: 47.9 },
    name: 'Йошкар-Ола',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Yoshkar-Ola' },
    cases: {
      da: 'Йошкар-Оле', pr: 'Йошкар-Оле', ro: 'Йошкар-Олы', su: 'Йошкар-Ола', tv: 'Йошкар-Олой', vi: 'в Йошкар-Олу',
    },
  }, {
    country_code: 'RU',
    code: 'OSW',
    coordinates: { lat: 51.2, lon: 58.566666 },
    name: 'Орск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Orsk' },
    cases: {
      da: 'Орску', pr: 'Орске', ro: 'Орска', su: 'Орск', tv: 'Орском', vi: 'в Орск',
    },
  }, {
    country_code: 'RU',
    code: 'VKT',
    coordinates: { lat: 67.48333, lon: 63.983334 },
    name: 'Воркута',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Vorkuta' },
    cases: {
      da: 'Воркуте', pr: 'Воркуте', ro: 'Воркуты', su: 'Воркута', tv: 'Воркутой', vi: 'в Воркуту',
    },
  }, {
    country_code: 'RU',
    code: 'KLF',
    coordinates: { lat: 54.5, lon: 36.266666 },
    name: 'Калуга',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Kaluga' },
    cases: {
      da: 'Калуге', pr: 'Калуге', ro: 'Калуги', su: 'Калуга', tv: 'Калугой', vi: 'в Калугу',
    },
  }, {
    country_code: 'RU',
    code: 'TJM',
    coordinates: { lat: 57.181828, lon: 65.35024 },
    name: 'Тюмень',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Tyumen' },
    cases: {
      da: 'Тюмени', pr: 'Тюмени', ro: 'Тюмени', su: 'Тюмень', tv: 'Тюменью', vi: 'в Тюмень',
    },
  }, {
    country_code: 'RU',
    code: 'REN',
    coordinates: { lat: 51.79105, lon: 55.4567 },
    name: 'Оренбург',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Orenburg' },
    cases: {
      da: 'Оренбургу', pr: 'Оренбурге', ro: 'Оренбурга', su: 'Оренбург', tv: 'Оренбургом', vi: 'в Оренбург',
    },
  }, {
    country_code: 'RU',
    code: 'GOJ',
    coordinates: { lat: 56.218613, lon: 43.789764 },
    name: 'Нижний Новгород',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Nizhniy Novgorod' },
    cases: {
      da: 'Нижнему Новгороду', pr: 'Нижнем Новгороде', ro: 'Нижнего Новгорода', su: 'Нижний Новгород', tv: 'Нижним Новгородом', vi: 'в Нижний Новгород',
    },
  }, {
    country_code: 'RU',
    code: 'GYG',
    coordinates: { lat: 62.10399, lon: 129.55028 },
    name: 'Маган',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Magan' },
    cases: {
      da: 'Магану', pr: 'Магане', ro: 'Магана', su: 'Маган', tv: 'Маганом', vi: 'в Маган',
    },
  }, {
    country_code: 'RU',
    code: 'PVS',
    coordinates: { lat: 64.38333, lon: -173.24333 },
    name: 'посёлок Провидения',
    time_zone: 'Asia/Anadyr',
    name_translations: { en: 'Provideniya' },
    cases: {
      da: 'посёлку Провидения', pr: 'посёлке Провидения', ro: 'посёлка Провидения', su: 'посёлок Провидения', tv: 'посёлком Провидения', vi: 'в посёлок Провидения',
    },
  }, {
    country_code: 'RU',
    code: 'RTW',
    coordinates: { lat: 51.566666, lon: 46.066666 },
    name: 'Саратов',
    time_zone: 'Europe/Samara',
    name_translations: { en: 'Saratov' },
    cases: {
      da: 'Саратову', pr: 'Саратове', ro: 'Саратова', su: 'Саратов', tv: 'Саратовом', vi: 'в Саратов',
    },
  }, {
    country_code: 'RU',
    code: 'NJC',
    coordinates: { lat: 60.9476, lon: 76.49145 },
    name: 'Нижневартовск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Nizhnevartovsk' },
    cases: {
      da: 'Нижневартовску', pr: 'Нижневартовске', ro: 'Нижневартовска', su: 'Нижневартовск', tv: 'Нижневартовском', vi: 'в Нижневартовск',
    },
  }, {
    country_code: 'RU',
    code: 'PKC',
    coordinates: { lat: 53.016666, lon: 158.65 },
    name: 'Петропавловск-Камчатский',
    time_zone: 'Asia/Kamchatka',
    name_translations: { en: 'Petropavlovsk-Kamchatsky' },
    cases: {
      da: 'Петропавловску-Камчатскому', pr: 'Петропавловске-Камчатском', ro: 'Петропавловска-Камчатского', su: 'Петропавловск-Камчатский', tv: 'Петропавловском-Камчатским', vi: 'в Петропавловск-Камчатский',
    },
  }, {
    country_code: 'RU',
    code: 'VVO',
    coordinates: { lat: 43.378574, lon: 132.14075 },
    name: 'Владивосток',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Vladivostok' },
    cases: {
      da: 'Владивостоку', pr: 'Владивостоке', ro: 'Владивостока', su: 'Владивосток', tv: 'Владивостоком', vi: 'во Владивосток',
    },
  }, {
    country_code: 'RU',
    code: 'KYZ',
    coordinates: { lat: 51.7, lon: 94.46667 },
    name: 'Кызыл',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Kyzyl' },
    cases: {
      da: 'Кызылу', pr: 'Кызыле', ro: 'Кызыла', su: 'Кызыл', tv: 'Кызылом', vi: 'в Кызыл',
    },
  }, {
    country_code: 'RU',
    code: 'VUS',
    coordinates: { lat: 60.766666, lon: 46.316666 },
    name: 'Великий Устюг',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Velikij Ustyug' },
    cases: {
      da: 'Великому Устюгу', pr: 'Великом Устюге', ro: 'Великого Устюга', su: 'Великий Устюг', tv: 'Великим Устюгом', vi: 'в Великий Устюг',
    },
  }, {
    country_code: 'RU',
    code: 'GDX',
    coordinates: { lat: 59.916668, lon: 150.71666 },
    name: 'Магадан',
    time_zone: 'Asia/Magadan',
    name_translations: { en: 'Magadan' },
    cases: {
      da: 'Магадану', pr: 'Магадане', ro: 'Магадана', su: 'Магадан', tv: 'Магаданом', vi: 'в Магадан',
    },
  }, {
    country_code: 'RU',
    code: 'EGO',
    coordinates: { lat: 50.63333, lon: 36.65 },
    name: 'Белгород',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Belgorod' },
    cases: {
      da: 'Белгороду', pr: 'Белгороде', ro: 'Белгорода', su: 'Белгород', tv: 'Белгородом', vi: 'в Белгород',
    },
  }, {
    country_code: 'RU',
    code: 'LDG',
    coordinates: { lat: 64.9, lon: 45.75 },
    name: 'Лешуконское',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Leshukonskoye' },
    cases: {
      da: 'Лешуконскому', pr: 'Лешуконском', ro: 'Лешуконского', su: 'Лешуконское', tv: 'Лешуконским', vi: 'в Лешуконское',
    },
  }, {
    country_code: 'RU',
    code: 'IGT',
    coordinates: { lat: 43.31778, lon: 45.001667 },
    name: 'Назрань',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Ordzhonikidzevskaya' },
    cases: {
      da: 'Назрани', pr: 'Назрани', ro: 'Назрани', su: 'Назрань', tv: 'Назранью', vi: 'в Назрань',
    },
  }, {
    country_code: 'RU',
    code: 'ZKP',
    coordinates: { lat: 65.75, lon: 150.9 },
    name: 'Зырянка',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Zyryanka' },
    cases: {
      da: 'Зырянке', pr: 'Зырянке', ro: 'Зырянки', su: 'Зырянка', tv: 'Зырянкой', vi: 'в Зырянку',
    },
  }, {
    country_code: 'RU',
    code: 'EIE',
    coordinates: { lat: 58.466667, lon: 92.11667 },
    name: 'Енисейск',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Eniseysk' },
    cases: {
      da: 'Енисейску', pr: 'Енисейске', ro: 'Енисейска', su: 'Енисейск', tv: 'Енисейском', vi: 'в Енисейск',
    },
  }, {
    country_code: 'RU',
    code: 'OHH',
    coordinates: { lat: 53.516666, lon: 142.88333 },
    name: 'Оха',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Okha' },
    cases: {
      da: 'Охе', pr: 'Охе', ro: 'Охи', su: 'Оха', tv: 'Охой', vi: 'в Оху',
    },
  }, {
    country_code: 'RU',
    code: 'ESL',
    coordinates: { lat: 46.36667, lon: 44.333332 },
    name: 'Элиста',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Elista' },
    cases: {
      da: 'Элисте', pr: 'Элисте', ro: 'Элисты', su: 'Элиста', tv: 'Элистой', vi: 'в Элисту',
    },
  }, {
    country_code: 'RU',
    code: 'RGK',
    coordinates: { lat: 51.969166, lon: 85.83639 },
    name: 'Горно-Алтайск',
    time_zone: 'Asia/Novokuznetsk',
    name_translations: { en: 'Gorno-Altaysk' },
    cases: {
      da: 'Горно-Алтайску', pr: 'Горно-Алтайске', ro: 'Горно-Алтайска', su: 'Горно-Алтайск', tv: 'Горно-Алтайском', vi: 'в Горно-Алтайск',
    },
  }, {
    country_code: 'RU',
    code: 'SLY',
    coordinates: { lat: 66.583336, lon: 66.6 },
    name: 'Салехард',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Salekhard' },
    cases: {
      da: 'Салехарду', pr: 'Салехарде', ro: 'Салехарда', su: 'Салехард', tv: 'Салехардом', vi: 'в Салехард',
    },
  }, {
    country_code: 'RU',
    code: 'TYD',
    coordinates: { lat: 55.283333, lon: 124.73333 },
    name: 'Тында',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Tynda' },
    cases: {
      da: 'Тынде', pr: 'Тынде', ro: 'Тынды', su: 'Тында', tv: 'Тындой', vi: 'в Тынду',
    },
  }, {
    country_code: 'RU',
    code: 'MQF',
    coordinates: { lat: 53.45, lon: 59.066666 },
    name: 'Магнитогорск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Magnitogorsk' },
    cases: {
      da: 'Магнитогорску', pr: 'Магнитогорске', ro: 'Магнитогорска', su: 'Магнитогорск', tv: 'Магнитогорском', vi: 'в Магнитогорск',
    },
  }, {
    country_code: 'RU',
    code: 'NER',
    coordinates: { lat: 56.65, lon: 124.6 },
    name: 'Нерюнгри',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Neryungri' },
    cases: {
      da: 'Нерюнгри', pr: 'Нерюнгри', ro: 'Нерюнгри', su: 'Нерюнгри', tv: 'Нерюнгри', vi: 'в Нерюнгри',
    },
  }, {
    country_code: 'RU',
    code: 'NBC',
    coordinates: { lat: 55.564125, lon: 52.10341 },
    name: 'Набережные Челны (Нижнекамск)',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Naberezhnye Chelny' },
    cases: {
      da: 'Набережным Челнам (Нижнекамску)', pr: 'Набережных Челнах (Нижнекамске)', ro: 'Набережных Челнов (Нижнекамска)', su: 'Набережные Челны (Нижнекамск)', tv: 'Набережными Челнами (Нижнекамском)', vi: 'в Набережные Челны (Нижнекамск)',
    },
  }, {
    country_code: 'RU',
    code: 'ULY',
    coordinates: { lat: 54.3214798, lon: 48.3856504 },
    name: 'Ульяновск',
    time_zone: 'Europe/Samara',
    name_translations: { en: 'Ulyanovsk' },
    cases: {
      da: 'Ульяновску', pr: 'Ульяновске', ro: 'Ульяновска', su: 'Ульяновск', tv: 'Ульяновском', vi: 'в Ульяновск',
    },
  }, {
    country_code: 'RU',
    code: 'USK',
    coordinates: { lat: 65.95, lon: 57.4 },
    name: 'Усинск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Usinsk' },
    cases: {
      da: 'Усинску', pr: 'Усинске', ro: 'Усинска', su: 'Усинск', tv: 'Усинском', vi: 'в Усинск',
    },
  }, {
    country_code: 'RU',
    code: 'KPW',
    coordinates: { lat: 67.84056, lon: 166.13917 },
    name: 'Кепервеем',
    time_zone: 'Asia/Kamchatka',
    name_translations: { en: 'Keperveyem' },
    cases: {
      da: 'Кепервеему', pr: 'Кепервееме', ro: 'Кепервеема', su: 'Кепервеем', tv: 'Кепервеемом', vi: 'в Кепервеем',
    },
  }, {
    country_code: 'RU',
    code: 'PES',
    coordinates: { lat: 61.683334, lon: 34.333332 },
    name: 'Петрозаводск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Petrozavodsk' },
    cases: {
      da: 'Петрозаводску', pr: 'Петрозаводске', ro: 'Петрозаводска', su: 'Петрозаводск', tv: 'Петрозаводском', vi: 'в Петрозаводск',
    },
  }, {
    country_code: 'RU',
    code: 'TGP',
    coordinates: { lat: 61.59, lon: 89.97945 },
    name: 'Бор',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Bor' },
    cases: {
      da: 'Бору', pr: 'Боре', ro: 'Бора', su: 'Бор', tv: 'Бором', vi: 'в Бор',
    },
  }, {
    country_code: 'RU',
    code: 'RAT',
    coordinates: { lat: 62.5, lon: 77 },
    name: 'Радужный',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Raduzhnyi' },
    cases: {
      da: 'Радужному', pr: 'Радужном', ro: 'Радужного', su: 'Радужный', tv: 'Радужным', vi: 'в Радужный',
    },
  }, {
    country_code: 'RU',
    code: 'OMS',
    coordinates: { lat: 54.957455, lon: 73.3167 },
    name: 'Омск',
    time_zone: 'Asia/Omsk',
    name_translations: { en: 'Omsk' },
    cases: {
      da: 'Омску', pr: 'Омске', ro: 'Омска', su: 'Омск', tv: 'Омском', vi: 'в Омск',
    },
  }, {
    country_code: 'RU',
    code: 'CEE',
    coordinates: { lat: 59.283333, lon: 38.066666 },
    name: 'Череповец',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Cherepovets' },
    cases: {
      da: 'Череповцу', pr: 'Череповце', ro: 'Череповца', su: 'Череповец', tv: 'Череповцом', vi: 'в Череповец',
    },
  }, {
    country_code: 'RU',
    code: 'CEK',
    coordinates: { lat: 55.297504, lon: 61.51235 },
    name: 'Челябинск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Chelyabinsk' },
    cases: {
      da: 'Челябинску', pr: 'Челябинске', ro: 'Челябинска', su: 'Челябинск', tv: 'Челябинском', vi: 'в Челябинск',
    },
  }, {
    country_code: 'RU',
    code: 'NOI',
    coordinates: { lat: 44.716667, lon: 37.766666 },
    name: 'Новороссийск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Novorossijsk' },
    cases: {
      da: 'Новороссийску', pr: 'Новороссийске', ro: 'Новороссийска', su: 'Новороссийск', tv: 'Новороссийском', vi: 'в Новороссийск',
    },
  }, {
    country_code: 'RU',
    code: 'KJA',
    coordinates: { lat: 56.18113, lon: 92.48286 },
    name: 'Красноярск',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Krasnojarsk' },
    cases: {
      da: 'Красноярску', pr: 'Красноярске', ro: 'Красноярска', su: 'Красноярск', tv: 'Красноярском', vi: 'в Красноярск',
    },
  }, {
    country_code: 'RU',
    code: 'TOX',
    coordinates: { lat: 58.13333, lon: 68.23333 },
    name: 'Тобольск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Tobolsk' },
    cases: {
      da: 'Тобольску', pr: 'Тобольске', ro: 'Тобольска', su: 'Тобольск', tv: 'Тобольском', vi: 'в Тобольск',
    },
  }, {
    country_code: 'RU',
    code: 'KXK',
    coordinates: { lat: 50.4, lon: 136.95 },
    name: 'Комсомольск-на-Амуре',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Komsomolsk Na Amure' },
    cases: {
      da: 'Комсомольску-на-Амуре', pr: 'Комсомольске-на-Амуре', ro: 'Комсомольска-на-Амуре', su: 'Комсомольск-на-Амуре', tv: 'Комсомольском-на-Амуре', vi: 'в Комсомольск-на-Амуре',
    },
  }, {
    country_code: 'RU',
    code: 'KCK',
    coordinates: { lat: 57.772778, lon: 108.060833 },
    name: 'Киренск',
    time_zone: 'Asia/Irkutsk',
    name_translations: { en: 'Kirensk' },
    cases: {
      da: 'Киренску', pr: 'Киренске', ro: 'Киренска', su: 'Киренск', tv: 'Киренском', vi: 'в Киренск',
    },
  }, {
    country_code: 'RU',
    code: 'HTA',
    coordinates: { lat: 52.033333, lon: 113.3 },
    name: 'Чита',
    time_zone: 'Asia/Chita',
    name_translations: { en: 'Chita' },
    cases: {
      da: 'Чите', pr: 'Чите', ro: 'Читы', su: 'Чита', tv: 'Читой', vi: 'в Читу',
    },
  }, {
    country_code: 'RU',
    code: 'DYR',
    coordinates: { lat: 64.73333, lon: 177.75 },
    name: 'Анадырь',
    time_zone: 'Asia/Anadyr',
    name_translations: { en: 'Anadyr' },
    cases: {
      da: 'Анадырю', pr: 'Анадыре', ro: 'Анадыря', su: 'Анадырь', tv: 'Анадырем', vi: 'в Анадырь',
    },
  }, {
    country_code: 'RU',
    code: 'OVB',
    coordinates: { lat: 55.00901, lon: 82.667 },
    name: 'Новосибирск',
    time_zone: 'Asia/Phnom_Penh',
    name_translations: { en: 'Novosibirsk' },
    cases: {
      da: 'Новосибирску', pr: 'Новосибирске', ro: 'Новосибирска', su: 'Новосибирск', tv: 'Новосибирском', vi: 'в Новосибирск',
    },
  }, {
    country_code: 'RU',
    code: 'IAA',
    coordinates: { lat: 67.433334, lon: 86.63333 },
    name: 'Игарка',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Igarka' },
    cases: {
      da: 'Игарке', pr: 'Игарке', ro: 'Игарки', su: 'Игарка', tv: 'Игаркой', vi: 'в Игарку',
    },
  }, {
    country_code: 'RU',
    code: 'IKT',
    coordinates: { lat: 52.273308, lon: 104.35607 },
    name: 'Иркутск',
    time_zone: 'Asia/Irkutsk',
    name_translations: { en: 'Irkutsk' },
    cases: {
      da: 'Иркутску', pr: 'Иркутске', ro: 'Иркутска', su: 'Иркутск', tv: 'Иркутском', vi: 'в Иркутск',
    },
  }, {
    country_code: 'RU',
    code: 'NYM',
    coordinates: { lat: 65.48333, lon: 72.71667 },
    name: 'Надым',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Nadym' },
    cases: {
      da: 'Надыму', pr: 'Надыме', ro: 'Надыма', su: 'Надым', tv: 'Надымом', vi: 'в Надым',
    },
  }, {
    country_code: 'RU',
    code: 'ABA',
    coordinates: { lat: 53.716667, lon: 91.5 },
    name: 'Абакан',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Abakan' },
    cases: {
      da: 'Абакану', pr: 'Абакане', ro: 'Абакана', su: 'Абакан', tv: 'Абаканом', vi: 'в Абакан',
    },
  }, {
    country_code: 'RU',
    code: 'PEE',
    coordinates: { lat: 57.920025, lon: 56.01918 },
    name: 'Пермь',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Perm' },
    cases: {
      da: 'Перми', pr: 'Перми', ro: 'Перми', su: 'Пермь', tv: 'Пермью', vi: 'в Пермь',
    },
  }, {
    country_code: 'RU',
    code: 'UFA',
    coordinates: { lat: 54.565403, lon: 55.884544 },
    name: 'Уфа',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Ufa' },
    cases: {
      da: 'Уфе', pr: 'Уфе', ro: 'Уфы', su: 'Уфа', tv: 'Уфой', vi: 'в Уфу',
    },
  }, {
    country_code: 'RU',
    code: 'OGZ',
    coordinates: { lat: 43.2, lon: 44.6 },
    name: 'Владикавказ',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Vladikavkaz' },
    cases: {
      da: 'Владикавказу', pr: 'Владикавказе', ro: 'Владикавказа', su: 'Владикавказ', tv: 'Владикавказом', vi: 'во Владикавказ',
    },
  }, {
    country_code: 'RU',
    code: 'NEF',
    coordinates: { lat: 56.1, lon: 54.35 },
    name: 'Нефтекамск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Neftekamsk' },
    cases: {
      da: 'Нефтекамску', pr: 'Нефтекамске', ro: 'Нефтекамска', su: 'Нефтекамск', tv: 'Нефтекамском', vi: 'в Нефтекамск',
    },
  }, {
    country_code: 'RU',
    code: 'GVN',
    coordinates: { lat: 48.9575, lon: 140.2811111 },
    name: 'Советская Гавань',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Sovetskaya Gavan' },
    cases: {
      da: 'Советской Гавани', pr: 'Советской Гавани', ro: 'Советской Гавани', su: 'Советская Гавань', tv: 'Советской Гаванью', vi: 'в Советскую Гавань',
    },
  }, {
    country_code: 'RU',
    code: 'SEK',
    coordinates: { lat: 67.466667, lon: 153.716667 },
    name: 'Среднеколымск',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Srednekolymsk' },
    cases: {
      da: 'Среднеколымску', pr: 'Среднеколымске', ro: 'Среднеколымска', su: 'Среднеколымск', tv: 'Среднеколымском', vi: 'в Среднеколымск',
    },
  }, {
    country_code: 'RU',
    code: 'ONK',
    coordinates: { lat: 68.5, lon: 112.433333 },
    name: 'Оленёк',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Olenyok' },
    cases: {
      da: 'Оленьку', pr: 'Оленьке', ro: 'Оленька', su: 'Оленёк', tv: 'Оленьком', vi: 'в Оленёк',
    },
  }, {
    country_code: 'RU',
    code: 'NOJ',
    coordinates: { lat: 63.17673, lon: 75.29459 },
    name: 'Ноябрьск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Nojabrxsk' },
    cases: {
      da: 'Ноябрьску', pr: 'Ноябрьске', ro: 'Ноябрьска', su: 'Ноябрьск', tv: 'Ноябрьском', vi: 'в Ноябрьск',
    },
  }, {
    country_code: 'RU',
    code: 'LED',
    coordinates: { lat: 59.939039, lon: 30.315785 },
    name: 'Санкт-Петербург',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Saint Petersburg' },
    cases: {
      da: 'Санкт-Петербургу', pr: 'Санкт-Петербурге', ro: 'Санкт-Петербурга', su: 'Санкт-Петербург', tv: 'Санкт-Петербургом', vi: 'в Санкт-Петербург',
    },
  }, {
    country_code: 'RU',
    code: 'NUX',
    coordinates: { lat: 66.07335, lon: 76.522835 },
    name: 'Новый Уренгой',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Novyj Urengoj' },
    cases: {
      da: 'Новому Уренгою', pr: 'Новом Уренгое', ro: 'Нового Уренгоя', su: 'Новый Уренгой', tv: 'Новым Уренгоем', vi: 'в Новый Уренгой',
    },
  }, {
    country_code: 'RU',
    code: 'TQL',
    coordinates: { lat: 64.92134, lon: 77.797356 },
    name: 'Тарко-Сале',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Tarko-Sale' },
    cases: {
      da: 'Тарко-Сале', pr: 'Тарко-Сале', ro: 'Тарко-Сале', su: 'Тарко-Сале', tv: 'Тарко-Сале', vi: 'в Тарко-Сале',
    },
  }, {
    country_code: 'RU',
    code: 'UUA',
    coordinates: { lat: 54.61667, lon: 52.816666 },
    name: 'Бугульма',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Bugulma' },
    cases: {
      da: 'Бугульме', pr: 'Бугульме', ro: 'Бугульмы', su: 'Бугульма', tv: 'Бугульмой', vi: 'в Бугульму',
    },
  }, {
    country_code: 'RU',
    code: 'RZN',
    coordinates: { lat: 54.63333, lon: 39.583332 },
    name: 'Рязань',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Ryazan' },
    cases: {
      da: 'Рязани', pr: 'о Рязани', ro: 'Рязань', su: 'Рязань', tv: 'Рязанью', vi: 'в Рязань',
    },
  }, {
    country_code: 'RU',
    code: 'YKS',
    coordinates: { lat: 62.085606, lon: 129.75006 },
    name: 'Якутск',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Yakutsk' },
    cases: {
      da: 'Якутску', pr: 'Якутске', ro: 'Якутска', su: 'Якутск', tv: 'Якутском', vi: 'в Якутск',
    },
  }, {
    country_code: 'RU',
    code: 'CYX',
    coordinates: { lat: 68.75, lon: 161.35 },
    name: 'Черский',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Cherskiy' },
    cases: {
      da: 'Черскому', pr: 'Черском', ro: 'Черского', su: 'Черский', tv: 'Черским', vi: 'в Черский',
    },
  }, {
    country_code: 'RU',
    code: 'CKL',
    coordinates: { lat: 55.86667, lon: 38.051945 },
    name: 'Чкаловский',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Chkalovsky' },
    cases: {
      da: 'Чкаловскому', pr: 'Чкаловском', ro: 'Чкаловского', su: 'Чкаловский', tv: 'Чкаловским', vi: 'в Чкаловскогй',
    },
  }, {
    country_code: 'RU',
    code: 'MQJ',
    coordinates: { lat: 66.45, lon: 143.233333 },
    name: 'Хонуу',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Khonu' },
    cases: {
      da: 'Хонуу', pr: 'Хонуу', ro: 'Хонуу', su: 'Хонуу', tv: 'Хонуу', vi: 'в Хонуу',
    },
  }]

  const arr2 = [{
    country_code: 'RU',
    code: 'NSK',
    coordinates: { lat: 69.32312, lon: 87.339806 },
    name: 'Норильск',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: "Noril'sk" },
    cases: {
      da: 'Норильску', pr: 'Норильске', ro: 'Норильска', su: 'Норильск', tv: 'Норильском', vi: 'в Норильск',
    },
  }, {
    country_code: 'RU',
    code: 'KGD',
    coordinates: { lat: 54.882656, lon: 20.586645 },
    name: 'Калининград',
    time_zone: 'Europe/Kaliningrad',
    name_translations: { en: 'Kaliningrad' },
    cases: {
      da: 'Калининграду', pr: 'Калининграде', ro: 'Калининграда', su: 'Калининград', tv: 'Калининградом', vi: 'в Калининград',
    },
  }, {
    country_code: 'RU',
    code: 'NLI',
    coordinates: { lat: 53.15, lon: 140.73333 },
    name: 'Николаевск-на-Амуре',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Nikolaevsk-na-Amure' },
    cases: {
      da: 'Николаевску-на-Амуре', pr: 'Николаевску-на-Амуре', ro: 'Николаевск-на-Амуре', su: 'Николаевск-на-Амуре', tv: 'Николаевском-на-Амуре', vi: 'Николаевск-на-Амуре',
    },
  }, {
    country_code: 'RU',
    code: 'LPK',
    coordinates: { lat: 52.61667, lon: 39.6 },
    name: 'Липецк',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Lipetsk' },
    cases: {
      da: 'Липецку', pr: 'Липецке', ro: 'Липецка', su: 'Липецк', tv: 'Липецком', vi: 'в Липецк',
    },
  }, {
    country_code: 'RU',
    code: 'RZH',
    coordinates: { lat: 42.90104, lon: 133.89621 },
    name: 'Преображение',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Preobrazheniye' },
    cases: {
      da: 'Преображению', pr: 'Преображению', ro: 'Преображения', su: 'Преображение', tv: 'Преображением', vi: 'в Преображение',
    },
  }, {
    country_code: 'RU',
    code: 'ACS',
    coordinates: { lat: 56.266666, lon: 90.566666 },
    name: 'Ачинск',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Achinsk' },
    cases: {
      da: 'Ачинску', pr: 'Ачинске', ro: 'Ачинска', su: 'Ачинск', tv: 'Ачинском', vi: 'в Ачинск',
    },
  }, {
    country_code: 'RU',
    code: 'IAR',
    coordinates: { lat: 57.61667, lon: 39.88333 },
    name: 'Ярославль',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Yaroslavl' },
    cases: {
      da: 'Ярославлю', pr: 'Ярославле', ro: 'Ярославля', su: 'Ярославль', tv: 'Ярославлем', vi: 'в Ярославль',
    },
  }, {
    country_code: 'RU',
    code: 'OEL',
    coordinates: { lat: 52.983334, lon: 36.1 },
    name: 'Орёл',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Orel' },
    cases: {
      da: 'Орлу', pr: 'Орле', ro: 'Орла', su: 'Орёл', tv: 'Орлом', vi: 'в Орёл',
    },
  }, {
    country_code: 'RU',
    code: 'ULK',
    coordinates: { lat: 60.72248, lon: 114.83152 },
    name: 'Ленск',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Lensk' },
    cases: {
      da: 'Ленску', pr: 'Ленске', ro: 'Ленска', su: 'Ленск', tv: 'Ленском', vi: 'в Ленск',
    },
  }, {
    country_code: 'RU',
    code: 'ITU',
    coordinates: { lat: 45.25611, lon: 147.95583 },
    name: 'Итуруп',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Iturup' },
    cases: {
      da: 'Итурупу', pr: 'Итурупу', ro: 'Итурупа', su: 'Итуруп', tv: 'Итурупом', vi: 'в Итурупе',
    },
  }, {
    country_code: 'RU',
    code: 'LNX',
    coordinates: { lat: 54.8, lon: 32.05 },
    name: 'Смоленск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Smolensk' },
    cases: {
      da: 'Смоленску', pr: 'Смоленске', ro: 'Смоленска', su: 'Смоленск', tv: 'Смоленском', vi: 'в Смоленск',
    },
  }, {
    country_code: 'RU',
    code: 'SWV',
    coordinates: { lat: 61.924444, lon: 159.231111 },
    name: 'Эвенск',
    time_zone: 'Asia/Magadan',
    name_translations: { en: 'Evensk' },
    cases: {
      da: 'Эвенску', pr: 'Эвенске', ro: 'Эвенска', su: 'Эвенск', tv: 'Эвенском', vi: 'в Эвенск',
    },
  }, {
    country_code: 'RU',
    code: 'DHG',
    coordinates: { lat: 44.56667, lon: 135.61667 },
    name: 'Дальнегорск',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Dalnegorsk' },
    cases: {
      da: 'Дальнегорску', pr: 'Дальнегорску', ro: 'Дальнегорска', su: 'Дальнегорск', tv: 'Дальнегорском', vi: 'в Дальнегорск',
    },
  }, {
    country_code: 'RU',
    code: 'UUD',
    coordinates: { lat: 51.833332, lon: 107.5 },
    name: 'Улан-Удэ',
    time_zone: 'Asia/Irkutsk',
    name_translations: { en: 'Ulan-Ude' },
    cases: {
      da: 'Улан-Удэ', pr: 'Улан-Удэ', ro: 'Улан-Удэ', su: 'Улан-Удэ', tv: 'Улан-Удэ', vi: 'в Улан-Удэ',
    },
  }, {
    country_code: 'RU',
    code: 'KVX',
    coordinates: { lat: 58.5, lon: 49.35 },
    name: 'Киров',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Kirov' },
    cases: {
      da: 'Кирову', pr: 'Кирове', ro: 'Кирова', su: 'Киров', tv: 'Кировом', vi: 'в Киров',
    },
  }, {
    country_code: 'RU',
    code: 'AER',
    coordinates: { lat: 43.44884, lon: 39.941105 },
    name: 'Сочи',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Adler/Sochi' },
    cases: {
      da: 'Сочи', pr: 'Сочи', ro: 'Сочи', su: 'Сочи', tv: 'Сочи', vi: 'в Сочи',
    },
  }, {
    country_code: 'RU',
    code: 'GDZ',
    coordinates: { lat: 44.566666, lon: 38.016666 },
    name: 'Геленджик',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Gelendzik' },
    cases: {
      da: 'Геленджику', pr: 'Геленджике', ro: 'Геленджика', su: 'Геленджик', tv: 'Геленджиком', vi: 'в Геленджик',
    },
  }, {
    country_code: 'RU',
    code: 'CSY',
    coordinates: { lat: 56.13333, lon: 47.266666 },
    name: 'Чебоксары',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Cheboksary' },
    cases: {
      da: 'Чебоксарам', pr: 'Чебоксарах', ro: 'Чебоксар', su: 'Чебоксары', tv: 'Чебоксарами', vi: 'в Чебоксары',
    },
  }, {
    country_code: 'RU',
    code: 'PYJ',
    coordinates: { lat: 66.416664, lon: 112.05 },
    name: 'Удачный',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Udachnyj' },
    cases: {
      da: 'Удачному', pr: 'Удачном', ro: 'Удачного', su: 'Удачный', tv: 'Удачным', vi: 'в Удачный',
    },
  }, {
    country_code: 'RU',
    code: 'TYA',
    coordinates: { lat: 54.2, lon: 37.61667 },
    name: 'Тула',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Tula' },
    cases: {
      da: 'Туле', pr: 'Туле', ro: 'Тулы', su: 'Тула', tv: 'Тулой', vi: 'в Тулу',
    },
  }, {
    country_code: 'RU',
    code: 'BZK',
    coordinates: { lat: 53.266666, lon: 34.333332 },
    name: 'Брянск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Bryansk' },
    cases: {
      da: 'Брянску', pr: 'Брянске', ro: 'Брянска', su: 'Брянск', tv: 'Брянском', vi: 'в Брянск',
    },
  }, {
    country_code: 'RU',
    code: 'IJK',
    coordinates: { lat: 56.833332, lon: 53.466667 },
    name: 'Ижевск',
    time_zone: 'Europe/Samara',
    name_translations: { en: 'Izhevsk' },
    cases: {
      da: 'Ижевску', pr: 'Ижевске', ro: 'Ижевска', su: 'Ижевск', tv: 'Ижевском', vi: 'в Ижевск',
    },
  }, {
    country_code: 'RU',
    code: 'TLY',
    coordinates: { lat: 44.81465, lon: 136.28928 },
    name: 'Пластун',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Plastun' },
    cases: {
      da: 'Пластуну', pr: 'Пластуне', ro: 'Пластуна', su: 'Пластун', tv: 'Пластуном', vi: 'в Пластун',
    },
  }, {
    country_code: 'RU',
    code: 'OKT',
    coordinates: { lat: 54.433334, lon: 53.38333 },
    name: 'Октябрьский',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Oktiabrskij' },
    cases: {
      da: 'Октябрьскому', pr: 'Октябрьском', ro: 'Октябрьского', su: 'Октябрьский', tv: 'Октябрьским', vi: 'в Октябрьский',
    },
  }, {
    country_code: 'RU',
    code: 'KRO',
    coordinates: { lat: 55.433334, lon: 65.3 },
    name: 'Курган',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Kurgan' },
    cases: {
      da: 'Кургану', pr: 'Кургане', ro: 'Кургана', su: 'Курган', tv: 'Курганом', vi: 'в Курган',
    },
  }, {
    country_code: 'RU',
    code: 'PEZ',
    coordinates: { lat: 53.11852, lon: 45.02305 },
    name: 'Пенза',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Penza' },
    cases: {
      da: 'Пензе', pr: 'Пензе', ro: 'Пензы', su: 'Пенза', tv: 'Пензой', vi: 'в Пензу',
    },
  }, {
    country_code: 'RU',
    code: 'SUK',
    coordinates: { lat: 67.846707, lon: 130.467126 },
    name: 'Батагай-Алыта',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Batagay-Alyta' },
    cases: {
      da: 'Батагай-Алыте', pr: 'Батагай-Алыте', ro: 'Батагай-Алыту', su: 'Батагай-Алыта', tv: 'Батагай-Алытой', vi: 'в Батагай-Алыту',
    },
  }, {
    country_code: 'RU',
    code: 'OHO',
    coordinates: { lat: 59.416668, lon: 143.05 },
    name: 'Охотск',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Okhotsk' },
    cases: {
      da: 'Охотску', pr: 'Охотске', ro: 'Охотска', su: 'Охотск', tv: 'Охотском', vi: 'в Охотск',
    },
  }, {
    country_code: 'RU',
    code: 'ROV',
    coordinates: { lat: 47.25, lon: 39.75 },
    name: 'Ростов-на-Дону',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Rostov' },
    cases: {
      da: 'Ростову-на-Дону', pr: 'Ростове-на-Дону', ro: 'Ростова-на-Дону', su: 'Ростов-на-Дону', tv: 'Ростовом-на-Дону', vi: 'в Ростов-на-Дону',
    },
  }, {
    country_code: 'RU',
    code: 'GRV',
    coordinates: { lat: 43.333332, lon: 45.75 },
    name: 'Грозный',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Groznyy' },
    cases: {
      da: 'Грозному', pr: 'Грозном', ro: 'Грозного', su: 'Грозный', tv: 'Грозным', vi: 'в Грозный',
    },
  }, {
    country_code: 'RU',
    code: 'UTS',
    coordinates: { lat: 65.433334, lon: 52.2 },
    name: 'Усть-Цильма',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Ust-Tsilma' },
    cases: {
      da: 'Усть-Цильме', pr: 'Усть-Цильме', ro: 'Усть-Цильмы', su: 'Усть-Цильма', tv: 'Усть-Цильмой', vi: 'в Усть-Цильму',
    },
  }, {
    country_code: 'RU',
    code: 'IWA',
    coordinates: { lat: 56.942955, lon: 40.944546 },
    name: 'Иваново',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Ivanovo' },
    cases: {
      da: 'Иваново', pr: 'Иваново', ro: 'Иваново', su: 'Иваново', tv: 'Иваново', vi: 'в Иваново',
    },
  }, {
    country_code: 'RU',
    code: 'OVS',
    coordinates: { lat: 61.33209, lon: 63.601887 },
    name: 'Советский',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Sovetsky' },
    cases: {
      da: 'Советскому', pr: 'Советском', ro: 'Советского', su: 'Советский', tv: 'Советским', vi: 'в Советский',
    },
  }, {
    country_code: 'RU',
    code: 'VGD',
    coordinates: { lat: 59.283333, lon: 39.95 },
    name: 'Вологда',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Vologda' },
    cases: {
      da: 'Вологде', pr: 'Вологде', ro: 'Вологды', su: 'Вологда', tv: 'Вологдой', vi: 'в Вологду',
    },
  }, {
    country_code: 'RU',
    code: 'SWT',
    coordinates: { lat: 60.5, lon: 77 },
    name: 'Стрежевой',
    time_zone: 'Asia/Novosibirsk',
    name_translations: { en: 'Strezhevoy' },
    cases: {
      da: 'Стрежевому', pr: 'Стрежевом', ro: 'Стрежевого', su: 'Стрежевой', tv: 'Стрежевым', vi: 'в Стрежевой',
    },
  }, {
    country_code: 'RU',
    code: 'OLZ',
    coordinates: { lat: 60.366667, lon: 120.416667 },
    name: 'Олёкминск',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Olokminsk' },
    cases: {
      da: 'Олёкминску', pr: 'Олёкминске', ro: 'Олёкминска', su: 'Олёкминск', tv: 'Олёкминском', vi: 'в Олёкминск',
    },
  }, {
    country_code: 'RU',
    code: 'KLD',
    coordinates: { lat: 56.916668, lon: 35.916668 },
    name: 'Тверь',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Tver' },
    cases: {
      da: 'Твери', pr: 'Твери', ro: 'Твери', su: 'Тверь', tv: 'Тверью', vi: 'в Твери',
    },
  }, {
    country_code: 'RU',
    code: 'SGC',
    coordinates: { lat: 61.339916, lon: 73.40953 },
    name: 'Сургут',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Surgut' },
    cases: {
      da: 'Сургуту', pr: 'Сургуте', ro: 'Сургута', su: 'Сургут', tv: 'Сургутом', vi: 'в Сургут',
    },
  }, {
    country_code: 'RU',
    code: 'UKX',
    coordinates: { lat: 56.85, lon: 105.73333 },
    name: 'Усть-Кут',
    time_zone: 'Asia/Irkutsk',
    name_translations: { en: 'Ust-Kut' },
    cases: {
      da: 'Усть-Куту', pr: 'Усть-Куте', ro: 'Усть-Кута', su: 'Усть-Кут', tv: 'Усть-Кутом', vi: 'в Усть-Кут',
    },
  }, {
    country_code: 'RU',
    code: 'ZIX',
    coordinates: { lat: 66.766667, lon: 123.383333 },
    name: 'Жиганск',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Zhigansk' },
    cases: {
      da: 'Жиганску', pr: 'Жиганске', ro: 'Жиганска', su: 'Жиганск', tv: 'Жиганском', vi: 'в Жиганск',
    },
  }, {
    country_code: 'RU',
    code: 'KKQ',
    coordinates: { lat: 65.70796, lon: 82.456055 },
    name: 'Красноселькуп',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Krasnoselkup' },
    cases: {
      da: 'Красноселькупу', pr: 'Красноселькупе', ro: 'Красноселькупа', su: 'Красноселькуп', tv: 'Красноселькупом', vi: 'в Красноселькуп',
    },
  }, {
    country_code: 'RU',
    code: 'MOW',
    coordinates: { lat: 55.755786, lon: 37.617633 },
    name: 'Москва',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Moscow' },
    cases: {
      da: 'Москве', pr: 'Москве', ro: 'Москвы', su: 'Москва', tv: 'Москвой', vi: 'в Москву',
    },
  }, {
    country_code: 'RU',
    code: 'GDG',
    coordinates: { lat: 53.466667, lon: 125.8 },
    name: 'Магдагачи',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Magdagachi' },
    cases: {
      da: 'Магдагачам', pr: 'Магдагачах', ro: 'Магдагачей', su: 'Магдагачи', tv: 'Магдагачами', vi: 'в Магдагачи',
    },
  }, {
    country_code: 'RU',
    code: 'SYS',
    coordinates: { lat: 71.92613, lon: 114.08235 },
    name: 'Саскылах',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Saskylakh' },
    cases: {
      da: 'Саскылаху', pr: 'Саскылахе', ro: 'Саскылаха', su: 'Саскылах', tv: 'Саскылахом', vi: 'в Саскылах',
    },
  }, {
    country_code: 'RU',
    code: 'CSH',
    coordinates: { lat: 65.02944, lon: 35.733334 },
    name: 'Соловецкий',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Solovetsky' },
    cases: {
      da: 'Соловецкому', pr: 'Соловецком', ro: 'Соловецкого', su: 'Соловецкий', tv: 'Соловецким', vi: 'в Соловецкий',
    },
  }, {
    country_code: 'RU',
    code: 'RYB',
    coordinates: { lat: 58.13333, lon: 38.86667 },
    name: 'Рыбинск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Rybinsk' },
    cases: {
      da: 'Рыбинску', pr: 'Рыбинске', ro: 'Рыбинска', su: 'Рыбинск', tv: 'Рыбинском', vi: 'в Рыбинск',
    },
  }, {
    country_code: 'RU',
    code: 'BQG',
    coordinates: { lat: 52.378334, lon: 140.44833 },
    name: 'Богородское',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Bogorodskoye' },
    cases: {
      da: 'Богородскому', pr: 'Богородском', ro: 'Богородского', su: 'Богородское', tv: 'Богородским', vi: 'в Богородское',
    },
  }, {
    country_code: 'RU',
    code: 'ODO',
    coordinates: { lat: 57.86639, lon: 114.2425 },
    name: 'Бодайбо',
    time_zone: 'Asia/Irkutsk',
    name_translations: { en: 'Bodaybo' },
    cases: {
      da: 'Бодайбо', pr: 'Бодайбо', ro: 'Бодайбо', su: 'Бодайбо', tv: 'Бодайбо', vi: 'в Бодайбо',
    },
  }, {
    country_code: 'RU',
    code: 'KUF',
    coordinates: { lat: 53.50782, lon: 50.14742 },
    name: 'Самара',
    time_zone: 'Europe/Samara',
    name_translations: { en: 'Samara' },
    cases: {
      da: 'Самаре', pr: 'Самаре', ro: 'Самары', su: 'Самара', tv: 'Самарой', vi: 'в Самару',
    },
  }, {
    country_code: 'RU',
    code: 'BQS',
    coordinates: { lat: 50.416668, lon: 127.4 },
    name: 'Благовещенск',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Blagoveschensk' },
    cases: {
      da: 'Благовещенску', pr: 'Благовещенске', ro: 'Благовещенска', su: 'Благовещенск', tv: 'Благовещенском', vi: 'в Благовещенск',
    },
  }, {
    country_code: 'RU',
    code: 'THX',
    coordinates: { lat: 65.79722, lon: 87.93528 },
    name: 'Туруханск',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Turukhansk' },
    cases: {
      da: 'Туруханску', pr: 'Туруханске', ro: 'Туруханска', su: 'Туруханск', tv: 'Туруханском', vi: 'в Туруханск',
    },
  }, {
    country_code: 'RU',
    code: 'UKG',
    coordinates: { lat: 70.00139, lon: 135.54972 },
    name: 'Усть-Куйга',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Ust-Kuiga' },
    cases: {
      da: 'Усть-Куйге', pr: 'Усть-Куйге', ro: 'Усть-Куйгу', su: 'Усть-Куйга', tv: 'Усть-Куйгой', vi: 'Усть-Куйгу',
    },
  }, {
    country_code: 'RU',
    code: 'URJ',
    coordinates: { lat: 60.11667, lon: 64.833336 },
    name: 'Урай',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Uraj' },
    cases: {
      da: 'Ураю', pr: 'Урае', ro: 'Урая', su: 'Урай', tv: 'Ураем', vi: 'в Урая',
    },
  }, {
    country_code: 'RU',
    code: 'DEE',
    coordinates: { lat: 43.9584, lon: 145.683 },
    name: 'Южно-Курильск',
    time_zone: 'Asia/Sakhalin',
    name_translations: { en: 'Kunashir Island' },
    cases: {
      da: 'Южно-Курильску', pr: 'Южно-Курильске', ro: 'Южно-Курильска', su: 'Южно-Курильск', tv: 'Южно-Курильском', vi: 'в Южно-Курильск',
    },
  }, {
    country_code: 'RU',
    code: 'KRR',
    coordinates: { lat: 45.034138, lon: 39.139004 },
    name: 'Краснодар',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Krasnodar' },
    cases: {
      da: 'Краснодару', pr: 'Краснодаре', ro: 'Краснодара', su: 'Краснодар', tv: 'Краснодаром', vi: 'в Краснодар',
    },
  }, {
    country_code: 'RU',
    code: 'SBT',
    coordinates: { lat: 71.25, lon: 72.096111 },
    name: 'Сабетта',
    time_zone: 'Asia/Dushanbe',
    name_translations: { en: 'Sabetta' },
    cases: {
      da: 'Сабетте', pr: 'Сабетте', ro: 'Сабетты', su: 'Сабетта', tv: 'Сабеттой', vi: 'в Сабетту',
    },
  }, {
    country_code: 'RU',
    code: 'IRM',
    coordinates: { lat: 63.200756, lon: 64.433945 },
    name: 'Игрим',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Igrim' },
    cases: {
      da: 'Игриму', pr: 'Игриме', ro: 'Игрима', su: 'Игрим', tv: 'Игримом', vi: 'в Игрим',
    },
  }, {
    country_code: 'RU',
    code: 'KZN',
    coordinates: { lat: 55.60844, lon: 49.29824 },
    name: 'Казань',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Kazan' },
    cases: {
      da: 'Казани', pr: 'Казани', ro: 'Казани', su: 'Казань', tv: 'Казанью', vi: 'в Казань',
    },
  }, {
    country_code: 'RU',
    code: 'KVK',
    coordinates: { lat: 67.583336, lon: 33.583332 },
    name: 'Кировск (Апатиты)',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Kirovsk' },
    cases: {
      da: 'Кировску (Апатитам)', pr: 'Кировске (Апатитах)', ro: 'Кировска (Апатитов)', su: 'Кировск (Апатиты)', tv: 'Кировском (Апатитами)', vi: 'в Кировск (Апатиты)',
    },
  }, {
    country_code: 'RU',
    code: 'TLK',
    coordinates: { lat: 59.876389, lon: 111.044444 },
    name: 'Талакан',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Talakan' },
    cases: {
      da: 'Талакану', pr: 'Талакане', ro: 'Талакана', su: 'Талакан', tv: 'Талаканом', vi: 'в Талакан',
    },
  }, {
    country_code: 'RU',
    code: 'HTG',
    coordinates: { lat: 71.96667, lon: 102.5 },
    name: 'Хатанга',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Hatanga' },
    cases: {
      da: 'Хатанге', pr: 'Хатанге', ro: 'Хатанги', su: 'Хатанга', tv: 'Хатангой', vi: 'в Хатангу',
    },
  }, {
    country_code: 'RU',
    code: 'PKV',
    coordinates: { lat: 57.816666, lon: 28.3 },
    name: 'Псков',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Pskov' },
    cases: {
      da: 'Пскову', pr: 'Пскове', ro: 'Пскова', su: 'Псков', tv: 'Псковом', vi: 'в Псков',
    },
  }, {
    country_code: 'RU',
    code: 'HMA',
    coordinates: { lat: 61.02613, lon: 69.09714 },
    name: 'Ханты-Мансийск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Khanty-Mansiysk' },
    cases: {
      da: 'Ханты-Мансийску', pr: 'Ханты-Мансийске', ro: 'Ханты-Мансийска', su: 'Ханты-Мансийск', tv: 'Ханты-Мансийском', vi: 'в Ханты-Мансийск',
    },
  }, {
    country_code: 'RU',
    code: 'PEX',
    coordinates: { lat: 65.11667, lon: 57.13333 },
    name: 'Печора',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Pechora' },
    cases: {
      da: 'Печоре', pr: 'Печоре', ro: 'Печоры', su: 'Печора', tv: 'Печорой', vi: 'в Печору',
    },
  }, {
    country_code: 'RU',
    code: 'KHV',
    coordinates: { lat: 48.524563, lon: 135.16861 },
    name: 'Хабаровск',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Khabarovsk' },
    cases: {
      da: 'Хабаровску', pr: 'Хабаровске', ro: 'Хабаровска', su: 'Хабаровск', tv: 'Хабаровском', vi: 'в Хабаровск',
    },
  }, {
    country_code: 'RU',
    code: 'SVX',
    coordinates: { lat: 56.750336, lon: 60.804314 },
    name: 'Екатеринбург',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Yekaterinburg' },
    cases: {
      da: 'Екатеринбургу', pr: 'Екатеринбурге', ro: 'Екатеринбурга', su: 'Екатеринбург', tv: 'Екатеринбургом', vi: 'в Екатеринбург',
    },
  }, {
    country_code: 'RU',
    code: 'TOF',
    coordinates: { lat: 56.5, lon: 84.96667 },
    name: 'Томск',
    time_zone: 'Asia/Novokuznetsk',
    name_translations: { en: 'Tomsk' },
    cases: {
      da: 'Томску', pr: 'Томске', ro: 'Томска', su: 'Томск', tv: 'Томском', vi: 'в Томск',
    },
  }, {
    country_code: 'RU',
    code: 'ZZO',
    coordinates: { lat: 50.666668, lon: 142.75 },
    name: 'Зональное',
    time_zone: 'Asia/Sakhalin',
    name_translations: { en: 'Zonalnoye' },
    cases: {
      da: 'Зональному', pr: 'Зональном', ro: 'Зонального', su: 'Зональное', tv: 'Зональным', vi: 'в Зональное',
    },
  }, {
    country_code: 'RU',
    code: 'SKX',
    coordinates: { lat: 54.166668, lon: 45.166668 },
    name: 'Саранск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Saransk' },
    cases: {
      da: 'Саранску', pr: 'Саранске', ro: 'Саранска', su: 'Саранск', tv: 'Саранском', vi: 'в Саранск',
    },
  }]

  const arr3 = [{
    country_code: 'RU',
    code: 'KGP',
    coordinates: { lat: 62.19583, lon: 74.53361 },
    name: 'Когалым',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Kogalym' },
    cases: {
      da: 'Когалыму', pr: 'Когалыме', ro: 'Когалыма', su: 'Когалым', tv: 'Когалымом', vi: 'в Когалым',
    },
  }, {
    country_code: 'RU',
    code: 'KEJ',
    coordinates: { lat: 55.280567, lon: 86.11623 },
    name: 'Кемерово',
    time_zone: 'Asia/Novokuznetsk',
    name_translations: { en: 'Kemerovo' },
    cases: {
      da: 'Кемерово', pr: 'Кемерово', ro: 'Кемерово', su: 'Кемерово', tv: 'Кемерово', vi: 'в Кемерово',
    },
  }, {
    country_code: 'RU',
    code: 'DPT',
    coordinates: { lat: 69.39167, lon: 139.89917 },
    name: 'Депутатский',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Deputatsky' },
    cases: {
      da: 'Депутатскому', pr: 'Депутатскому', ro: 'Депутатского', su: 'Депутатский', tv: 'Депутатским', vi: 'в Депутатский',
    },
  }, {
    country_code: 'RU',
    code: 'MMK',
    coordinates: { lat: 68.785095, lon: 32.759155 },
    name: 'Мурманск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Murmansk' },
    cases: {
      da: 'Мурманску', pr: 'Мурманске', ro: 'Мурманска', su: 'Мурманск', tv: 'Мурманском', vi: 'в Мурманск',
    },
  }, {
    country_code: 'RU',
    code: 'EKS',
    coordinates: { lat: 49.190735, lon: 142.077703 },
    name: 'Шахтёрск',
    time_zone: 'Asia/Sakhalin',
    name_translations: { en: 'Shakhtyorsk' },
    cases: {
      da: 'Шахтёрску', pr: 'Шахтёрске', ro: 'Шахтёрска', su: 'Шахтёрск', tv: 'Шахтёрском', vi: 'в Шахтёрск',
    },
  }, {
    country_code: 'RU',
    code: 'VLK',
    coordinates: { lat: 47.683334, lon: 42.083332 },
    name: 'Волгодонск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Volgodonsk' },
    cases: {
      da: 'Волгодонску', pr: 'Волгодонске', ro: 'Волгодонска', su: 'Волгодонск', tv: 'Волгодонском', vi: 'в Волгодонск',
    },
  }, {
    country_code: 'RU',
    code: 'AAQ',
    coordinates: { lat: 44.9, lon: 37.316666 },
    name: 'Анапа',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Anapa' },
    cases: {
      da: 'Анапе', pr: 'Анапе', ro: 'Анапы', su: 'Анапа', tv: 'Анапой', vi: 'в Анапу',
    },
  }, {
    country_code: 'RU',
    code: 'SCW',
    coordinates: { lat: 61.666668, lon: 50.766666 },
    name: 'Сыктывкар',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Syktyvkar' },
    cases: {
      da: 'Сыктывкару', pr: 'Сыктывкаре', ro: 'Сыктывкара', su: 'Сыктывкар', tv: 'Сыктывкаром', vi: 'в Сыктывкар',
    },
  }, {
    country_code: 'RU',
    code: 'ASF',
    coordinates: { lat: 46.2877, lon: 47.999977 },
    name: 'Астрахань',
    time_zone: 'Europe/Samara',
    name_translations: { en: 'Astrakhan' },
    cases: {
      da: 'Астрахани', pr: 'Астрахани', ro: 'Астрахани', su: 'Астрахань', tv: 'Астраханью', vi: 'в Астрахань',
    },
  }, {
    country_code: 'RU',
    code: 'INA',
    coordinates: { lat: 66.066666, lon: 60.1 },
    name: 'Инта',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Inta' },
    cases: {
      da: 'Инте', pr: 'Инте', ro: 'Инты', su: 'Инта', tv: 'Интой', vi: 'в Инту',
    },
  }, {
    country_code: 'RU',
    code: 'BGN',
    coordinates: { lat: 68.5375, lon: 146.1875 },
    name: 'Белая Гора',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Belaya Gora' },
    cases: {
      da: 'Белой Горе', pr: 'Белой Горе', ro: 'Белой Горы', su: 'Белая Гора', tv: 'Белой Горой', vi: 'в Белую Гору',
    },
  }, {
    country_code: 'RU',
    code: 'EYK',
    coordinates: { lat: 63.696682, lon: 66.70121 },
    name: 'Белоярский',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Beloyarsky' },
    cases: {
      da: 'Белоярскому', pr: 'Белоярском', ro: 'Белоярского', su: 'Белоярский', tv: 'Белоярским', vi: 'в Белоярский',
    },
  }, {
    country_code: 'RU',
    code: 'VOG',
    coordinates: { lat: 48.792, lon: 44.354805 },
    name: 'Волгоград',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Volgograd' },
    cases: {
      da: 'Волгограду', pr: 'Волгограде', ro: 'Волгограда', su: 'Волгоград', tv: 'Волгоградом', vi: 'в Волгоград',
    },
  }, {
    country_code: 'RU',
    code: 'EZV',
    coordinates: { lat: 63.924583, lon: 65.04485 },
    name: 'Берёзово',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Berezovo' },
    cases: {
      da: 'Берёзово', pr: 'Берёзово', ro: 'Берёзово', su: 'Берёзово', tv: 'Берёзово', vi: 'в Берёзово',
    },
  }, {
    country_code: 'RU',
    code: 'NYA',
    coordinates: { lat: 62.101074, lon: 65.60563 },
    name: 'Нягань',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Nyagan' },
    cases: {
      da: 'Нягани', pr: 'Нягани', ro: 'Нягани', su: 'Нягань', tv: 'Няганьей', vi: 'в Нягань',
    },
  }, {
    country_code: 'RU',
    code: 'ARH',
    coordinates: { lat: 64.594795, lon: 40.711903 },
    name: 'Архангельск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Arkhangelsk' },
    cases: {
      da: 'Архангельску', pr: 'Архангельске', ro: 'Архангельска', su: 'Архангельск', tv: 'Архангельском', vi: 'в Архангельск',
    },
  }, {
    country_code: 'RU',
    code: 'BWO',
    coordinates: { lat: 51.86667, lon: 47.75 },
    name: 'Балаково',
    time_zone: 'Europe/Volgograd',
    name_translations: { en: 'Balakovo' },
    cases: {
      da: 'Балаково', pr: 'Балакове', ro: 'Балакова', su: 'Балаково', tv: 'Балаково', vi: 'в Балаково',
    },
  }, {
    country_code: 'RU',
    code: 'NYR',
    coordinates: { lat: 63.283333, lon: 118.333333 },
    name: 'Нюрба',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Nyurba' },
    cases: {
      da: 'Нюрбе', pr: 'Нюрбе', ro: 'Нюрбы', su: 'Нюрба', tv: 'Нюрбой', vi: 'в Нюрбу',
    },
  }, {
    country_code: 'RU',
    code: 'NVR',
    coordinates: { lat: 58.516666, lon: 31.3 },
    name: 'Великий Новгород',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Novgorod' },
    cases: {
      da: 'Великому Новгороду', pr: 'Великом Новгороде', ro: 'Великого Новгорода', su: 'Великий Новгород', tv: 'Великим Новгородом', vi: 'в Великий Новгород',
    },
  }, {
    country_code: 'RU',
    code: 'PWE',
    coordinates: { lat: 69.78333, lon: 170.6 },
    name: 'Певек',
    time_zone: 'Asia/Anadyr',
    name_translations: { en: 'Pevek' },
    cases: {
      da: 'Певеку', pr: 'Певеке', ro: 'Певека', su: 'Певек', tv: 'Певеком', vi: 'в Певек',
    },
  }, {
    country_code: 'RU',
    code: 'VLU',
    coordinates: { lat: 56.38333, lon: 30.616667 },
    name: 'Великие Луки',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Velikiye Luki' },
    cases: {
      da: 'Великим Лукам', pr: 'Великих Луках', ro: 'Великих Лук', su: 'Великие Луки', tv: 'Великими Луками', vi: 'в Великие Луки',
    },
  }, {
    country_code: 'RU',
    code: 'TBW',
    coordinates: { lat: 52.716667, lon: 41.433334 },
    name: 'Тамбов',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Tambov' },
    cases: {
      da: 'Тамбову', pr: 'Тамбове', ro: 'Тамбова', su: 'Тамбов', tv: 'Тамбовом', vi: 'в Тамбов',
    },
  }, {
    country_code: 'RU',
    code: 'DKS',
    coordinates: { lat: 73.51667, lon: 80.36667 },
    name: 'Диксон',
    time_zone: 'Asia/Krasnoyarsk',
    name_translations: { en: 'Dikson' },
    cases: {
      da: 'Диксону', pr: 'Диксоне', ro: 'Диксона', su: 'Диксон', tv: 'Диксоном', vi: 'в Диксона',
    },
  }, {
    country_code: 'RU',
    code: 'YMK',
    coordinates: { lat: 68.46843, lon: 73.59573 },
    name: 'Мыс-Каменный',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Mys-Kamenny' },
    cases: {
      da: 'Мысу-Каменному', pr: 'Мысе-Каменном', ro: 'Мыса-Каменного', su: 'Мыс-Каменный', tv: 'Мысом-Каменным', vi: 'в Мыс-Каменный',
    },
  }, {
    country_code: 'RU',
    code: 'UCT',
    coordinates: { lat: 63.566666, lon: 53.8 },
    name: 'Ухта',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Ukhta' },
    cases: {
      da: 'Ухте', pr: 'Ухте', ro: 'Ухты', su: 'Ухта', tv: 'Ухтой', vi: 'в Ухту',
    },
  }, {
    country_code: 'RU',
    code: 'NOZ',
    coordinates: { lat: 53.75, lon: 87.166664 },
    name: 'Новокузнецк',
    time_zone: 'Asia/Novokuznetsk',
    name_translations: { en: 'Novokuznetsk' },
    cases: {
      da: 'Новокузнецку', pr: 'Новокузнецке', ro: 'Новокузнецка', su: 'Новокузнецк', tv: 'Новокузнецком', vi: 'в Новокузнецк',
    },
  }, {
    country_code: 'RU',
    code: 'KMW',
    coordinates: { lat: 57.75, lon: 40.933334 },
    name: 'Кострома',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Kostroma' },
    cases: {
      da: 'Костроме', pr: 'Костроме', ro: 'Костромы', su: 'Кострома', tv: 'Костромой', vi: 'в Кострому',
    },
  }, {
    country_code: 'RU',
    code: 'VOZ',
    coordinates: { lat: 51.812355, lon: 39.226997 },
    name: 'Воронеж',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Voronezh' },
    cases: {
      da: 'Воронежу', pr: 'Воронеже', ro: 'Воронежа', su: 'Воронеж', tv: 'Воронежем', vi: 'в Воронеж',
    },
  }, {
    country_code: 'RU',
    code: 'VYI',
    coordinates: { lat: 63.75639, lon: 121.69306 },
    name: 'Вилюйск',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Vilyuisk' },
    cases: {
      da: 'Вилюйску', pr: 'Вилюйске', ro: 'Вилюйска', su: 'Вилюйск', tv: 'Вилюйском', vi: 'в Вилюйск',
    },
  }, {
    country_code: 'RU',
    code: 'NGK',
    coordinates: { lat: 51.8, lon: 143.16667 },
    name: 'Ноглики',
    time_zone: 'Asia/Sakhalin',
    name_translations: { en: 'Nogliki' },
    cases: {
      da: 'Ноглики', pr: 'Ноглики', ro: 'Ноглики', su: 'Ноглики', tv: 'Ноглики', vi: 'в Ноглики',
    },
  }, {
    country_code: 'RU',
    code: 'BAX',
    coordinates: { lat: 53.361088, lon: 83.547646 },
    name: 'Барнаул',
    time_zone: 'Asia/Novokuznetsk',
    name_translations: { en: 'Barnaul' },
    cases: {
      da: 'Барнаулу', pr: 'Барнауле', ro: 'Барнаула', su: 'Барнаул', tv: 'Барнаулом', vi: 'в Барнаул',
    },
  }, {
    country_code: 'RU',
    code: 'CKH',
    coordinates: { lat: 70.63333, lon: 147.88333 },
    name: 'Чокурдах',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Chokurdah' },
    cases: {
      da: 'Чокурдаху', pr: 'Чокурдахе', ro: 'Чокурдаха', su: 'Чокурдах', tv: 'Чокурдахом', vi: 'в Чокурдах',
    },
  }, {
    country_code: 'RU',
    code: 'KSZ',
    coordinates: { lat: 61.233334, lon: 46.7 },
    name: 'Котлас',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Kotlas' },
    cases: {
      da: 'Котласу', pr: 'Котласе', ro: 'Котласа', su: 'Котлас', tv: 'Котласом', vi: 'в Котлас',
    },
  }, {
    country_code: 'RU',
    code: 'SUY',
    coordinates: { lat: 62.166667, lon: 117.633333 },
    name: 'Сунтар',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Suntar' },
    cases: {
      da: 'Сунтару', pr: 'Сунтаре', ro: 'Сунтара', su: 'Сунтар', tv: 'Сунтаром', vi: 'в Сунтар',
    },
  }]

  const arr4 = [{
    country_code: 'RU',
    code: 'NAL',
    coordinates: { lat: 43.533333, lon: 43.7 },
    name: 'Нальчик',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Nalchik' },
    cases: {
      da: 'Нальчику', pr: 'Нальчике', ro: 'Нальчика', su: 'Нальчик', tv: 'Нальчиком', vi: 'в Нальчик',
    },
  }, {
    country_code: 'RU',
    code: 'TGK',
    coordinates: { lat: 47.243378, lon: 38.864017 },
    name: 'Таганрог',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Taganrog' },
    cases: {
      da: 'Таганрогу', pr: 'Таганроге', ro: 'Таганрога', su: 'Таганрог', tv: 'Таганрогом', vi: 'в Таганрог',
    },
  }, {
    country_code: 'RU',
    code: 'BCX',
    coordinates: { lat: 53.933334, lon: 58.333332 },
    name: 'Белорецк',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Beloreck' },
    cases: {
      da: 'Белорецку', pr: 'Белорецке', ro: 'Белорецка', su: 'Белорецк', tv: 'Белорецком', vi: 'в Белорецк',
    },
  }, {
    country_code: 'RU',
    code: 'STW',
    coordinates: { lat: 45.333332, lon: 42.00833 },
    name: 'Ставрополь',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Stavropol' },
    cases: {
      da: 'Ставрополю', pr: 'Ставрополе', ro: 'Ставрополя', su: 'Ставрополь', tv: 'Ставрополем', vi: 'в Ставрополь',
    },
  }, {
    country_code: 'RU',
    code: 'IKS',
    coordinates: { lat: 71.7, lon: 128.9 },
    name: 'Тикси',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Tiksi' },
    cases: {
      da: 'Тикси', pr: 'Тикси', ro: 'Тикси', su: 'Тикси', tv: 'Тикси', vi: 'в Тикси',
    },
  }, {
    country_code: 'RU',
    code: 'VHV',
    coordinates: { lat: 63.45667, lon: 120.26444 },
    name: 'Верхневилюйск',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Verhnevilyuisk' },
    cases: {
      da: 'Верхневилюйску', pr: 'в Верхневилюйске', ro: 'Верхневилюйска', su: 'Верхневилюйск', tv: 'Верхневилюйском', vi: 'в Верхневилюйск',
    },
  }, {
    country_code: 'RU',
    code: 'NFG',
    coordinates: { lat: 61.13333, lon: 73.05 },
    name: 'Нефтеюганск',
    time_zone: 'Asia/Yekaterinburg',
    name_translations: { en: 'Nefteyugansk' },
    cases: {
      da: 'Нефтеюганску', pr: 'Нефтеюганске', ro: 'Нефтеюганска', su: 'Нефтеюганск', tv: 'Нефтеюганском', vi: 'в Нефтеюганск',
    },
  }, {
    country_code: 'RU',
    code: 'KVR',
    coordinates: { lat: 44.266865, lon: 135.0357 },
    name: 'Кавалерово',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Kavalerovo' },
    cases: {
      da: 'Кавалерово', pr: 'Кавалерово', ro: 'Кавалерово', su: 'Кавалерово', tv: 'Кавалерово', vi: 'в Кавалерово',
    },
  }, {
    country_code: 'RU',
    code: 'UMS',
    coordinates: { lat: 60.41528, lon: 134.54722 },
    name: 'Усть-Мая',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Ust-Maya' },
    cases: {
      da: 'Уста-Мае', pr: 'Усть-Мае', ro: 'Усть-Маю', su: 'Усть-Мая', tv: 'Усть-Маей', vi: 'Уста-Маю',
    },
  }, {
    country_code: 'RU',
    code: 'UUS',
    coordinates: { lat: 46.966667, lon: 142.75 },
    name: 'Южно-Сахалинск',
    time_zone: 'Asia/Srednekolymsk',
    name_translations: { en: 'Yuzhno-Sakhalinsk' },
    cases: {
      da: 'Южно-Сахалинску', pr: 'Южно-Сахалинске', ro: 'Южно-Сахалинска', su: 'Южно-Сахалинск', tv: 'Южно-Сахалинском', vi: 'в Южно-Сахалинск',
    },
  }, {
    country_code: 'RU',
    code: 'ADH',
    coordinates: { lat: 58.6, lon: 125.4 },
    name: 'Алдан',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Aldan' },
    cases: {
      da: 'Алдану', pr: 'Алдане', ro: 'Алдана', su: 'Алдан', tv: 'Алданом', vi: 'в Алдан',
    },
  }, {
    country_code: 'RU',
    code: 'BVV',
    coordinates: { lat: 44.928646, lon: 147.61337 },
    name: 'Итуруп',
    time_zone: 'Asia/Sakhalin',
    name_translations: { en: 'Iturup Island' },
    cases: {
      da: 'Итурупу', pr: 'Итурупе', ro: 'Итурупа', su: 'Итуруп', tv: 'Итурупом', vi: 'в Итуруп',
    },
  }, {
    country_code: 'RU',
    code: 'NNM',
    coordinates: { lat: 67.61667, lon: 53.15 },
    name: 'Нарьян-Мар',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Naryan-Mar' },
    cases: {
      da: 'Нарьян-Мару', pr: 'Нарьян-Маре', ro: 'Нарьян-Мара', su: 'Нарьян-Мар', tv: 'Нарьян-Маром', vi: 'в Нарьян-Мар',
    },
  }, {
    country_code: 'RU',
    code: 'UIK',
    coordinates: { lat: 58.13333, lon: 102.55 },
    name: 'Усть-Илимск',
    time_zone: 'Asia/Irkutsk',
    name_translations: { en: 'Ust-Ilimsk' },
    cases: {
      da: 'Усть-Илимску', pr: 'Усть-Илимске', ro: 'Усть-Илимска', su: 'Усть-Илимск', tv: 'Усть-Илимском', vi: 'в Усть-Илимск',
    },
  }, {
    country_code: 'RU',
    code: 'BTK',
    coordinates: { lat: 56.36667, lon: 101.816666 },
    name: 'Братск',
    time_zone: 'Asia/Irkutsk',
    name_translations: { en: 'Bratsk' },
    cases: {
      da: 'Братску', pr: 'Братске', ro: 'Братска', su: 'Братск', tv: 'Братском', vi: 'в Братск',
    },
  }, {
    country_code: 'RU',
    code: 'URS',
    coordinates: { lat: 51.75, lon: 36.266666 },
    name: 'Курск',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Kursk' },
    cases: {
      da: 'Курску', pr: 'Курске', ro: 'Курска', su: 'Курск', tv: 'Курском', vi: 'в Курск',
    },
  }, {
    country_code: 'RU',
    code: 'MCX',
    coordinates: { lat: 42.82095, lon: 47.65611 },
    name: 'Махачкала',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Makhachkala' },
    cases: {
      da: 'Махачкале', pr: 'Махачкале', ro: 'Махачкалы', su: 'Махачкала', tv: 'Махачкалой', vi: 'в Махачкалу',
    },
  }, {
    country_code: 'RU',
    code: 'MJZ',
    coordinates: { lat: 62.533333, lon: 114.03333 },
    name: 'Мирный',
    time_zone: 'Asia/Yakutsk',
    name_translations: { en: 'Mirnyj' },
    cases: {
      da: 'Мирному', pr: 'Мирном', ro: 'Мирного', su: 'Мирный', tv: 'Мирным', vi: 'в Мирный',
    },
  }, {
    country_code: 'RU',
    code: 'AMV',
    coordinates: { lat: 69.76667, lon: 61.55 },
    name: 'Амдерма',
    time_zone: 'Europe/Moscow',
    name_translations: { en: 'Amderma' },
    cases: {
      da: 'Амдерме', pr: 'Амдерме', ro: 'Амдермы', su: 'Амдерма', tv: 'Амдермой', vi: 'в Амдерму',
    },
  }, {
    country_code: 'RU',
    code: 'ERG',
    coordinates: { lat: 61.275, lon: 108.03 },
    name: 'Ербогачён',
    time_zone: 'Asia/Irkutsk',
    name_translations: { en: 'Erbogachen' },
    cases: {
      da: 'Ербогачёну', pr: 'Ербогачёне', ro: 'Ербогачёна', su: 'Ербогачён', tv: 'Ербогачёном', vi: 'в Ербогачён',
    },
  }, {
    country_code: 'RU',
    code: 'BQJ',
    coordinates: { lat: 67.655, lon: 134.641667 },
    name: 'Батагай',
    time_zone: 'Asia/Vladivostok',
    name_translations: { en: 'Batagay' },
    cases: {
      da: 'Батагаю', pr: 'Батагае', ro: 'Батагая', su: 'Батагай', tv: 'Батагаем', vi: 'в Батагай',
    },
  }, {
    country_code: 'RU',
    code: 'USR',
    coordinates: { lat: 64.568056, lon: 143.236111 },
    name: 'Усть-Нера',
    time_zone: 'Asia/Ust-Nera',
    name_translations: { en: 'Ust-Nera' },
    cases: {
      da: 'Усть-Нере', pr: 'Усть-Нере', ro: 'Усть-Неры', su: 'Усть-Нера', tv: 'Усть-Нерой', vi: 'в Усть-Неру',
    },
  }]

  await Iata.create(arr)
  await Iata.create(arr2)
  await Iata.create(arr3)
  await Iata.create(arr4)
}

// main()
