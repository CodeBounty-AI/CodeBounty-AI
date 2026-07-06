#!/bin/bash
echo "🚀 Deploy CodeBounty AI ke GitHub Pages"
rm -rf .next out
npm run build
touch out/.nojekyll
npx gh-pages -d out -b gh-pages --force
echo "✅ Selesai! Akses: https://codebounty-ai.github.io/codebounty-ai/"
