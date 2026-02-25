# Project Usage & Customization Guide

This document expands on the basics in `README.md` and helps you make small
changes without digging through a large HTML file.

## 🔧 Editing the Site

### Styles
- All CSS is in `styles.css`. Tailwind classes are still used throughout the
  HTML; you can continue adding Tailwind utilities directly in the markup.
- The file is organized with comments separating keyframes, utility classes,
  and component styles. Add your own custom styles near the relevant section.
- If you prefer a build system (PostCSS, Tailwind CLI), replace the CDN link
  in `index.html` with your compiled CSS and manage Tailwind via `tailwind.config.js`.

### Scripts
- Open `script.js` for all JS logic. Sections are marked for data arrays,
  SDK initialization, rendering functions, and event listeners.
- Updating the `servicesData` array will automatically refresh the services grid
  on page load.
- Most DOM interactions use vanilla JS. You can migrate to a framework if
  desired.

### Adding New Pages
1. Create a new HTML file alongside `index.html`.
2. Copy the `<head>` section and update the `<title>`.
3. Link to `styles.css` and `script.js` as done in `index.html`.
4. Modify navigation links accordingly.

## 🧩 SDK Integration

- The site uses two custom SDKs located under `/ _sdk/`. These provide:
  - `element_sdk.js` – editable elements for live configuration.
  - `data_sdk.js` – persistent storage for client reviews.
- Ensure these files are served from the same path on your server.
- You can remove SDK logic if not needed; simply delete the related `if` blocks
  in `script.js`.

## 📦 Deployment

Since this is static, you can deploy it to any static host (GitHub Pages,
Netlify, Vercel, etc.). Just upload the entire folder and make sure the SDK
paths resolve.

## 📝 Additional Notes

- Keep the `README.md` and `docs/` up to date as you extend the project.
- Tag your commits or maintain versioning if you use Git for tracking changes.

Happy customizing!
