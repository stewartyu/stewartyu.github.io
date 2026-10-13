import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per musical in src/content/shows/.
// The frontmatter holds the structured details; the body is the synopsis.
const shows = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shows' }),
  schema: z.object({
    title: z.string(),
    logline: z.string(),
    // Your credit on the show, e.g. "Music & Lyrics" or "Music".
    credit: z.string(),
    // Where the show is right now, e.g. "In development · Seeking producers".
    status: z.string(),
    // Lower numbers appear first on the Shows page.
    order: z.number().default(100),
    // Featured shows appear on the home page.
    featured: z.boolean().default(false),
    // Path to an image in public/, e.g. "/img/shows/my-show.jpg".
    image: z.string().optional(),
    songs: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          // An embeddable player URL (YouTube embed, SoundCloud widget, etc.).
          embed: z.string().optional(),
        }),
      )
      .default([]),
    history: z.array(z.object({ year: z.string(), event: z.string() })).default([]),
    team: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
    quotes: z.array(z.object({ text: z.string(), source: z.string() })).default([]),
  }),
});

export const collections = { shows };
