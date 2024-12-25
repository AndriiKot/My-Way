@echo off
setlocal enabledelayedexpansion

rem Скрипт для вывода все переменных системы в удобном формате
set "paths=%Path%"
set "paths=!paths:;= !"

for %%i in (!paths!) do (
    echo %%i
)

endlocal
