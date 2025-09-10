@echo off
echo ========================================
echo    WHO DOES WHAT GAME - STARTUP
echo ========================================
echo.

REM Set PATH to include Node.js
set PATH=%PATH%;C:\Program Files\nodejs

REM Check if Node.js is available
echo Checking Node.js...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is available
echo Checking npm...
npm --version
if %errorlevel% neq 0 (
    echo ERROR: npm not found!
    pause
    exit /b 1
)

echo.
echo Installing/Updating dependencies...
npm install

echo.
echo ========================================
echo   SERVER STARTING...
echo ========================================
echo Game will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo ========================================
echo.
npm run dev

pause
