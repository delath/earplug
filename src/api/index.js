import { API_URL, CLIENT_ID, TOKEN_URL } from '@/config';
import fs from 'fs/promises';
import path from 'path';

const gamesByRating = `
  fields
    name,
    cover.image_id;
  sort aggregated_rating desc;
  where aggregated_rating_count > 20 & aggregated_rating != null & rating != null & category = 0;
  limit 12;
`;

const fullGameInfo = `
  fields
    name,
    summary,
    aggregated_rating, 
    cover.image_id, 

    genres.name,
    screenshots.image_id, 

    release_dates.platform.name,
    release_dates.human,

    involved_companies.developer, 
    involved_companies.publisher, 
    involved_companies.company.name, 

    game_modes.name, 
    game_engines.name, 
    player_perspectives.name,
    themes.name,

    external_games.category, 
    external_games.name, 
    external_games.url, 

    similar_games.name,
    similar_games.cover.image_id,

    websites.url,
    websites.category,
    websites.trusted
;`;

const api = {
  token: null,

  async getToken() {
    try {
      const res = await fetch(TOKEN_URL, { method: 'POST', cache: 'no-store' });
      this.token = await res.json();
    } catch (error) {
      console.error(error);
    }
  },

  request({ resource, ...options }) {
    return fetch(`${API_URL}${resource}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': CLIENT_ID,
        Authorization: `Bearer ${this.token.access_token}`,
      },
      ...options,
    })
      .then(async (response) => {
        const data = await response.json();
        return data;
      })
      .catch((error) => {
        return error;
      });
  },

  getGamesByRating() {
    return this.request({
      resource: '/games',
      body: gamesByRating,
    });
  },

  getGameById(gameId) {
    return this.request({
      resource: '/games',
      body: `${fullGameInfo} where id = (${gameId});`,
    });
  },

  search({ name = '', ...fields }) {
    let str = '';

    for (const [key, value] of Object.entries(fields)) {
      str += ` & ${key} = ${value}`;
    }

    return this.request({
      resource: '/games',
      body: `
      fields
        name,
        cover.image_id;
      where
        cover.image_id != null
        ${str};
      ${name ? `search "${name}";` : ''}
      limit 10;`,
    });
  },

  async getMyOwnGames() {
    const cacheFilePath = path.resolve('./games_metadata.json');
    const sourceFilePath = path.resolve('./games.json');
    let games = [];

    try {
      // Check if the cache file exists
      const cacheData = await fs.readFile(cacheFilePath, 'utf-8');
      games = JSON.parse(cacheData);
    } catch (cacheError) {
      console.log('Cache file not found, fetching data from source file...');

      try {
        // Read the JSON file containing the list of names
        const namesData = await fs.readFile(sourceFilePath, 'utf-8');
        const names = JSON.parse(namesData);

        for (const name of names) {
          try {
            // Search for the game by name
            const searchResult = await this.search({ name });

            // If search result is not empty, add the first entry to games array
            if (searchResult.length > 0) {
              games.push(searchResult[0]);
            }
          } catch (searchError) {
            console.error(`Error searching for game "${name}":`, searchError);
          }
        }

        // Cache the result
        await fs.writeFile(cacheFilePath, JSON.stringify(games, null, 2), 'utf-8');
      } catch (sourceError) {
        console.error('Error reading source file or fetching data:', sourceError);
      }
    }

    return games;
  },
};

await api.getToken();

export default api;
