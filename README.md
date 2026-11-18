# Signal Sprint

A no-build, static practice quiz for mobile communications, covering the CENG645 ungraded self-assessment and the 2017–2018 / 2018–2019 midterm study guide. Questions are paraphrased for practice and include answer explanations and study tips.

## Run locally

Open `index.html` in a browser. The quiz uses plain HTML, CSS, and JavaScript and does not require a server, account, or build step.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the static site whenever changes are pushed to `main`. It copies only the HTML, CSS, and JavaScript files into the Pages artifact; there is no build step or backend.

1. In the repository, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main`, or run **Deploy static site to GitHub Pages** from the **Actions** tab.
4. Open the deployment URL shown by the completed workflow.

The page imports Google Fonts when online; the system font fallback keeps it usable offline.
