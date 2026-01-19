const fs = require('fs');
const path = require('path');

const locales = ['fr', 'ar'];
const messagesDir = path.join(__dirname, '../messages');

// Read all translation files
const translations = {};
locales.forEach((locale) => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  translations[locale] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
});

// Function to get all keys from an object recursively
function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

// Get all keys from French (reference)
const frKeys = getAllKeys(translations.fr);
const arKeys = getAllKeys(translations.ar);

// Find missing keys
const missingInAr = frKeys.filter((key) => !arKeys.includes(key));
const missingInFr = arKeys.filter((key) => !frKeys.includes(key));

console.log('=== Translation Verification ===\n');
console.log(`French keys: ${frKeys.length}`);
console.log(`Arabic keys: ${arKeys.length}\n`);

if (missingInAr.length > 0) {
  console.log('❌ Missing in Arabic:');
  missingInAr.forEach((key) => console.log(`  - ${key}`));
} else {
  console.log('✅ All French keys exist in Arabic');
}

if (missingInFr.length > 0) {
  console.log('\n❌ Missing in French:');
  missingInFr.forEach((key) => console.log(`  - ${key}`));
} else {
  console.log('\n✅ All Arabic keys exist in French');
}

if (missingInAr.length === 0 && missingInFr.length === 0) {
  console.log('\n✅ All translations are complete!');
  process.exit(0);
} else {
  console.log('\n❌ Translation verification failed');
  process.exit(1);
}
