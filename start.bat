@echo off
cd /d "%~dp0"
echo Starting CareerPilot...
start "" http://localhost:5173
call npm run dev
pause
