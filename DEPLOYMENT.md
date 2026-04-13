# GitHub Pages Deployment (GitHub Actions)

For custom domains + SSL, GitHub Pages tends to be most reliable when the site is deployed as a Pages artifact (served at `/`) rather than using the legacy “Deploy from a branch” + `/docs` folder approach.

This repo includes a workflow at `.github/workflows/pages.yml` that builds the Vite site and deploys it to GitHub Pages.

## One-time GitHub Pages setup

1. Go to your repository settings on GitHub
2. Navigate to **Pages**
3. Under **Build and deployment** → **Source**, select **GitHub Actions**
4. (Optional) Set **Custom domain** to match `public/CNAME`
5. Enable **Enforce HTTPS** once it becomes available

## Deploy

- Push to `main`.
- GitHub Actions will run the workflow and publish the site.

## Custom domain notes

- The domain for Pages is sourced from `public/CNAME` (Vite copies it into the build output).
- Keep the Pages **Custom domain** setting and `public/CNAME` in sync (either apex like `powerstemsolutions.com` or `www.powerstemsolutions.com`).
