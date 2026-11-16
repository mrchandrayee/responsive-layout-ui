# Responsive Layout UI

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/responsive-layout-ui/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive four-panel flexbox gallery recreated from the supplied screen recording.

## Run locally
No build tools or dependencies are required.

1. Extract the ZIP.
2. Open `index.html` in a modern browser.

Optional local server:
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.

## Interaction
- Hover a panel on desktop to expand it and dim the others.
- Click or tap a panel to keep it selected.
- Use Tab and arrow keys to navigate; Enter/Space selects.
- On narrow screens, the gallery stacks vertically.

## Source fidelity
The recording visibly shows the `.column` flex rules and the hover expansion/dimming rules. Those visible declarations are retained in `style.css`. The recording does not expose the complete original HTML/CSS/JS source, so the remaining structure, colors, typography, responsive breakpoint, and interactions are a faithful runnable reconstruction of the displayed UI, not a byte-for-byte recovery of an original source repository.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
