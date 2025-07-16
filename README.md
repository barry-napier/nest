# Nest CSS Framework

A modern, lightweight CSS framework designed for simplicity and flexibility.

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

## 🎨 Framework Architecture

Nest CSS Framework follows a modular architecture:

1. **Tokens** - Design system variables (colors, spacing, typography)
2. **Theme** - Theme configurations and variations
3. **Elements** - Base HTML element styling
4. **Components** - Reusable UI components
5. **Utilities** - Utility classes for common patterns

## 🛠️ Development

### Adding New Components

1. Create your component CSS file in `src/components/`
2. Import it in `src/nest.css`
3. Test it in `index.html`

### Adding Utilities

1. Create utility classes in `src/utilities/`
2. Follow the naming convention: `.u-{property}-{value}`
3. Import in `src/nest.css`

### Design Tokens

Define your design tokens in `src/tokens/`:

- Colors
- Typography scales
- Spacing scales
- Breakpoints
- Shadows
- Border radius values

## 📦 Build Process

The framework is designed to be lightweight and doesn't require a build step for basic usage. Simply include `src/nest.css` in your HTML.

For production, consider:

- Minifying the CSS
- Removing unused utilities
- Optimizing for your specific use case

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

ISC License - see LICENSE file for details.

## 🆘 Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ for modern web development.
