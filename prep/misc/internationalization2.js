// Internationalization 2

// Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'

// Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example:

console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'


// When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises.

// (If you're interested, you can find a list of locales here: http://www.localeplanet.com/icu/iso639.html)

function localGreet(str) {
  let isoCodeRegion = extractRegion(str);
  let isoCodeLanguage = extractLanguage(str);

  // English
  switch(isoCodeRegion) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(isoCodeLanguage);
  }
}

function extractLanguage(str) {
  return str.split('.')[0].split('_')[0];
}

function extractRegion(str) {
  return str.split('.')[0].split('_')[1];
}

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