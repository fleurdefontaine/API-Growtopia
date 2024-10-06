const axios = require("axios");
const cheerio = require("cheerio");

/**
 * Fetches the sprite image URL from the Growtopia Wiki based on the provided search term.
 * @param {string} input - The search term (e.g., "Diamond Lock Seed").
 * @param {boolean} isSeed - If true, uses seed-specific selector; otherwise, uses general item selector.
 * @returns {Promise<string | undefined>} - The image URL in PNG format if found, or undefined if not found.
 */
async function getSpriteUrl(input, isSeed = false) {
  try {
    if (!input) return undefined;

    const encodedInput = encodeURIComponent(input);
    const link = `https://growtopia.wikia.com/wiki/${encodedInput}`;
    const response = await axios.get(link);
    
    const $ = cheerio.load(response.data);
    const selector = isSeed ? ".seedColor .growsprite > img" : ".growsprite > img";
    const spriteUrl = $(selector).attr("src");
    
    if (!spriteUrl) return undefined;

    return spriteUrl.replace("webp", "png");
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(`Error fetching page: ${error.response.status}`);
      throw new Error(`Request failed with status code ${error.response.status}`);
    } else {
      throw error;
    }
  }
}

module.exports = {
  getSeedSprite: (input) => getSpriteUrl(input, true),
  getSpriteItem: (itemName) => getSpriteUrl(itemName, false),
};