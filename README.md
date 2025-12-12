# Aggregate Signatures for IoT (IBAS) — FYP Website

This static site markets and explains an implementation of Gentry’s Identity‑Based Aggregate Signature (IBAS) scheme for IoT weather sensors. It presents the problem context, the IBAS solution, a demo flow, and an API preview.

## Run locally

- Open `index.html` directly in your browser, or
- Serve the folder with a simple HTTP server:

```bash
# Option A: Python 3
python -m http.server 8080

# Option B: Node (npx)
npx http-server -p 8080
```

Then browse to `http://localhost:8080`.

## Deploy (GitHub Pages)

1. Commit and push this repository.
2. In GitHub, go to Settings → Pages.
3. Source: Deploy from a branch; Branch: `main` (or `master`), folder `/root`.
4. Save. Your site will be available at the provided URL.

## Customize

- Edit content in `index.html`.
- Adjust styles in `css/site.css`.
- Tweak interactions in `js/site.js`.

## Notes on IBAS

Identity‑based aggregate signatures allow multiple device signatures to be combined into a single compact signature verified once against all identities and messages. This reduces bandwidth and verification cost, and removes certificate management by using device identifiers (e.g., MAC/serial) directly.

