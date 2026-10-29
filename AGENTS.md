## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## After a PR merges: run the content smoke checks

Every merge to `development` deploys the live site (`.github/workflows/deploy.yml`, GitHub Pages).
After a merge, Stewart wants the content checks from the "Daily website smoke test" scheduled
task run against the live site. Certificate checks are not needed on merges.

- **If you are watching the PR and its merge event reaches you:** wait for the "Deploy to GitHub
  Pages" run on the merge commit to finish, then run the checks yourself and report the results.
- **Otherwise** (you only see the merge afterwards, or Stewart mentions merging): remind Stewart
  to have the checks run, and offer to run them right then.

The checks, read-only (report results, never change anything):

1. **Pages:** https://www.stewartyu.com loads over HTTPS with the title
   "Stewart Yu | Composer & lyricist", the "Hi, I'm Stewart!" heading, the Shows/About/Contact
   nav, and a "Featured shows" section listing four shows. These pages each load with real
   content: `/shows/`, `/about/`, `/contact/`, `/shows/yellow-frosted-willow/`,
   `/shows/the-oc-musical/`, `/shows/shooting-the-musical/`, `/shows/riverview-high-the-musical/`
   (if the PR added or removed a show, check the current list instead).
2. **Images and links:** run the site-check Python script stored in the "Daily website smoke
   test" scheduled task's prompt (read it with the `list_triggers` / `get_trigger` tools), saved
   to the scratchpad exactly as written and run with `python3 -I`. It checks all three of
   Stewart's sites; report this site's results and mention anything broken on the others.
   Facebook/X and 401/403/429 responses are "couldn't verify", not broken.
3. **The change itself:** confirm what the merged PR changed is visible on the live site.
