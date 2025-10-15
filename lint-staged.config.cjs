/* eslint-env node */

module.exports = {
  "*.{js,jsx,ts,tsx}": ["pnpm exec eslint --max-warnings=0 --fix"],
  "*.{js,jsx,ts,tsx,md,mdx,json,yml,yaml,css,scss,html}": ["pnpm exec prettier --write"],
};
