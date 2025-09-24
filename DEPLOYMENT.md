# GitHub Pages Deployment

To deploy this Vite React app to GitHub Pages:

1. Make sure you have `gh-pages` installed:
   ```sh
   npm install --save-dev gh-pages
   ```
2. Update the `homepage` field in `package.json` to:
   ```json
   "homepage": "https://<your-github-username>.github.io/<your-repo-name>"
   ```
   Replace `<your-github-username>` and `<your-repo-name>` accordingly.
3. Commit your changes.
4. Deploy with:
   ```sh
   npm run deploy
   ```

The site will be available at the URL above after a few minutes.
