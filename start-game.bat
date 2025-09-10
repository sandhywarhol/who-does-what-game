@echo off
echo ========================================
echo    WHO DOES WHAT - GAME SETUP
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo 1. Go to https://nodejs.org/
    echo 2. Download LTS version
    echo 3. Install with default settings
    echo 4. Restart this script
    echo.
    pause
    exit /b 1
)

echo Node.js is installed!
node --version
npm --version
echo.

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.

echo Starting development server...
echo.
echo Game will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

npm run dev
