// Locale Part 2

// Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

function extractRegion(str) {
  return str.split('_')
            .join(',')
            .split('.')
            .join(',')
            .split('-')
            .join(',')
            .split(',')[1];
}

// 'ko_KR.UTF-16'.split('_').join(',').split('.').join(',').split('-').join(',').split(',')[1];