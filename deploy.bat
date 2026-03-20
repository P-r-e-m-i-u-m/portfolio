@echo off
echo.
echo ========================================
echo    Deploying Portfolio to GitHub...
echo ========================================
echo.

echo [1/5] Adding all files...
git add .

echo [2/5] Committing changes...
git commit -m "Update portfolio"

echo [3/5] Pushing to GitHub...
git push origin main

echo [4/5] Building project...
npm run build

echo [5/5] Deploying to GitHub Pages...
git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages

echo.
echo ========================================
echo    Done! Site is live at:
echo    https://p-r-e-m-i-u-m.github.io/portfolio/
echo ========================================
pause