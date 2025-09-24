# GitHub Pages Deployment (Main Branch)

This project is configured to deploy directly from the main branch using the `/docs` folder.

## Deployment Process

1. Build the project:
   ```sh
   npm run build
   ```

2. Deploy (builds, commits, and pushes automatically):
   ```sh
   npm run deploy
   ```

## GitHub Pages Configuration

1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/docs" folder
5. Save the settings

Your site will be available at:
**https://sowmyakasiram.github.io/powerstemsolutions**

## Manual Deployment

If you prefer manual control:
1. Run `npm run build`
2. Commit the `docs/` folder changes
3. Push to main branch
4. GitHub Pages will automatically update

## Benefits of Main Branch Deployment

- Simpler workflow (no separate gh-pages branch)
- Built files are part of your repository
- Easier to track deployment history
- No need for gh-pages dependency
