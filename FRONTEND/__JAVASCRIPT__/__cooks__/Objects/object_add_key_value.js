
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
};

// !!!!
tekkenCharacter['hair color'] = 'dyed orange';      // если свойство содержит пробелы 
// !!!!                                             // то его можно использовать таким способом

tekkenCharacter.origin = 'South Korea';

const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';


console.log(tekkenCharacter);

// {
//   player: 'Hwoarang',
//   fightingStyle: 'Tae Kwon Doe',
//   human: true,
//   origin: 'South Korea',
//   'hair color': 'dyed orange',
//   'eye color': 'brown'
// };
