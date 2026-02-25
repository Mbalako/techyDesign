# TechyDesigns Website

This repository contains the source code for the **TechyDesigns** marketing website. It is a static, responsive HTML project with Tailwind CSS and custom JavaScript.

## 📁 Structure

- `index.html` – main page (now simplified, links to CSS/JS)
- `styles.css` – all custom stylesheet rules, animations, and utilities
- `script.js` – page interactivity, data arrays, and SDK integration
- `README.md` – this documentation
- `docs/` – additional documentation files (see below)

## 🚀 Getting Started

1. Clone or download the folder to your local machine.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. Edit `styles.css` for styling changes, or `script.js` for behavior.
4. Tailwind CDN is used; you can replace it with a compiled build if needed.

## 🛠 Development

- **Styles**: All non-Tailwind rules are consolidated in `styles.css`. Feel free to
  add utility classes or move to a preprocessor.
- **Scripts**: Interactions and data logic reside in `script.js`, organized by
  functionality (services, reviews, contact form, etc.).
- **SDKs**: The site depends on `/ _sdk/element_sdk.js` and `/ _sdk/data_sdk.js` for
  configurability and persistent data.

## 📄 Documentation

See the `docs/` folder for additional guides on customization and deployment.

## ⚠️ Notes

- No build tooling or package manager is required; it's plain HTML/CSS/JS.
- Ensure the SDK scripts remain accessible at the same paths if hosting.

## 📞 Contact

For any issues or questions about this project, reach out to the site owner.

---
*Generated automatically by project refactor tooling.*
