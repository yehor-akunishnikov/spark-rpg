const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    join(__dirname, 'apps/ng/src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'apps/ui-playground/src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'libs/ui-kit/src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'libs/interactive-map/src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
