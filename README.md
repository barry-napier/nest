# Nest UI

A modern, classless CSS framework designed to work seamlessly with your design system in Figma. It prioritizes semantic design tokens, accessible native elements, and minimal configuration.

Instead of relying on utility classes, Nest UI styles native HTML elements out of the box, and uses [BEM](https://getbem.com/) where necessary for structured, component-driven styling. It encourages clear separation between design tokens, themes, elements, and components.

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/barry-napier/nest.git
cd nest

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Or start with caching enabled
npm start
```

The development server will open your browser to `http://localhost:3000` where you can see the framework in action.

## 📁 Project Structure

```
nest/
├── src/
│   ├── tokens/      # Design tokens (colors, spacing, typography)
│   ├── theme/       # Theme configurations
│   ├── elements/    # Base HTML element styles
│   ├── components/  # Reusable UI components
│   ├── utilities/   # Utility classes
│   └── nest.css     # Main CSS file
├── index.html       # Demo page
├── package.json
└── README.md
```

## 🧩 How It Works

1. **Design Tokens in Figma**
   Designers define all core tokens (colors, spacing, typography, etc.) using Figma variables.

2. **Export Tokens to CSS**
   A script pulls Figma variables via the Figma API and converts them into CSS custom properties, saved in `tokens.css`.

3. **Semantic Tokens**
   A second layer of semantic tokens (like `--btn-background`) is defined in `@layer nest.core` for use across themes and components.

4. **Component Styling**
   Each component (like buttons, alerts, modals) uses semantic tokens and optional BEM structure. This keeps styles predictable and easy to override.

5. **Theming Support**
   Light and dark themes are managed via `.nest-theme-light` and `.nest-theme-dark` selectors using token remapping.

6. **No Build Step Required**
   All files are native `.css`, compatible with modern browsers — zero JavaScript or tooling needed to use Nest UI.

## 🎨 Framework Architecture

Nest UI follows a design-token-driven architecture:

1. **Tokens** - Figma-exported design tokens and semantic token mappings
2. **Theme** - Light/dark theme configurations with token remapping
3. **Elements** - Native HTML element styling using semantic tokens
4. **Components** - BEM-structured components with semantic tokens
5. **Core** - Base framework layer with `@layer nest.core`

## 🛠️ Development

### Adding Components

1. Create your component CSS file in `src/components/` using BEM methodology
2. Use semantic tokens from `@layer nest.core` for styling
3. Import it in `src/nest.css`
4. Test it in `index.html`

### Design Tokens

Design tokens are managed through Figma:

1. Define tokens in Figma using variables
2. Export via Figma API script to `src/tokens/tokens.css`
3. Create semantic mappings in `@layer nest.core`
4. Use semantic tokens in components and elements

### Theming

Themes are managed through CSS custom properties:

- Light theme: `.nest-theme-light`
- Dark theme: `.nest-theme-dark`
- Token remapping for theme variations

## 📦 Build Process

Nest UI is designed to be zero-configuration and doesn't require a build step. Simply include `src/nest.css` in your HTML.

For production, consider:

- Minifying the CSS
- Optimizing for your specific use case
- Removing unused components if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🆘 Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ for modern web development.
