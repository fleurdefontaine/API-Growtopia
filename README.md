# Growtopia Sprite API

A simple Node.js module for fetching sprite image URLs from the Growtopia Wiki.

[![NPM Version](https://img.shields.io/npm/v/growtopia-sprite.svg)](https://www.npmjs.com/package/growtopia-sprite)
[![Downloads](https://img.shields.io/npm/dt/growtopia-sprite.svg)](https://www.npmjs.com/package/growtopia-sprite)
[![GitHub stars](https://img.shields.io/github/stars/fleurdefontaine/API-Growtopia.svg)](https://github.com/fleurdefontaine/API-Growtopia/stargazers)
[![Visits](https://badges.pufler.dev/visits/fleurdefontaine/API-Growtopia)](https://badges.pufler.dev)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Error Handling](#error-handling)
- [Examples](#examples)
- [Credits](#credits)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install growtopia-sprite
```

## Usage

### As a module

```javascript
const { getSpriteItem, getSeedSprite } = require('growtopia-sprite');

// Fetch a regular item sprite
getSpriteItem('Diamond Lock')
  .then(url => console.log('Item sprite URL:', url))
  .catch(error => console.error('Error:', error));

// Fetch a seed sprite
getSeedSprite('Diamond Lock')
  .then(url => console.log('Seed sprite URL:', url))
  .catch(error => console.error('Error:', error));
```

## API

### `getSpriteItem(itemName: string): Promise<string | undefined>`

Fetches the sprite URL for a regular item.

- `itemName`: The name of the item to fetch.
- Returns: A promise that resolves to the sprite URL, or `undefined` if not found.

### `getSeedSprite(seedName: string): Promise<string | undefined>`

Fetches the sprite URL for a seed.

- `seedName`: The name of the seed to fetch.
- Returns: A promise that resolves to the sprite URL, or `undefined` if not found.

## Error Handling

Both functions will throw an error if there's a network issue or if the wiki page returns a non-200 status code. It's recommended to use try-catch blocks or .catch() methods when using these functions.

## Examples

### Fetching multiple sprites

```javascript
const { getSpriteItem, getSeedSprite } = require('growtopia-sprite');

async function multiSprite() {
  try {
    const items = ['Diamond Lock', 'World Lock', 'Dirt'];
    const itemPromises = items.map(item => getSpriteItem(item));
    const seedPromises = items.map(item => getSeedSprite(item));
    
    const [itemResults, seedResults] = await Promise.all([
      Promise.all(itemPromises),
      Promise.all(seedPromises)
    ]);
    
    console.log('Item Sprites:', itemResults);
    console.log('Seed Sprites:', seedResults);
  } catch (error) {
    console.error('Error fetching sprites:', error);
  }
}

multiSprite();
```

## Credits

The implementation of the `getSpriteItem` functionality in this project was inspired by and adapted from the [Growtopia API](https://github.com/Growtopian-Bot/growtopia-api) project. We appreciate their contribution to the Growtopia development community.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
