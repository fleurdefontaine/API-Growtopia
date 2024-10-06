const readline = require('readline');
const { getSpriteItem, getSeedSprite } = require('./api/Sprite');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('Enter item name (or "q" to quit): ', (itemName) => {
    if (itemName.toLowerCase() === 'q') {
      rl.close();
      return;
    }

    rl.question('Is this a seed? (y/n): ', async (isSeed) => {
      try {
        const spriteUrl = isSeed.toLowerCase() === 'y' 
          ? await getSeedSprite(itemName)
          : await getSpriteItem(itemName);

        if (spriteUrl) {
          console.log(`Sprite URL: ${spriteUrl}`);
        } else {
          console.log('Sprite not found.');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }

      promptUser();
    });
  });
}

console.log('You can fetch sprite URLs for Growtopia items and seeds.');
promptUser();

rl.on('close', () => {
  process.exit(0);
});