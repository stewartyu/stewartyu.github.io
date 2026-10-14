# stewartyu.com

Personal site for my work as a composer and lyricist, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

    npm install
    npm run dev

Open http://localhost:4321.

## Add a show

Add a Markdown file to `src/content/shows/`. Copy an existing one for the fields; the body is the synopsis.

## Checks

Pull requests run type-checking (`npm run check`), a build, and an internal link check. Run the first two locally before opening a PR.

## Deploy

Push to `development`. The GitHub Actions workflow builds the site and publishes it.
