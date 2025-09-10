@echo off
echo ========================================
echo    UPLOAD TO GITHUB - WHO DOES WHAT
echo ========================================
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo Git version:
git --version
echo.

REM Initialize Git repository (if not already initialized)
if not exist ".git" (
    echo Initializing Git repository...
    git init
)

REM Add all files to Git
echo Adding files to Git...
git add .

REM Check if there are changes to commit
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo No changes to commit.
    echo All files are already up to date.
    pause
    exit /b 0
)

REM Commit changes
echo Committing changes...
git commit -m "Initial commit: Who Does What Game - Educational game for kids"

echo.
echo ========================================
echo   READY TO PUSH TO GITHUB
echo ========================================
echo.
echo Next steps:
echo 1. Go to https://github.com and create a new repository
echo 2. Copy the repository URL (e.g., https://github.com/username/repo-name.git)
echo 3. Run the following commands:
echo.
echo    git remote add origin YOUR_REPOSITORY_URL
echo    git branch -M main
echo    git push -u origin main
echo.
echo Or use the GitHub Desktop app for easier management.
echo ========================================
echo.

REM Show current status
echo Current Git status:
git status

echo.
echo Repository is ready for GitHub upload!
pause
