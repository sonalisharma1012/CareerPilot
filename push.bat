@echo off
cd /d "%~dp0"
git add .
git diff --cached --quiet
if %errorlevel%==0 (
    echo No changes to upload.
    pause
    exit /b 0
)
set /p msg=Enter commit message:
if "%msg%"=="" set msg=Update CareerPilot
git commit -m "%msg%"
if errorlevel 1 (
    echo Commit failed.
    pause
    exit /b 1
)
git push
if errorlevel 1 (
    echo Push failed. Check your internet connection and try again.
) else (
    echo Successfully uploaded to GitHub!
)
pause
