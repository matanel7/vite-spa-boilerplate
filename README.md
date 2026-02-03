# Vite SPA Boilerplate

A modern, fast, and lightweight boilerplate for building Single Page Applications (SPA) using Vite.

## Features

- **Vite** - Lightning fast build tool with instant HMR (Hot Module Replacement)
- **Modern JavaScript** - ES6+ support out of the box
- **Optimized Production Builds** - Automatic code splitting and minification
- **Development Server** - Fast refresh and instant updates

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/matanel7/vite-spa-boilerplate.git
   cd vite-spa-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
vite-spa-boilerplate/
├── public/          # Static assets
├── src/             # Source files
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable components
│   ├── styles/      # CSS/SCSS files
│   └── main.js      # Application entry point
├── index.html       # HTML entry point
├── vite.config.js   # Vite configuration
└── package.json     # Project dependencies
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## License

MIT License - feel free to use this boilerplate for your projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
