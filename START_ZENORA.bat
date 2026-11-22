@echo off
title ZENORA - Japanese Learning Platform
echo ========================================================
echo   ZENORA - Japanese Learning Platform
echo   Membuka website di browser...
echo ========================================================
cd /d "%~dp0"

:: Buka browser secara otomatis ke http://localhost:5173
start "" http://localhost:5173

:: Jalankan server lokal
pnpm run dev
pause
