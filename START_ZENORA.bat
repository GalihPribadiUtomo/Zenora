@echo off
title ZENORA - Japanese Learning Platform
echo ========================================================
echo   ZENORA - Japanese Learning Platform
echo   Membuka website di browser...
echo ========================================================
cd /d "%~dp0"

:: Jalankan server lokal dan otomatis buka browser di port yang tepat
pnpm run dev -- --open
pause
