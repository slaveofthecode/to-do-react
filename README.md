# Repo

- [github](https://github.com/slaveofthecode/react-redux-app)

## Step by step

In the project directory, you can run:

### `Start a New React Project`

## [react](https://beta.reactjs.org/learn/start-a-new-react-project)

> ## ESLint & Prettier

- Initialize Eslint to your app with

```
npm init @eslint/config
```

'.eslintrc.json' will be created

- Add prettier

```
npm install --save-dev --save-exact prettier
```

After installing go to the .eslintrc.JSON file and inside “extends” add the “prettier” plugin.

- Create file '.prettierrc'

```
touch .prettierrc
```

then set with code below

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

- Add it to package.json and run it via writing the npm run command to the terminal.

```
    "lint": "eslint .",
    "lint:fix": "eslint --fix",
    "format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
```

- Create a .vscode folder and settings.json inside this folder, and put of them
```
{
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```


