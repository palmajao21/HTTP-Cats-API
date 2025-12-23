# HTTP Cat Viewer

A small single-page app that shows HTTP status code images from http.cat.

**Files**
- [index.html](index.html) — main page and markup
- [script.js](script.js) — client-side logic (loads images)
- [style.css](style.css) — mint-themed styles

**Usage**
1. Open `index.html` in your browser (double-click the file or serve the folder).
2. Enter an HTTP status code (100–599) into the input and click "Show Cat".

Tip: If you prefer a local server (recommended for consistent behavior), run:

```bash
python -m http.server 8000
```

then open `http://localhost:8000` in your browser.

**Notes**
- Images are loaded from `https://http.cat/<code>.jpg`. If an image for a code doesn't exist you'll see an error message.
- The app now uses image `onload`/`onerror` handlers to avoid fetch/CORS failures.
- The stylesheet is mint-themed; edit `style.css` to tweak colors.

**Want improvements?**
- I can add Enter-key submission, a loading spinner, or cache valid images for faster repeat views. Reply with what you'd like next.

**Cloning & Setup**

1. Clone the repository (replace the URL with your repo):

```bash
git clone https://github.com/your-username/http-cat-viewer.git
cd http-cat-viewer
```

2. Or download the ZIP from GitHub and extract it.

3. Serve locally (optional but recommended):

```bash
python -m http.server 8000
# or with Node.js: npx http-server -p 8000
```

Open `http://localhost:8000` after serving.

**Detailed Usage**

- Enter a code (e.g., `404`) and click `Show Cat`.
- The button shows a loading state and the image appears below the input when available.
- If the image is missing you'll see an error message under the image area.

If you want, I can update the `README.md` with a real repository URL and contributor guidance.

## Author
Jonathan

## License
This project is open-source and free to use.

