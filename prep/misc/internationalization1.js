// Internationalization 1

// Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

console.log(greet('en')); // 'Hi!'
console.log(greet('fr')); // 'Salut!'
console.log(greet('pt')); // 'Olá!'
console.log(greet('de')); // 'Hallo!'
console.log(greet('sv')); // 'Hej!'
console.log(greet('af')); // 'Haai!'
console.log(greet('zh')); // 'Ni Hao'
console.log(greet('dd')); // 'lolwut'


function greet(isoCode) {
  switch (isoCode) {
    case 'en':
      return 'Hi!';
      // break; // break statement not necessary since return breaks out of the function anyway
    case 'fr':
      return 'Salut!';
      // break; // break statement not necessary since return breaks out of the function anyway
    case 'pt':
      return 'Olá!';
      // break; // break statement not necessary since return breaks out of the function anyway
    case 'de':
      return 'Hallo!';
      // break; // break statement not necessary since return breaks out of the function anyway
    case 'sv':
      return 'Hej!';
      // break; // break statement not necessary since return breaks out of the function anyway
    case 'af':
      return 'Haai!';
      // break; // break statement not necessary since return breaks out of the function anyway
    case 'zh':
      return 'Ni Hao!';
      // break; // break statement not necessary since return breaks out of the function anyway
    default:
      return 'lolwut';
      // break; // break statement not necessary since return breaks out of the function anyway
  }
}