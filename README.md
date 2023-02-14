# repo - [github](https://github.com/slaveofthecode/react-redux-app)

### `Start a New React Project`

[react](https://beta.reactjs.org/learn/start-a-new-react-project)

---

### `ESLint & Prettier`

##### [source](https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b)

- Initialize Eslint to your app with. '.eslintrc.json' will be created

```
npm init @eslint/config
```

- Add prettier

```
npm install --save-dev --save-exact prettier
```

- .eslintrc add “prettier”

```
"extends": ["react-app", "react-app/jest", "prettier"],
```

- Create file '.prettierrc'

```
touch .prettierrc
```

- Set with code below

```
{
    "semi": true,
    "tabWidth": 2,
    "printWidth": 100,
    "singleQuote": true,
    "trailingComma": "all",
    "jsxSingleQuote": true,
    "bracketSpacing": true
}
```

- Add script

```
    "lint": "eslint .",
    "lint:fix": "eslint --fix",
    "format": "prettier --write './src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
```

- Create a .vscode folder and settings.json inside this folder, and put of them

```
{
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```

---

### Bootstrap

---

### Craco

---
