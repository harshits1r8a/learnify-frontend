# Learnify Frontend

### Setup instruction

1. Clone the project.

```
  git clone https://github.com/harshits1r8a/learnify-frontend.git

```

2. Move in to directory.

```
  cd learnify-frontend

```

3. Install dependencies.

```
  npm i

```

2. Run the server.

```
  npm run dev

```

### setup instruction for taiwind

[Tailwind official instruction doc](https://tailwindcss.com/docs/guides/vite)

### Adding plugins and dependencies

```
  npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort esline

1. Install simple import sore

```
  npm install eslint-plugin-simple-import-sort --save-dev
```

2. Add rule in `.eslint.config.js`
```
  'simple-import-sort/imports': 'error', // Add rules for simple-import-sort
  'simple-import-sort/exports': 'error', // Add rules for simple-import-sort
```
3. add simple-import sort plugin in` .eslint.cjs`
```
  plugins: [..., 'simple-import-sort':'simpleImportSort']
```
4. To enable auto import sort on file save in vscode
  - Open `settings.json`
  - add the following config
```
  "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
  } 
```   
