import { API_URL, CLIENT_ID, TOKEN_URL } from '@/config';

const cacheData = [
  {
    "id": 147519,
    "cover": {
      "id": 147519,
      "image_id": "co7j13"
    },
    "name": "Against the Storm"
  },
  {
    "id": 104971,
    "cover": {
      "id": 75886,
      "image_id": "co1mjy"
    },
    "name": "AI: The Somnium Files"
  },
  {
    "id": 185246,
    "cover": {
      "id": 304947,
      "image_id": "co6jar"
    },
    "name": "Alan Wake II"
  },
  {
    "id": 2993,
    "cover": {
      "id": 2993,
      "image_id": "co1rcy"
    },
    "name": "The Wolf Among Us"
  },
  {
    "id": 191435,
    "cover": {
      "id": 209141,
      "image_id": "co4hdh"
    },
    "name": "Animal Well"
  },
  {
    "id": 106980,
    "cover": {
      "id": 320941,
      "image_id": "co6vn1"
    },
    "name": "Anno: Mutationem"
  },
  {
    "id": 228542,
    "cover": {
      "id": 299940,
      "image_id": "co6ffo"
    },
    "name": "Armored Core VI: Fires of Rubicon"
  },
  {
    "id": 135995,
    "cover": {
      "id": 226901,
      "image_id": "co4v2t"
    },
    "name": "As Dusk Falls"
  },
  {
    "id": 110039,
    "cover": {
      "id": 283271,
      "image_id": "co62kn"
    },
    "name": "A Space for the Unbound"
  },
  {
    "id": 80885,
    "cover": {
      "id": 122060,
      "image_id": "co2m6k"
    },
    "name": "Astalon: Tears of the Earth"
  },
  {
    "id": 251833,
    "cover": {
      "id": 333155,
      "image_id": "co752b"
    },
    "name": "Balatro"
  },
  {
    "id": 1880,
    "cover": {
      "id": 1880,
      "image_id": "co7ugr"
    },
    "name": "Baldur's Gate: Enhanced Edition"
  },
  {
    "id": 119171,
    "cover": {
      "id": 289025,
      "image_id": "co670h"
    },
    "name": "Baldur's Gate 3"
  },
  {
    "id": 5613,
    "cover": {
      "id": 5613,
      "image_id": "co1ndo"
    },
    "name": "Baldur's Gate II: Enhanced Edition"
  },
  {
    "id": 83731,
    "cover": {
      "id": 83731,
      "image_id": "co20ux"
    },
    "name": "Beat Saber"
  },
  {
    "id": 28311,
    "cover": {
      "id": 290296,
      "image_id": "co67zs"
    },
    "name": "Bendy and the Ink Machine"
  },
  {
    "id": 256396,
    "cover": {
      "id": 314338,
      "image_id": "co6qjm"
    },
    "name": "Bugsnax"
  },
  {
    "id": 136773,
    "cover": {
      "id": 136773,
      "image_id": "co4a5i"
    },
    "name": "Card Shark"
  },
  {
    "id": 90055,
    "cover": {
      "id": 111846,
      "image_id": "co2eau"
    },
    "name": "Carrion"
  },
  {
    "id": 133866,
    "cover": {
      "id": 248502,
      "image_id": "co5bqu"
    },
    "name": "Cassette Beasts"
  },
  {
    "id": 113905,
    "cover": {
      "id": 114021,
      "image_id": "co2fz9"
    },
    "name": "Catherine Classic"
  },
  {
    "id": 117271,
    "cover": {
      "id": 238638,
      "image_id": "co544u"
    },
    "name": "Chained Echoes"
  },
  {
    "id": 198499,
    "cover": {
      "id": 308145,
      "image_id": "co6lrl"
    },
    "name": "Chants of Sennaar"
  },
  {
    "id": 142076,
    "cover": {
      "id": 205781,
      "image_id": "co4es5"
    },
    "name": "Cruelty Squad"
  },
  {
    "id": 124954,
    "cover": {
      "id": 114174,
      "image_id": "co2g3i"
    },
    "name": "Crusader Kings III"
  },
  {
    "id": 164944,
    "cover": {
      "id": 236031,
      "image_id": "co524f"
    },
    "name": "Cultic"
  },
  {
    "id": 12579,
    "cover": {
      "id": 85723,
      "image_id": "co1u57"
    },
    "name": "Danganronpa V3: Killing Harmony"
  },
  {
    "id": 203722,
    "cover": {
      "id": 227137,
      "image_id": "co4v9d"
    },
    "name": "Dave the Diver"
  },
  {
    "id": 26855,
    "cover": {
      "id": 351787,
      "image_id": "co7jfv"
    },
    "name": "Dead Cells"
  },
  {
    "id": 21634,
    "cover": {
      "id": 89284,
      "image_id": "co1ww4"
    },
    "name": "Death Road to Canada"
  },
  {
    "id": 19564,
    "cover": {
      "id": 274400,
      "image_id": "co5vq8"
    },
    "name": "Death Stranding"
  },
  {
    "id": 123695,
    "cover": {
      "id": 254143,
      "image_id": "co5g3j"
    },
    "name": "Deep Sleep Trilogy"
  },
  {
    "id": 104786,
    "cover": {
      "id": 104786,
      "image_id": "co2muf"
    },
    "name": "Devotion"
  },
  {
    "id": 26472,
    "cover": {
      "id": 83503,
      "image_id": "co1sfj"
    },
    "name": "Disco Elysium"
  },
  {
    "id": 103337,
    "cover": {
      "id": 103337,
      "image_id": "co1y5o"
    },
    "name": "Divinity: Original Sin II - Definitive Edition"
  },
  {
    "id": 152122,
    "cover": {
      "id": 361542,
      "image_id": "co7qyu"
    },
    "name": "Doki Doki Literature Club Plus!"
  },
  {
    "id": 103298,
    "cover": {
      "id": 172571,
      "image_id": "co3p5n"
    },
    "name": "Doom Eternal"
  },
  {
    "id": 76,
    "cover": {
      "id": 122968,
      "image_id": "co2mvs"
    },
    "name": "Dragon Age: Origins"
  },
  {
    "id": 164867,
    "cover": {
      "id": 292892,
      "image_id": "co69zw"
    },
    "name": "Dredge"
  },
  {
    "id": 6341,
    "cover": {
      "id": 138341,
      "image_id": "co2yqt"
    },
    "name": "Dwarf Fortress"
  },
  {
    "id": 102584,
    "cover": {
      "id": 287660,
      "image_id": "co65yk"
    },
    "name": "Dying Light 2: Stay Human"
  },
  {
    "id": 116053,
    "cover": {
      "id": 90399,
      "image_id": "co1xr3"
    },
    "name": "Emily is Away <3"
  },
  {
    "id": 132083,
    "cover": {
      "id": 196490,
      "image_id": "co47m2"
    },
    "name": "Everhood"
  },
  {
    "id": 7046,
    "cover": {
      "id": 84814,
      "image_id": "co1tfy"
    },
    "name": "Factorio"
  },
  {
    "id": 16,
    "cover": {
      "id": 85752,
      "image_id": "co1u60"
    },
    "name": "Fallout: New Vegas"
  },
  {
    "id": 142688,
    "cover": {
      "id": 125367,
      "image_id": "co2oqf"
    },
    "name": "Farthest Frontier"
  },
  {
    "id": 517,
    "cover": {
      "id": 517,
      "image_id": "co1utk"
    },
    "name": "F.E.A.R."
  },
  {
    "id": 23248,
    "cover": {
      "id": 64984,
      "image_id": "mferu1am1yv5pcy5aplm"
    },
    "name": "Frostpunk"
  },
  {
    "id": 19560,
    "cover": {
      "id": 85062,
      "image_id": "co1tmu"
    },
    "name": "God of War"
  },
  {
    "id": 189828,
    "cover": {
      "id": 226296,
      "image_id": "co4um0"
    },
    "name": "Goodbye World"
  },
  {
    "id": 8682,
    "cover": {
      "id": 103303,
      "image_id": "co27pj"
    },
    "name": "Grim Fandango Remastered"
  },
  {
    "id": 22917,
    "cover": {
      "id": 81473,
      "image_id": "co1qv5"
    },
    "name": "Gris"
  },
  {
    "id": 228525,
    "cover": {
      "id": 381874,
      "image_id": "co86nm"
    },
    "name": "Hades II"
  },
  {
    "id": 231,
    "cover": {
      "id": 231,
      "image_id": "co7q89"
    },
    "name": "Half-Life"
  },
  {
    "id": 11156,
    "cover": {
      "id": 133030,
      "image_id": "co2una"
    },
    "name": "Horizon Zero Dawn"
  },
  {
    "id": 7578,
    "cover": {
      "id": 307308,
      "image_id": "co6l4c"
    },
    "name": "I Have No Mouth, and I Must Scream"
  },
  {
    "id": 184,
    "cover": {
      "id": 325010,
      "image_id": "co6ys2"
    },
    "name": "Indiana Jones and the Fate of Atlantis"
  },
  {
    "id": 190361,
    "cover": {
      "id": 255819,
      "image_id": "co5he3"
    },
    "name": "Iron Lung"
  },
  {
    "id": 194208,
    "cover": {
      "id": 228241,
      "image_id": "co4w41"
    },
    "name": "JoJo’s Bizarre Adventure: All-Star Battle R"
  },
  {
    "id": 103288,
    "cover": {
      "id": 103288,
      "image_id": "co2qgv"
    },
    "name": "Jump Force"
  },
  {
    "id": 29526,
    "cover": {
      "id": 29526,
      "image_id": "co21au"
    },
    "name": "Kindergarten"
  },
  {
    "id": 4843,
    "cover": {
      "id": 200538,
      "image_id": "co4aqi"
    },
    "name": "Kingdom Come: Deliverance"
  },
  {
    "id": 112939,
    "cover": {
      "id": 125555,
      "image_id": "co2ovn"
    },
    "name": "Later Alligator"
  },
  {
    "id": 239163,
    "cover": {
      "id": 307999,
      "image_id": "co6lnj"
    },
    "name": "Layers of Fear"
  },
  {
    "id": 8492,
    "cover": {
      "id": 78255,
      "image_id": "co1odr"
    },
    "name": "Lisa: The Painful"
  },
  {
    "id": 137243,
    "cover": {
      "id": 336145,
      "image_id": "co77dd"
    },
    "name": "Little Goody Two Shoes"
  },
  {
    "id": 24917,
    "cover": {
      "id": 125198,
      "image_id": "co2olq"
    },
    "name": "Lone Echo"
  },
  {
    "id": 8117,
    "cover": {
      "id": 115285,
      "image_id": "co2gyd"
    },
    "name": "Lone Survivor"
  },
  {
    "id": 138949,
    "cover": {
      "id": 237010,
      "image_id": "co52vm"
    },
    "name": "Marvel's Spider-Man Remastered"
  },
  {
    "id": 139295,
    "cover": {
      "id": 288544,
      "image_id": "co66n4"
    },
    "name": "Milk inside a bag of milk inside a bag of milk"
  },
  {
    "id": 159720,
    "cover": {
      "id": 201906,
      "image_id": "co4bsi"
    },
    "name": "Milk outside a bag of milk outside a bag of milk"
  },
  {
    "id": 188088,
    "cover": {
      "id": 356320,
      "image_id": "co7mxs"
    },
    "name": "Momodora: Moonlit Farewell"
  },
  {
    "id": 18182,
    "cover": {
      "id": 137166,
      "image_id": "co2xu6"
    },
    "name": "Momodora: Reverie Under the Moonlight"
  },
  {
    "id": 140427,
    "cover": {
      "id": 308544,
      "image_id": "co6m2o"
    },
    "name": "My Time at Sandrock"
  },
  {
    "id": 146564,
    "cover": {
      "id": 243341,
      "image_id": "co57rh"
    },
    "name": "Needy Streamer Overload"
  },
  {
    "id": 143612,
    "cover": {
      "id": 131489,
      "image_id": "co2tgh"
    },
    "name": "Neon White"
  },
  {
    "id": 52006,
    "cover": {
      "id": 81253,
      "image_id": "co1qp1"
    },
    "name": "Noita"
  },
  {
    "id": 3225,
    "cover": {
      "id": 325685,
      "image_id": "co6zat"
    },
    "name": "No Man's Sky"
  },
  {
    "id": 129097,
    "cover": {
      "id": 170859,
      "image_id": "co3nu3"
    },
    "name": "Norco"
  },
  {
    "id": 26765,
    "cover": {
      "id": 212929,
      "image_id": "co4kap"
    },
    "name": "Octopath Traveler"
  },
  {
    "id": 111717,
    "cover": {
      "id": 94036,
      "image_id": "co20k4"
    },
    "name": "One Step From Eden"
  },
  {
    "id": 11737,
    "cover": {
      "id": 286788,
      "image_id": "co65ac"
    },
    "name": "Outer Wilds"
  },
  {
    "id": 133227,
    "cover": {
      "id": 124824,
      "image_id": "co2obc"
    },
    "name": "Patrick's Parabox"
  },
  {
    "id": 19531,
    "cover": {
      "id": 39984,
      "image_id": "pzgwdpvoww1nrlkv7d5x"
    },
    "name": "Prey"
  },
  {
    "id": 1339,
    "cover": {
      "id": 151380,
      "image_id": "co38t0"
    },
    "name": "Psychonauts"
  },
  {
    "id": 26700,
    "cover": {
      "id": 85531,
      "image_id": "co1tzv"
    },
    "name": "Raging Loop"
  },
  {
    "id": 16724,
    "cover": {
      "id": 184471,
      "image_id": "co3yc7"
    },
    "name": "Rebuild 3: Gangs of Deadsville"
  },
  {
    "id": 265960,
    "cover": {
      "id": 329412,
      "image_id": "co726c"
    },
    "name": "Refind Self: The Personality Test"
  },
  {
    "id": 228535,
    "cover": {
      "id": 308005,
      "image_id": "co6lnp"
    },
    "name": "Remnant II"
  },
  {
    "id": 8254,
    "cover": {
      "id": 8254,
      "image_id": "co1taw"
    },
    "name": "Resident Evil"
  },
  {
    "id": 9643,
    "cover": {
      "id": 103077,
      "image_id": "co27j9"
    },
    "name": "Return of the Obra Dinn"
  },
  {
    "id": 118922,
    "cover": {
      "id": 111525,
      "image_id": "co2e1x"
    },
    "name": "Reventure"
  },
  {
    "id": 9789,
    "cover": {
      "id": 71529,
      "image_id": "co1j6x"
    },
    "name": "RimWorld"
  },
  {
    "id": 229794,
    "cover": {
      "id": 276842,
      "image_id": "co5xm2"
    },
    "name": "Risk of Rain Returns"
  },
  {
    "id": 118875,
    "cover": {
      "id": 284328,
      "image_id": "co63e0"
    },
    "name": "Roadwarden"
  },
  {
    "id": 144569,
    "cover": {
      "id": 241662,
      "image_id": "co56gu"
    },
    "name": "Sanabi"
  },
  {
    "id": 8072,
    "cover": {
      "id": 104004,
      "image_id": "co2890"
    },
    "name": "Sanitarium"
  },
  {
    "id": 76882,
    "cover": {
      "id": 106347,
      "image_id": "co2a23"
    },
    "name": "Sekiro: Shadows Die Twice"
  },
  {
    "id": 119273,
    "cover": {
      "id": 247925,
      "image_id": "co5bat"
    },
    "name": "Shadows of Doubt"
  },
  {
    "id": 210395,
    "cover": {
      "id": 233327,
      "image_id": "co501b"
    },
    "name": "Slay the Princess"
  },
  {
    "id": 9727,
    "cover": {
      "id": 106344,
      "image_id": "co2a20"
    },
    "name": "Soma"
  },
  {
    "id": 320,
    "cover": {
      "id": 266946,
      "image_id": "co5pz6"
    },
    "name": "S.T.A.L.K.E.R.: Shadow of Chernobyl"
  },
  {
    "id": 3049,
    "cover": {
      "id": 118846,
      "image_id": "co2jpa"
    },
    "name": "State of Decay"
  },
  {
    "id": 167271,
    "cover": {
      "id": 167271,
      "image_id": "co48w1"
    },
    "name": "Stonks-9800: Stock Market Simulator"
  },
  {
    "id": 18375,
    "cover": {
      "id": 18375,
      "image_id": "co1ik8"
    },
    "name": "System Shock"
  },
  {
    "id": 166722,
    "cover": {
      "id": 239044,
      "image_id": "co54g4"
    },
    "name": "The Case of the Golden Idol"
  },
  {
    "id": 275404,
    "cover": {
      "id": 347185,
      "image_id": "co7fw1"
    },
    "name": "The Exit 8"
  },
  {
    "id": 190197,
    "cover": {
      "id": 219307,
      "image_id": "co4p7v"
    },
    "name": "The Fabulous Fear Machine"
  },
  {
    "id": 120710,
    "cover": {
      "id": 122431,
      "image_id": "co2mgv"
    },
    "name": "The Henry Stickmin Collection"
  },
  {
    "id": 31819,
    "cover": {
      "id": 68712,
      "image_id": "rbw9ltnum893cnarcg5g"
    },
    "name": "The Hex"
  },
  {
    "id": 36278,
    "cover": {
      "id": 97655,
      "image_id": "co23cn"
    },
    "name": "The House in Fata Morgana"
  },
  {
    "id": 121501,
    "cover": {
      "id": 129125,
      "image_id": "co2rmt"
    },
    "name": "The Last Spell"
  },
  {
    "id": 137080,
    "cover": {
      "id": 356784,
      "image_id": "co7nao"
    },
    "name": "The Pony Factory"
  },
  {
    "id": 194404,
    "cover": {
      "id": 213304,
      "image_id": "co4kl4"
    },
    "name": "The Quarry"
  },
  {
    "id": 79864,
    "cover": {
      "id": 304977,
      "image_id": "co6jbl"
    },
    "name": "The Talos Principle II"
  },
  {
    "id": 129694,
    "cover": {
      "id": 129694,
      "image_id": "co2i05"
    },
    "name": "The Test"
  },
  {
    "id": 27531,
    "cover": {
      "id": 83185,
      "image_id": "co1s6p"
    },
    "name": "Tokyo Dark"
  },
  {
    "id": 124333,
    "cover": {
      "id": 195411,
      "image_id": "co46s3"
    },
    "name": "Ultrakill"
  },
  {
    "id": 119168,
    "cover": {
      "id": 125465,
      "image_id": "co2ot5"
    },
    "name": "Unreal Life"
  },
  {
    "id": 142549,
    "cover": {
      "id": 308794,
      "image_id": "co6m9m"
    },
    "name": "Viewfinder"
  },
  {
    "id": 18020,
    "cover": {
      "id": 68953,
      "image_id": "co1h7d"
    },
    "name": "Visage"
  },
  {
    "id": 178900,
    "cover": {
      "id": 323311,
      "image_id": "co6xgv"
    },
    "name": "Void Stranger"
  },
  {
    "id": 68576,
    "cover": {
      "id": 68576,
      "image_id": "co3whz"
    },
    "name": "Welcome to the Game II"
  },
  {
    "id": 87983,
    "cover": {
      "id": 87983,
      "image_id": "co1rgr"
    },
    "name": "What the Golf?"
  },
  {
    "id": 26869,
    "cover": {
      "id": 90043,
      "image_id": "co1xh7"
    },
    "name": "World of Horror"
  },
  {
    "id": 72447,
    "cover": {
      "id": 97372,
      "image_id": "co234s"
    },
    "name": "Yorkshire Gubbins"
  },
  {
    "id": 26565,
    "cover": {
      "id": 76514,
      "image_id": "co1n1e"
    },
    "name": "Yuppie Psycho"
  },
  {
    "id": 25343,
    "cover": {
      "id": 381859,
      "image_id": "co86n7"
    },
    "name": "Zero Escape: The Nonary Games"
  },
  {
    "id": 11549,
    "cover": {
      "id": 381857,
      "image_id": "co86n5"
    },
    "name": "Zero Escape: Zero Time Dilemma"
  }
];

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
      limit 1;`,
    });
  },

  async getMyOwnGames() {
    return cacheData;
  },
};

await api.getToken();

export default api;
