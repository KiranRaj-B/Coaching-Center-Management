<<<<<<< HEAD
# Coaching-Center-Management
This is a modern web application built using React (Vite) and TypeScript for managing a Free Coaching Center. The application provides authentication, a dashboard, and student management features, ensuring a seamless user experience.
Features

Authentication System: Sign-in and sign-up pages with validation and protected routes.

Dashboard: Displays student progress, upcoming classes, and announcements.

Student Management: Store and retrieve student data using local storage (future backend integration possible).

Reusable Hooks & Config: Includes custom hooks like useLocalStorage.ts and structured constants in constants.ts.

Styled with TailwindCSS: Ensures a clean and responsive UI.

Routing & Error Handling: Proper navigation with an error-handling NotFound page.

# Installation

Follow these steps to set up and run the project locally:

Clone the Repository

git clone <repository-url>
cd free-coaching

Install Dependencies

npm install

Start the Development Server

npm run dev

The application will run on http://localhost:5173/ by default.

Configuration

Environment Variables (if required in the future) should be stored in a .env file.

Update constants.ts for application-wide settings.

# Contact

If you have any questions or need further assistance, feel free to reach out:
📧 Email: kiranrajbadakambi@gmail.com
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> d660125 (update)
