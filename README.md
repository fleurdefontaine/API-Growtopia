# Growtopia Sprite API

This is a simple Node.js module that fetches sprite image URLs from the Growtopia Wiki.

## Installation

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

### As a CLI

You can also use this as an interactive command-line tool:

1. Clone this repository
2. Run `npm install` in the project directory
3. Run `node index.js`
4. Follow the prompts to fetch sprite URLs

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

Both functions will throw an error if there's a network issue or if the wiki page returns a non-200 status code.

## Credits

The implementation of the `getSpriteItem` functionality in this project was inspired by and adapted from the [Growtopia API](https://github.com/Growtopian-Bot/growtopia-api) project. We appreciate their contribution to the Growtopia development community.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.