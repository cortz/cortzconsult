# cortzconsult

Personal portfolio site — plain HTML, CSS, and static assets. No build step required.

## Local preview

Open `index.html` in a browser, or from the repo root:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## GitHub Pages

Deploy from the repository root (no npm build):

1. **Settings → Pages**
2. **Source:** Deploy from branch `main` (or `master`)
3. **Folder:** `/ (root)`

If this repo is `cortz/cortzconsult`, the site URL is typically `https://cortz.github.io/cortzconsult/`. A user-site repo (`cortz.github.io`) would be served at `https://cortz.github.io`.

Custom domain: `cortzconsult.dk` (see `CNAME`).

## Notes

- Analytics still uses legacy Universal Analytics (`UA-…`); migrating to GA4 is a separate follow-up.
