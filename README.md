# Earplug

## Overview

This is a game library website that takes as input a json containing games titles and displays a library of those games using the igdb API.

## Preview

<p align="center"><img src="https://github.com/delath/earplug/blob/assets/preview1.png?raw=true" alt="Preview 1" width="100%" /></p>
<p align="center"><img src="https://github.com/delath/earplug/blob/assets/preview2.png?raw=true" alt="Preview 2" width="100%" /></p>

## Installation

```bash
git clone https://github.com/delath/earplug.git
```

```bash
npm install
```

Set up environment variables in `.env`

```
IGDB_CLIENT_ID=<YOUR_IGDB_CLIENT_ID>
IGDB_CLIENT_SECRET=<YOUR_IGDB_CLIENT_SECRET>
```

Create a `games.json` in the root of the repository, containing all the titles of the games to display, as an example:
```json
[
    "AI The Somnium Files",
    "Alan Wake II",
    "Among Us",
    "Animal Well"
]
```

Start the website in dev mode

```bash
npm run dev
```

The first time only, it might take some time to fetch all the data and write it on the `games_metadata.json`, a file you can manually edit should you want to manage the games on your main page.

## Acknowledgments

Almost all of this project has been based on the work of [mvximenko](https://github.com/mvximenko), you could say this is a fork of [gg](https://github.com/mvximenko/gg) with a different goal.
